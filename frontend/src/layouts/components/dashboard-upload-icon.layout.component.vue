<script setup lang="ts">
defineProps({
  show: { type: Boolean, required: true },
  showImage: { type: Boolean, required: true }
})
const emit = defineEmits(['changeShowImage'])

import BaseModal from '@/common/components/base-modal.component.vue'
import Form from '@/common/components/form.component.vue'
import Submit from '@/common/components/submit.component.vue'
import { useDashboardUploadIcon } from '../composables/dashboard-upload-icon.layout.composable'

const { handleChange, handleSubmit } = useDashboardUploadIcon(emit)
</script>

<template>
  <BaseModal class="Header-modal" :is-show="show">
    <Form title="Upload your New Icon" enctype="multipart/form-data" id="form-upload-icon">
      <input
        class="upload-file"
        type="file"
        accept="image/jpge,image/jpg,image/png,image/svg,image/webp"
        @change="handleChange"
        id="fileInput"
        name="icon"
      />
      <label class="upload-file-label" for="fileInput">Select file...</label>
      <img v-show="showImage" id="img-preview" alt="Image selected" />
      <Submit text="Upload Icon" @click="handleSubmit" />
    </Form>
  </BaseModal>
</template>

<style scope lang="sass">
@use '../../sass/style'

.Header-modal
    position: absolute
    top: 70px
    right: 20px
    background-color: style.$gray1
    width: 300px
    padding: 1rem
    #img-preview
      width: 60px
      height: 60px
</style>
