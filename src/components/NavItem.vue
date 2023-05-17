<template>
  <nav class="container mx-auto flex justify-between">
    <div class="flex">
      <img src="../assets/logo.svg" alt="" />
      <p>ONLINE TODO LIST</p>
    </div>
    <ul class="flex">
      <li class="mr-6">
        <p class="">{{ props.nickname }} 的代辦</p>
      </li>
      <li>
        <button type="button" @click="logout">登出</button>
      </li>
    </ul>
  </nav>
</template>
<script setup>
import { onMounted } from 'vue'
import request from '../APIs/request'
// import router from '../router/todoRouter'

const props = defineProps({
  config: {
    type: Object,
    required: true
  },
  nickname: {
    type: String,
    required: true
  }
})

const checkTest = () => {
  request
    .get('/check', props.config)
    .then((res) => {
      console.log(res)
      if (props.config == null) {
        location.href = './index.html'
        alert('登入失敗')

        return
      }
    })
    .catch((err) => {
      console.log(err)
      if (err.response.status !== 200) {
        alert('登入失敗')
        location.href = './index.html'
        // router.push
      }
    })
}

const logout = () => {
  request
    .delete('/users/sign_out', props.config)
    .then((res) => {
      console.log(res)
      alert('已成功登出')
      localStorage.removeItem('userToken')
      localStorage.removeItem('userNickname')
      location.href = './index.html'
    })
    .catch((err) => {
      console.log(err)
    })
}

onMounted(() => {
  checkTest()
})
</script>
