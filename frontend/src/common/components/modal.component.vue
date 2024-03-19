<script setup lang="ts">
let props = defineProps({
  x: { type: Number, required: true },
  y: { type: Number, required: true },
  isShow: { type: Boolean, required: true }
})

import { computed } from 'vue'
import BaseModal from './base-modal.component.vue'

let position = computed(() => `top: ${props.y}px; left: ${props.x}px;`)
</script>

<template>
  <BaseModal class="Modal" :is-show="isShow" :style="position">
    <slot />
  </BaseModal>
</template>

<style scope lang="sass">
@use '../../sass/style'

.Modal
  position: fixed
  z-index: 1000
</style>
