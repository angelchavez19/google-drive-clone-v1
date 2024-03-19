<script setup lang="ts">
const props = defineProps({ pathMatch: { type: Array<String> } })

import ArrowLeft from '@/assets/icons/arrow-left.icon.vue'
import { useDashboardPath } from '../composables/dashboard-path.composable'

let { totalPath, to } = useDashboardPath(props)
</script>

<template>
  <div class="Path">
    <!-- I use the <a></a> tag to ensure that the route updates correctly. -->
    <a :href="to" class="Path-arrow" v-show="totalPath != 'Drive'">
      <ArrowLeft />
    </a>
    <p class="Path-path" v-html="totalPath"></p>
  </div>
</template>

<style scope lang="sass">
@use '../../sass/style'

.Path
  @include style.flex-center()
  justify-content: start
  width: calc( 100% - 2rem )
  gap: 1.5rem
  background-color: style.$gray1
  padding: .5rem 1rem
  border-radius: 20px
  .Path-arrow
    svg
      width: 40px
      height: 40px
  .Path-path
    @include style.font1(1.5rem)
    color: white
    span
      color: style.$green
      font-weight: 900
</style>
@/helpers/getData
