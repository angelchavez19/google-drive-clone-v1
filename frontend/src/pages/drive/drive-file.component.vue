<script setup lang="ts">
defineProps({
  path: { type: String, required: true },
  size: { type: String, required: true },
  name: { type: String, required: true }
})

import File from '@/common/components/file.component.vue'
import DeleteIcon from '@/assets/icons/delete.icon.vue'
import { useModalsStore } from '@/store/modals'

let modals = useModalsStore()
</script>

<template>
  <File :path="path" :size="size" :name="name" :show-link="true">
    <button
      class="File-icon File-delete"
      @click="
        () => {
          modals.changeDeleteDF(true)
          modals.changeDeleteItem(name)
        }
      "
    >
      <DeleteIcon />
    </button>
  </File>
</template>

<style scope lang="sass">
@use '../../sass/style'

.File-delete
  border: none
  cursor: pointer
</style>
