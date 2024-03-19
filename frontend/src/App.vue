<script setup lang="ts">
import { Toaster } from 'vue-sonner'
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <Toaster theme="dark" />
</template>
