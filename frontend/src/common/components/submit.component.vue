<script setup lang="ts">
defineProps({ text: { type: String, required: true } })
defineEmits(['click'])
</script>

<template>
  <button class="Form-submit" @click="$emit('click', $event)" v-bind="$attrs">
    {{ text }}
  </button>
</template>

<style scope lang="sass">
@use '../../sass/style'

.Form-submit
  @include style.font1(1.5rem)
  color: style.$gray1
  background-color: style.$green
  border: none
  width: 100%
  line-height: 1.5
  border-radius: 20px
  cursor: pointer
.Form-submit:not([disabled]):active
  transform: scale(.9)
</style>
