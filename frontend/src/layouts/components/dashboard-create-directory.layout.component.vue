<script setup lang="ts">
import BaseModal from '@/common/components/base-modal.component.vue'
import Form from '@/common/components/form.component.vue'
import BaseInput from '@/common/components/base-input.component.vue'
import Submit from '@/common/components/submit.component.vue'
import PageExpanded from '@/common/components/page-expanded.component.vue'
import CloseIcon from '@/assets/icons/close.icon.vue'
import { useDashboardCreateDirectory } from '../composables/dashboard-create-directory'

let { modals, handleSumbit, nameDirectory } = useDashboardCreateDirectory()
</script>

<template>
  <PageExpanded v-show="modals.createDirectory">
    <BaseModal class="CreateDirectory" :is-show="modals.createDirectory">
      <button class="CreateDirectory-close" @click="modals.changeCreateDirectory(false)">
        <CloseIcon />
      </button>
      <Form title="Create a New Directory">
        <BaseInput label="Enter the directory name:" v-model="nameDirectory" />
        <Submit text="Create" @click="handleSumbit" />
      </Form>
    </BaseModal>
  </PageExpanded>
</template>

<style scope lang="sass">
@use '../../sass/style'

.CreateDirectory
  @include style.flex-center()
  flex-direction: column
  background-color: style.$gray2
  padding: .5rem
  width: 300px
  position: fixed
  top: calc( 50vh - 150px )
  left: calc( 50vw - 150px )
  gap: 1.5rem
  .CreateDirectory-close
    border: none
    padding: .5rem
    width: 30px
    height: 30px
    border-radius: 50%
    cursor: pointer
</style>
