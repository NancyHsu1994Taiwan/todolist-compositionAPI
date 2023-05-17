<template>
  <div class="taskItem flex justify-between items-center w-full">
    <div class="w-full flex items-center justify-between">
      <label class="flex w-full">
        <input type="checkbox" class="hidden" @click="switchStatus" />
        <div class="toggle w-[20px] h-[20px]" @click="toggleStatus">
          <!-- <img :src="isCompleted" alt=""> -->
          <img src="./src/assets/checkbox.svg" class="h-[100%]" />
          <!-- <img src="../assets/check.svg" alt="" /> -->
        </div>
        <input
          type="text"
          id="taskContent"
          class="w-full h-[20px] mr-4"
          :value="taskItem.content"
        />
        <!-- <p>{{ taskItem.content }}</p> -->
      </label>

      <!-- <p>{{ item.id }}</p> -->
      <button class="delete" @click="deleteItem">X</button>
    </div>
  </div>
</template>
<script setup>
import request from '../APIs/request'
import { useCounterStore } from '../store/counter.js'
const store = useCounterStore()

const taskItem = defineProps({
  content: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  }
})

const deleteItem = () => {
  request
    .delete(`/todos/${taskItem.id}`, store.userData.config)
    .then((res) => {
      console.log('delete', res)
      store.fetchData()
    })
    .catch((err) => {
      console.log(err)
    })
}

const switchStatus = () => {
  request
    .patch(`/todos/${taskItem.id}/toggle`, '', store.userData.config)
    .then((res) => {
      console.log('switch', res)
      store.fetchData()
    })
    .catch((err) => console.log(err))
}
let isCompleted = false
const toggleStatus = () => {
  const toggle = document.querySelector('.toggle')
  const taskContent = document.querySelector('#taskContent')
  console.log(toggle)
  let itemClicked = store.data.filter((item) => {
    return item.id === taskItem.id
  })
  if (itemClicked[0].completed_at === null) {
    isCompleted = false
    toggle.innerHTML = '<img src="../assets/checkbox.svg" alt="" class="h-[100%]"/>'
    taskContent.setAttribute('class', 'w-full h-[20px] mr-4')
  } else {
    isCompleted = true
    toggle.innerHTML = '<img src="../assets/check.svg" alt="" class="h-[100%]"/>'
    taskContent.setAttribute('class', 'w-full h-[20px] mr-4 line line-through')
  }
}
</script>
<style scoped>
.taskItem {
  background-color: #fff;
  padding: 15px 0;
}
</style>
