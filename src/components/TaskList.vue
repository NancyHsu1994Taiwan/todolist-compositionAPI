<template>
  <div class="">
    <TaskItem
      v-for="(item, index) in props.data"
      :key="item.id"
      :content="item.content"
      :id="item.id"
      :done="item.completed_at"
      :index="index"
    />
  </div>
</template>
<script setup>
// import { onMounted } from 'vue'
import TaskItem from './TaskItem.vue'
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})
// onMounted(() => {
//   console.log(props.data[0]['id'])
// })
</script>
