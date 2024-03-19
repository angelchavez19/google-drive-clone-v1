<script setup lang="ts">
import NotFoundIcon from '@/assets/icons/not-found.icon.vue'
import DashboardLayout from '@/layouts/dashboard.layout.vue'
import { useFilesStore } from '@/store/files'
import DashboardFile from './drive-file.component.vue'

let files = useFilesStore()
</script>

<template>
  <DashboardLayout>
    <div class="Files">
      <DashboardFile
        v-if="files.search.length"
        v-for="file in files.search_files"
        :key="file.name"
        :path="file.path"
        :size="file.size"
        :name="file.name"
      />
      <DashboardFile
        v-if="!files.search.length"
        v-for="file in files.page_files"
        :key="file.name"
        :path="file.path"
        :size="file.size"
        :name="file.name"
      />
    </div>
    <div class="FilesNotFound" v-show="files.search.length && !files.search_files.length">
      <p>File not found</p>
      <NotFoundIcon />
    </div>
  </DashboardLayout>
</template>

<style scope lang="sass">
@use '../../sass/style'

.Files
  @include style.flex-center()
  flex-direction: column
  width: 95%
.FilesNotFound
  @include style.flex-center()
  flex-direction: column
  width: 95%
  gap: 1.3rem
  p
    @include style.font1(1.3rem)
    color: style.$white
    text-transform: uppercase
</style>
./drive-file.component.vue
