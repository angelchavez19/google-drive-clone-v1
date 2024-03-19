<script setup lang="ts">
import BaseModal from '@/common/components/base-modal.component.vue'
import Form from '@/common/components/form.component.vue'
import PageExpanded from '@/common/components/page-expanded.component.vue'
import CloseIcon from '@/assets/icons/close.icon.vue'
import { useDashboardDelete } from '../composables/dashboard-delete.composable'

let dsDelete = useDashboardDelete()
</script>

<template>
  <PageExpanded v-show="dsDelete.modals.deleteDF">
    <BaseModal class="DeleteDF" :is-show="true">
      <button class="DeleteDF-close" @click="dsDelete.modals.changeDeleteDF(false)">
        <CloseIcon />
      </button>
      <Form title="Are you sure you want to delete?">
        <div class="Options">
          <button class="Options-button --no" @click="dsDelete.modals.changeDeleteDF(false)">
            No
          </button>
          <button class="Options-button --yes" @click="(e: any) => dsDelete.handleSumbit(e)">
            Yes
          </button>
        </div>
      </Form>
    </BaseModal>
  </PageExpanded>
</template>

<style scope lang="sass">
@use '../../sass/style'

.DeleteDF
  @include style.flex-center()
  flex-direction: column
  background-color: style.$gray2
  padding: .5rem
  width: 300px
  position: fixed
  top: calc( 50vh - 150px )
  left: calc( 50vw - 150px )
  gap: 1.5rem
  .DeleteDF-close
    border: none
    padding: .5rem
    width: 30px
    height: 30px
    border-radius: 50%
    cursor: pointer
  .Options
    @include style.flex-center()
    gap: 1rem
    width: 100%
    .Options-button
      @include style.font1(1.3rem)
      width: 40%
      border-radius: 20px
      color: style.$white
      cursor: pointer
      border: none
    .Options-button.--no
      background-color: style.$green
    .Options-button.--yes
      background-color: style.$red
</style>
