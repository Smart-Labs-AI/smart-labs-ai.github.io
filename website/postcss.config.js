const purgecss = require('@fullhuman/postcss-purgecss')
const path = require('path')

const excludedFiles = [
  path.resolve(__dirname, 'static/css/fontawesome/6.7.2/css/all.min.css')
]

module.exports = (ctx) => {
  const filePath = ctx.file ? path.resolve(ctx.file) : ''

  const purgeEnabled = !excludedFiles.includes(filePath)

  return {
    plugins: [
      ...(purgeEnabled ? [
        purgecss({
          content: ['./layouts/**/*.html', './content/**/*.md'],
          safelist: [
            'call-to-action', 
            'title',
            'is-active'
          ],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        })
      ] : [])
    ]
  }
}