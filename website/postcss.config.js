const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    purgecss({
      content: ['./layouts/**/*.html', './content/**/*.md'],
      safelist: [
        'call-to-action',
        'title',
        /^fa-/,
        'fas'
      ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  ]
}
