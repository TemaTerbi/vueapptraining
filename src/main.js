import { createApp } from 'vue'
import App from './App.vue'
import components from  '@/components/UI'
import derectives from "@/derectives";
import router from "@/router/router";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

derectives.forEach(directive => {
    app.directive(directive.name, directive)
})


app .use(router)
    .mount('#app')

