<template>
  <div class="">
    <router-view></router-view>
    <router-link to="/">login</router-link>

    <router-link to="/singup">signup</router-link>
    <!-- <LoginView></LoginView> -->
  </div>
  <div class="">
    <!-- <loginItem />
    <SignupItem class="hidden" /> -->
    <!-- <router-view></router-view>
    <router-link to="/">登入</router-link>
    <router-link to="/singup">註冊</router-link> -->
  </div>
</template>
<script setup>
// import LoginView from '../views/Login&Signup/LoginView.vue'
import loginItem from './LoginItem.vue'
import SignupItem from './SignupItem.vue'
</script>
