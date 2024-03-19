<script setup lang="ts">
import BaseModal from '@/common/components/base-modal.component.vue'
import Form from '@/common/components/form.component.vue'
import Submit from '@/common/components/submit.component.vue'
import PageExpanded from '@/common/components/page-expanded.component.vue'
import CloseIcon from '@/assets/icons/close.icon.vue'
import { useDashboardUploadFiles } from '../composables/dashboard-upload-files.composable'

let uploadFiles = useDashboardUploadFiles()
</script>

<template>
  <PageExpanded v-show="uploadFiles.modals.uploadFiles">
    <BaseModal class="CreateFiles" :is-show="uploadFiles.modals.uploadFiles">
      <button class="CreateFiles-close" @click="uploadFiles.modals.changeUploadFiles(false)">
        <CloseIcon />
      </button>
      <Form title="Upload files" enctype="multipart/form-data" id="form-upload-file">
        <input class="upload-file" type="file" id="filesInput" name="files" multiple />
        <label class="upload-file-label" for="filesInput">Select files...</label>
        <Submit text="Upload" @click="uploadFiles.handleSumbit" />
      </Form>
    </BaseModal>
  </PageExpanded>
</template>

<style scope lang="sass">
@use '../../sass/style'

.CreateFiles
  @include style.flex-center()
  flex-direction: column
  background-color: style.$gray2
  padding: .5rem
  width: 300px
  position: fixed
  top: calc( 50vh - 150px )
  left: calc( 50vw - 150px )
  gap: 1.5rem
  .CreateFiles-close
    border: none
    padding: .5rem
    width: 30px
    height: 30px
    border-radius: 50%
    cursor: pointer
</style>
