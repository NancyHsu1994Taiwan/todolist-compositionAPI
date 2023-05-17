import { ref } from 'vue'
import { defineStore } from 'pinia'
import request from '../APIs/request'

export const useCounterStore = defineStore('counter', () => {
  // 'counter'是id

  const userData = {
    token: localStorage.getItem('userTo:completedken'),
    nickName: localStorage.getItem('userNickname'),
    config: {
      headers: {
        Authorization: localStorage.getItem('userToken')
      }
    }
  }

  const data = ref([])

  const fetchData = () => {
    request.get('/todos', userData.config).then((res) => {
      data.value = res.data.todos
      //   console.log(data.value)
    })
  }

  return { userData, data, fetchData }
  // 一定要return
})
