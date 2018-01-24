module.exports = {
  parser: false,
  map: false,
  from: './src/assets/css/main.css',
  to: '',
  plugins: {
    "autoprefixer": {},
    "postcss-import": {},
    "postcss-simple-vars": {},
    "postcss-extend": {},
    "postcss-nested": {},
    "postcss-mixins": {},
    "postcss-cssnext": {},
    "postcss-font-magician": {
      custom: {
        'icomoon': {
          variants: {
            normal: {
              400: {
                url: {
                  woff: './src/assets/css/common/fonts/icomoon.woff',
                  ttf: './src/assets/css/common/fonts/icomoon.ttf',
                  eot: './src/assets/css/common/fonts/icomoon.eot',
                  svg: './src/assets/css/common/fonts/icomoon.svg'
                }
              }
            }
          }
        }
      }
    },
    "postcss-url": { url: 'inline' }
  }
}
