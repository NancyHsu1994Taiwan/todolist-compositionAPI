// import './assets/main.css'
import './Tailwind.css'
import { createApp } from 'vue'
import TodoList from './TodoList.vue'
import router from './router/todoRouter'
import { createPinia } from 'pinia'

const app = createApp(TodoList)
const pinia = createPinia()

app.use(router)
app.use(pinia)

app.mount('#app')
