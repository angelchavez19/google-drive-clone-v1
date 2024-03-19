<script setup lang="ts">
import BaseInputComponent from '@/common/components/base-input.component.vue'
import { useDashboardSearch } from '../composables/dashboard-search.composable'

let { inputSearch } = useDashboardSearch()
</script>

<template>
  <div class="Search">
    <BaseInputComponent
      class="Search-input"
      v-model="inputSearch"
      type="text"
      placeholder="Search in Drive"
    />
  </div>
</template>

<style scope lang="sass">
@use '../../sass/style'

$border: 1px solid style.$white
$icon-size: 28px

.Search
  @include style.flex-center()
  width: min-content
  gap: calc( .6rem - 1px )
  .Search-input
    width: 400px
    height: 40px
    border-radius: 20px 20px 20px 20px
</style>
