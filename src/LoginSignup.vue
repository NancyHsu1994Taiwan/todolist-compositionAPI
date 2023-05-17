<script setup>
import ValidationItem from './components/ValidationItem.vue'
</script>

<template>
  <div class="bg-primary h-[100vh] flex items-center">
    <div class="sm:container flex mx-auto my-auto">
      <div class="">
        <div class="flex mb-[20px] flex-row">
          <img src="./assets/logo.svg" alt="" />
          <h1 class="title text-secondary">ONLINE TODO LIST</h1>
        </div>
        <div class="sm:flex sm:justify-center sm:items-center">
          <div class="hidden sm:block sm:mx-[53px]">
            <img src="./assets/bg-img.svg" alt="" />
          </div>
        </div>
      </div>

      <ValidationItem class="sm:mx-[53px]"></ValidationItem>
    </div>
  </div>
</template>

<style scoped></style>
