import { createApp } from 'vue'
import { svgSpritePlugin } from 'vue-svg-sprite'
import App from './App.vue'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(svgSpritePlugin, {
    url: 'icons.svg',
  })
  .mount('#app')
