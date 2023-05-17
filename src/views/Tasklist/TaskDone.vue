<template>
  <p>已完成</p>
  <div class="taskList">
    <TaskItem
      v-for="(item, index) in dataDone"
      :key="item.id"
      :content="item.content"
      :id="item.id"
      :done="item.completed_at"
      :index="index"
    />
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useCounterStore } from '../../store/counter.js'
import TaskItem from '../../components/TaskItem.vue'

const store = useCounterStore()

let dataDone = computed(() => {
  return store.data.filter((item) => item.completed_at !== null)
})
</script>
