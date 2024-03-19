<script setup lang="ts">
defineProps({ title: { type: String, required: true } })
</script>

<template>
  <h1 class="Form-title">{{ title }}</h1>
  <form class="Form" v-bind="$attrs">
    <slot />
  </form>
</template>

<style scope lang="sass">
@use '../../sass/style'

.Form-title
  @include style.font1(2rem)
  color: style.$white
  text-align: center
.Form
  @include style.flex-center()
  flex-direction: column
  width: 100%
  gap: 1rem
</style>
