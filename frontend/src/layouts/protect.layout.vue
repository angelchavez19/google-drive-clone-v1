<script lang="ts">
import { toast } from 'vue-sonner'
import router from '@/router'
import { useUserInfoStore } from '@/store/user-info'

export default {
  created() {
    this.check401()
  },
  methods: {
    async check401() {
      let { getData } = useUserInfoStore()
      try {
        await getData()
      } catch (error) {
        toast.error('You are not authenticated')
        router.push({ name: 'users' })
      }
    }
  }
}
</script>

<template><slot /></template>
