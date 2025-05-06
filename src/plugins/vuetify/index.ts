import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify'

const light: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#184966',
    secondary: '#5AB685',
    tertiary: '#71B5D8',
    error: '#FF686b'
  }
}

const dark: ThemeDefinition = {
  dark: true,
  colors: {
    primary: '#184966',
    secondary: '#5AB685',
    tertiary: '#71B5D8',
    error: '#FF686b'
  }
}

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: { light, dark }
  }
})
