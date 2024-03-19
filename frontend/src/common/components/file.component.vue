<script setup lang="ts">
const props = defineProps({
  path: { type: String, required: true },
  size: { type: String, required: true },
  name: { type: String, required: true },
  showLink: { type: Boolean }
})

import { computed } from 'vue'
import DirectoryIcon from '@/assets/icons/directory.icon.vue'
import FileIcon from '@/assets/icons/file.icon.vue'

let isFile = computed(() => props.name.includes('.'))
</script>

<template>
  <div class="File">
    <div class="File-icon">
      <FileIcon v-if="isFile" />
      <DirectoryIcon v-else />
    </div>
    <div class="File-info">
      <p v-if="!showLink" class="File-info-name">{{ name }}</p>
      <a v-else :href="path" class="File-info-name" :target="isFile ? '_blank' : '_self'">
        {{ name }}
      </a>
      <p class="File-info-size">{{ size }}</p>
    </div>
    <slot />
  </div>
</template>

<style scope lang="sass">
@use '../../sass/style'

$icon-size: 35px

.File
  @include style.flex-center()
  background-color: style.$gray1
  width: 100%
  padding: .3rem .5rem
  outline: 1px solid style.$white
  .File-icon
    width: $icon-size
    height: $icon-size
    margin: 0 1rem
    background-color: style.$transparent
    svg
      width: $icon-size
      height: $icon-size
  .File-info
    @include style.flex-center()
    flex: 1
    .File-info-name,
    .File-info-size
      @include style.font1(1.2rem)
      color: style.$white
    .File-info-name
      flex: 1
      cursor: pointer
    .File-info-size
      width: 150px
      text-align: center
</style>
