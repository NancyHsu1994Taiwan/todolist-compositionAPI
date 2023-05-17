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
          v-model="signupData.email"
        />
        <ErrorMessage name="email" as="p" class="errorMessage"></ErrorMessage>
      </div>
      <div class="mb-4">
        <label for="nickname" class="mb-1">您的暱稱</label>
        <VField
          id="nickname"
          name="nickname"
          label="nickname"
          type="text"
          placeholder="請輸入暱稱"
          rules="required"
          v-model="signupData.nickname"
        />
        <ErrorMessage name="nickname" as="p" class="errorMessage"></ErrorMessage>
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
          v-model="signupData.password"
        />
        <ErrorMessage name="password" as="p" class="errorMessage mb-4"></ErrorMessage>
      </div>
      <div class="mb-4">
        <label for="password" class="mb-1">再次輸入密碼</label>
        <VField
          id="passwordAgain"
          name="passwordAgain"
          label="passwordAgain"
          type="text"
          placeholder="請再次輸入密碼"
          rules="required"
          v-model="signupData.passwordAgain"
        />
        <ErrorMessage name="passwordAgain" as="p" class="errorMessage mb-4"></ErrorMessage>
      </div>
    </VForm>
    <button type="button" @click="signup" class="block">註冊</button>
    <button type="button" @click="goToLogin" class="block">登入</button>
  </div>
</template>
<script setup>
import request from '../APIs/request'
// import axios from 'axios'
let signupData = {
  email: '',
  nickname: '',
  password: '',
  passwordAgain: ''
}

function signup() {
  request
    .post('/users', {
      user: {
        email: signupData.email,
        nickname: signupData.nickname,
        password: signupData.password
      }
    })
    .then((res) => {
      console.log(res)
    })
}

function goToLogin() {
  //   location.href = './login'
}
</script>
