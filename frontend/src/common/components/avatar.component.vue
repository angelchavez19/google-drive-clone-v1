<script setup lang="ts">
defineProps({
  icon: { type: String, required: true },
  name: { type: String, required: true }
})
</script>

<template>
  <div class="Avatar">
    <img :src="icon" :alt="`User Icon of ${name}`" />
  </div>
</template>

<style scope lang="sass">
$size: 50px
$color: #eee

.Avatar
  width: $size
  height: $size
  border-radius: 50%
  outline: 2px solid $color
  box-shadow: 0 0 10px $color, 0 0 10px $color, 0 0 5px $color
  overflow: hidden
  background-color: $color
  img
    width: $size
    height: $size
</style>
