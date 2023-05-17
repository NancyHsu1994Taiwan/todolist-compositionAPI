// import './assets/main.css'
import './Tailwind.css'
import { createApp } from 'vue'
import LoginSignup from './LoginSignup.vue'
import router from './router/indexRouter'
import { createPinia } from 'pinia'
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
// 限制條件
import { required, email, min } from '@vee-validate/rules'
defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
// 限制條件
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true // 輸入文字時，就立即進行驗證
})

setLocale('zh_TW')
const app = createApp(LoginSignup)
const pinia = createPinia()
app.component('VField', Field)
app.component('VForm', Form)
app.component('ErrorMessage', ErrorMessage)

app.use(router)
app.use(pinia)
app.mount('#app')
