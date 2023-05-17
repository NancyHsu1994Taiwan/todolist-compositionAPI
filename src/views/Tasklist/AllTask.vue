<template>
  <!-- <TaskList :data="data" /> -->
  <div class="tasklist">
    <TaskItem
      v-for="(item, index) in data"
      :key="item.id"
      :content="item.content"
      :id="item.id"
      :done="item.completed_at"
      :index="index"
    />
  </div>
  <!-- {{ data }} -->
</template>
<script setup>
// import TaskList from '../../components/TaskList.vue'
import TaskItem from '../../components/TaskItem.vue'

import { computed } from 'vue'
import { useCounterStore } from '../../store/counter.js'
const store = useCounterStore()

let data = computed(() => {
  return store.data
})
</script>
