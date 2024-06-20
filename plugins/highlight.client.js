import hljs from 'highlight.js/lib/core'
import xhtml from 'highlight.js/lib/languages/xml'
import highlightJS from '@highlightjs/vue-plugin'
import 'highlight.js/styles/atom-one-dark.css'

export default defineNuxtPlugin((nuxtApp) => {
    hljs.registerLanguage('xhtml', xhtml)
    nuxtApp.vueApp.use(highlightJS)
})