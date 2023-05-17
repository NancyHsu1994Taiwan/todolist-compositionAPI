<template>
  <div class="background bg-primary">
    <NavItem :config="userData.config" :nickname="userData.nickName" />
    <div class="sm:w-[500px] mx-auto">
      <InputItem :config="userData.config" />
    </div>
    <div class="sm:w-[500px] mx-auto">
      <div class="flex w-full justify-between">
        <router-link to="/">全部</router-link>
        <router-link to="/taskYet">待完成</router-link>
        <router-link to="/taskDone">已完成</router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup>
// import { onMounted } from 'vue'
// import { RouterLink, RouterView } from 'vue-router'
// import request from './APIs/request'
import { useCounterStore } from './store/counter.js'
const store = useCounterStore()

import NavItem from './components/NavItem.vue'
import InputItem from './components/InputItem.vue'
let userData = {
  token: store.userData.token,
  nickName: store.userData.nickName,
  config: store.userData.config
}

// let userData = {
//   token: localStorage.getItem('userToken'),
//   nickName: localStorage.getItem('userNickname'),
//   config: {
//     headers: {
//       Authorization: localStorage.getItem('userToken')
//     }
//   }
// }

// let data = []

// const getData = () => {
//   request.get('/todos', userData.config).then((res) => {
//     console.log(res)
//     data = res.data.todos
//     console.log(data)
//   })
// }
// onMounted(() => {
//   getData()
// })
</script>
