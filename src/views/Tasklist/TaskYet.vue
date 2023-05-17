<template>
  <p>未完成</p>
  <div class="taskList">
    <TaskItem
      v-for="(item, index) in dataYet"
      :key="item.id"
      :content="item.content"
      :id="item.id"
      :done="item.completed_at"
      :index="index"
    />
  </div>

  <!-- {{ dataYet }} -->
</template>
<script setup>
// import TaskList from '../../components/TaskList.vue'
import { computed } from 'vue'
import { useCounterStore } from '../../store/counter.js'
import TaskItem from '../../components/TaskItem.vue'

const store = useCounterStore()
// let data = computed(() => {
//   return store.data
// })

let dataYet = computed(() => {
  return store.data.filter((item) => item.completed_at === null)
})
</script>
