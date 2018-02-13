module.exports = {
  parser: false,
  map: false,
  from: './src/assets/css/main.css',
  to: '',
  plugins: {
    "postcss-import": {},
    "postcss-simple-vars": {},
    "postcss-extend": {},

    "postcss-nested": {},
    "postcss-mixins": {},
    "postcss-cssnext": {
      browsers: ['last 2 versions', '> 5%'],
      features: {
        customProperties: {
          preserve: true,
          variables: {},
          appendVariables: true
        },
        applyRule: {
          preserve: true,
          sets: {
            'toolbar-theme': {
              backgroundColor: 'rebeccapurple',
              color: 'white',
              border: '1px solid green',
            }
          }
        }
      }
    },
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
    "postcss-url": { url: 'inline' },
    // "postcss-modules": {}
  }
}
