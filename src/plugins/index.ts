import vuetify from './vuetify'
import { type App } from 'vue'


export const registerPlugins = (app: App): void => {
  app
    .use(vuetify)
}
