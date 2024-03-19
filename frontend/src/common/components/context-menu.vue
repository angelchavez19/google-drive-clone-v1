<script setup lang="ts">
import Modal from './modal.component.vue'
import { useModalStateStore } from '@/store/modal-state'
import { useModalsStore } from '@/store/modals'

let { changeCreateDirectory, changeUploadFiles } = useModalsStore()
let { state } = useModalStateStore()
</script>

<template>
  <Modal class="ContextMenu" :x="state.x" :y="state.y" :is-show="state.isShow">
    <button class="ContextMenu-button" @click="changeCreateDirectory(true)">New Folder</button>
    <hr />
    <button class="ContextMenu-button" @click="changeUploadFiles(true)">Upload Files</button>
  </Modal>
</template>

<style scope lang="sass">
@use '../../sass/style'

.ContextMenu
  @include style.flex-center()
  flex-direction: column
  width: 300px
  background-color: style.$gray1
  outline: 1px solid style.$white
  hr
    background-color: style.$white
    border: none
    width: 100%
    height: 1px
  .ContextMenu-button
    @include style.font1(1.5rem)
    background-color: style.$transparent
    border: none
    color: style.$white
    width: 100%
    line-height: 2
    cursor: pointer
</style>
