import { defineStore } from 'pinia'
import { storeToRefs } from 'pinia'
import { useCounterStore } from './counter'
const store = useCounterStore()
const data = storeToRefs(store)
export const useStatus = defineStore('status', () => {
  const status = ''

  return
})
