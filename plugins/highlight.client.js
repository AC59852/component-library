import hljs from 'highlight.js/lib/core'
import xhtml from 'highlight.js/lib/languages/xml'
import css from 'highlight.js/lib/languages/css'
import highlightJS from '@highlightjs/vue-plugin'
import 'highlight.js/styles/atom-one-dark.css'

export default defineNuxtPlugin((nuxtApp) => {
    hljs.registerLanguage('xhtml', xhtml)
    hljs.registerLanguage('css', css)
    nuxtApp.vueApp.use(highlightJS)
})