# Page Shortcodes Dokumentation

Diese Shortcodes ermöglichen es, schlanke Markdown-Dateien für alternierende Page-Sections zu erstellen.

## Verfügbare Shortcodes

### 1. `page-image` - Standalone Image
Für einzelne Bilder mit konfigurierbarer Größe.

```markdown
{{< page-image src="page/images/bild.png" alt="Beschreibung" width="1200" >}}
```

**Parameter:**
- `src` (erforderlich): Pfad zum Bild
- `alt` (optional): Alt-Text für das Bild (Standard: "Bild")
- `width` (optional): Bildbreite in Pixeln (Standard: "800")

### 2. `page-hero` - Hero Section
Für die erste Section mit verstärktem Hintergrund.

```markdown
{{< page-hero image="page/images/hero.png" alt="Hero Bild" width="1200" >}}
# Haupttitel
- Listenpunkt 1
- Listenpunkt 2
{{< /page-hero >}}
```

**Parameter:**
- `image` (optional): Pfad zum Bild
- `alt` (optional): Alt-Text für das Bild
- `width` (optional): Bildbreite in Pixeln (Standard: "800")

### 3. `page-section` - Standard Section
Für normale alternierende Sections.

```markdown
{{< page-section image="page/images/section.png" alt="Section Bild" width="900" >}}
# Section Titel
- Listenpunkt 1
- Listenpunkt 2
{{< /page-section >}}
```

**Parameter:**
- `image` (optional): Pfad zum Bild
- `alt` (optional): Alt-Text für das Bild
- `width` (optional): Bildbreite in Pixeln (Standard: "800")

### 4. `page-cta` - Call-to-Action Section
Für die letzte Section mit Button und verstärktem Hintergrund.

```markdown
{{< page-cta image="page/images/cta.png" alt="CTA Bild" width="1000" button-text="Jetzt starten" button-link="/contact" >}}
# Call-to-Action Titel
Beschreibungstext hier
{{< /page-cta >}}
```

**Parameter:**
- `image` (optional): Pfad zum Bild
- `alt` (optional): Alt-Text für das Bild
- `width` (optional): Bildbreite in Pixeln (Standard: "800")
- `button-text` (optional): Text für den Button
- `button-link` (optional): Link für den Button (Standard: "#")

### 5. `page-text-section` - Nur Text Section
Für Sections ohne Bild.

```markdown
{{< page-text-section >}}
# Nur Text Titel
Zentrierter Text ohne Bild
{{< /page-text-section >}}
```

### 6. `page-multi-image` - Section mit mehreren Bildern
Für Sections mit zwei Bildern.

```markdown
{{< page-multi-image image1="path1.png" image2="path2.png" alt1="Bild 1" alt2="Bild 2" width1="600" width2="800" >}}
# Titel mit mehreren Bildern
Content hier
{{< /page-multi-image >}}
```

**Parameter:**
- `image1` (optional): Pfad zum ersten Bild
- `image2` (optional): Pfad zum zweiten Bild
- `alt1` (optional): Alt-Text für das erste Bild
- `alt2` (optional): Alt-Text für das zweite Bild
- `width1` (optional): Breite des ersten Bildes in Pixeln (Standard: "800")
- `width2` (optional): Breite des zweiten Bildes in Pixeln (Standard: "800")

## Styling

### Alternierende Hintergründe
- **Ungerade Sections**: `linear-gradient(120deg, rgba(168,27,88,.2) 0%, rgba(60,49,152,.2) 100%)`
- **Gerade Sections**: `linear-gradient(300deg, rgba(168,27,88,.2) 0%, rgba(60,49,152,.2) 100%)` (180° gedreht)

### Alternierende Layouts
- **Ungerade Sections**: Bild links, Text rechts
- **Gerade Sections**: Bild rechts, Text links

### Responsive Design
Auf mobilen Geräten (< 768px) werden alle Sections vertikal gestapelt mit Text oben und Bild unten.

## Beispiel einer kompletten Page

```markdown
---
title: "Meine Page"
date: 2025-06-03
layout: "page"
image: "page/images/header.png"
summary: "Zusammenfassung der Page"
---

{{< page-hero image="page/images/hero.png" alt="Hero" >}}
# Willkommen
- Punkt 1
- Punkt 2
{{< /page-hero >}}

{{< page-section image="page/images/section1.png" alt="Section 1" >}}
# Erste Section
Content hier
{{< /page-section >}}

{{< page-section image="page/images/section2.png" alt="Section 2" >}}
# Zweite Section
Mehr Content
{{< /page-section >}}

{{< page-cta image="page/images/cta.png" alt="CTA" button-text="Kontakt" button-link="/contact" >}}
# Jetzt handeln!
Call-to-Action Text
{{< /page-cta >}}
```