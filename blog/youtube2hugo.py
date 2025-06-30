import requests
from bs4 import BeautifulSoup
from datetime import datetime
import sys
import re
import os
from urllib.parse import urlparse, parse_qs

def slugify(text):
    text = re.sub(r'[^\w\s-]', '', text).strip().lower()
    return re.sub(r'[\s]+', '-', text)

def get_youtube_metadata(url):
    res = requests.get(url)
    soup = BeautifulSoup(res.text, 'html.parser')

    def get_meta(property_name):
        tag = soup.find('meta', property=property_name)
        return tag['content'] if tag else None

    title = get_meta('og:title')
    description = get_meta('og:description')
    image_url = get_meta('og:image')
    upload_date = get_meta('datePublished') or datetime.utcnow().isoformat()

    if not all([title, description, image_url]):
        raise ValueError("Some metadata could not be found.")

    slug = slugify(title)
    date = datetime.fromisoformat(upload_date).strftime('%Y-%m-%d') if 'T' in upload_date else upload_date

    return {
        "title": title,
        "slug": slug,
        "date": date,
        "description": description,
        "image_url": image_url,
        "url": url
    }

def download_image(image_url, save_path):
    response = requests.get(image_url, stream=True)
    if response.status_code == 200:
        with open(save_path, 'wb') as out_file:
            for chunk in response.iter_content(1024):
                out_file.write(chunk)
        print(f"✅ Image downloaded: {save_path}")
    else:
        print(f"❌ Failed to download image from {image_url}")

def write_markdown_file(data, md_path, image_relative_path):
    frontmatter = f"""---
title: "{data['title']}"
date: {data['date']}
layout: "video"
image: "{image_relative_path}"
summary: "{data['description']}"
youtube_url: "{data['url']}"
include_footer: true
sidebar: true
---
"""
    with open(md_path, "w", encoding="utf-8") as f:
        f.write(frontmatter)
    print(f"✅ Markdown file created: {md_path}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python youtube2hugo.py <youtube-video-url>")
        sys.exit(1)

    url = sys.argv[1]
    video = get_youtube_metadata(url)

    # Paths
    md_dir = "."
    image_dir = "../../assets/videos/images"
    os.makedirs(md_dir, exist_ok=True)
    os.makedirs(image_dir, exist_ok=True)

    image_filename = f"{video['date']}-{video['slug']}.jpg"
    image_path = os.path.join(image_dir, image_filename)
    image_relative_path = f"/videos/images/{image_filename}"

    md_filename = f"{video['date']}-{video['slug']}.md"
    md_path = os.path.join(md_dir, md_filename)

    # Download and write
    download_image(video['image_url'], image_path)
    write_markdown_file(video, md_path, image_relative_path)

