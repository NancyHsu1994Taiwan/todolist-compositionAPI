<template>
  <div class="sm:w-[304px] w-full mx-auto">
    <h2 class="title-2 mb-8">最實用的線上代辦事項服務</h2>
    <VForm>
      <div class="mb-4">
        <label for="email" class="mb-1">Email</label>
        <VField
          id="email"
          name="email"
          label="email"
          type="text"
          placeholder="請輸入Email"
          rules="required|email"
          v-model="data.email"
        />

        <ErrorMessage name="email" as="p" class="errorMessage"></ErrorMessage>
      </div>
      <div class="mb-4">
        <label for="password" class="mb-1">密碼</label>
        <VField
          id="password"
          name="password"
          label="password"
          type="text"
          placeholder="請輸入密碼"
          rules="required"
          v-model="data.password"
        />

        <ErrorMessage name="password" as="p" class="errorMessage mb-4"></ErrorMessage>
      </div>
    </VForm>
    <button type="button" @click="login" class="block">登入</button>
    <button type="button" @click="gotoSignup" class="block">註冊</button>
  </div>
</template>
<script setup>
import request from '../../APIs/request'
// import { useRouter } from 'vue-router'
// let router = useRouter()
// import { router } from 'vue-router'
// import router from '../router/indexRouter'
let data = {
  password: '',
  email: '',
  token: '',
  nickname: ''
}

function login() {
  request
    .post('/users/sign_in', {
      user: {
        email: data.email,
        password: data.password
      }
    })
    .then((res) => {
      console.log(res)
      data.token = res.headers.authorization
      data.nickname = res.data.nickname
      localStorage.setItem('userToken', data.token)
      localStorage.setItem('userNickname', data.nickname)
      if (res.data.message == '登入成功') {
        // router.push()
        location.href = './todolist.html'
      } else {
        alert('登入失敗，若尚未註冊請前往註冊頁面註冊')
      }
    })
    .catch((err) => {
      console.log(err)
    })
}

function gotoSignup() {
  location.href = './signup'
  // router.push('/singup')
}
</script>
