<template>
  <div class="relative">
    <input type="input" placeholder="新增待辦事項" class="border-2 border-black" v-model="text" />
    <button
      type="button"
      class="bg-secondary w-[40px] h-[40px] rounded-[10px] flex justify-center items-center absolute z-index top-[0.5rem] right-[0.25rem]"
      @click="addTask"
    >
      <img src="../assets/add.svg" alt="" />
    </button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import request from '../APIs/request'
import { useCounterStore } from '../store/counter.js'
const props = defineProps({
  config: {
    type: Object,
    required: true
  }
})
const store = useCounterStore()
console.log(store.data)

const text = ref('')

const addTask = () => {
  request
    .post(
      '/todos',
      {
        todo: {
          content: text.value
        }
      },
      props.config
    )
    .then((res) => {
      console.log(res)

      store.fetchData()
    })
    .catch((err) => {
      console.log(err)
    })
}
</script>
