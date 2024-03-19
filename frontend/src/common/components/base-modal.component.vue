<script setup lang="ts">
defineProps({ isShow: { type: Boolean, required: true } })
</script>

<template>
  <div class="Modal" v-show="isShow">
    <slot />
  </div>
</template>

<style scope lang="sass"></style>
