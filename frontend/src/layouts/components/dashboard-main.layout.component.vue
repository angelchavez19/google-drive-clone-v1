<script setup lang="ts"></script>

<template>
  <div class="Main">
    <slot />
  </div>
</template>

<style scope lang="sass">
@use '../../sass/style'

.Main
  @include style.flex-center()
  flex-direction: column
  position: fixed
  top: 0
  left: style.$dashboard-aside-width
  padding: 2rem
  width: calc( 100vw - style.$dashboard-aside-width - 4rem )
  gap: 1rem
</style>
