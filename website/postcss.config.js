const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    purgecss({
      content: ['./layouts/**/*.html', './content/**/*.md'],
      safelist: [
        'call-to-action',
        'title' // falls .call-to-action .title auch verschwinden sollte
      ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  ]
}
