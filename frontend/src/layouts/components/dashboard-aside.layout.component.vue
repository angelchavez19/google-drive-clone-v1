<script setup lang="ts">
import PlusIcon from '@/assets/icons/plus.icon.vue'
import { useUserInfoStore } from '@/store/user-info'

let { user } = useUserInfoStore()
</script>

<template>
  <aside class="Aside">
    <div class="Aside-icon">
      <img src="/assets/drive-icon.png" alt="Drive Icon" />
      <span>Drive Clone</span>
    </div>
    <button class="Aside-new" id="aside-new">
      <PlusIcon />
      <span>New</span>
    </button>
    <div class="Aside-nav">
      <RouterLink :to="{ name: 'drive' }">My drive</RouterLink>
      <RouterLink :to="{ name: 'trash' }">Trash</RouterLink>
    </div>
    <div class="Aside-storage">
      <p>Storage: {{ user.total_size }}</p>
    </div>
  </aside>
</template>

<style scope lang="sass">
@use '../../sass/style'

@mixin style-button
  @include style.font2(1.3rem)
  background-color: style.$gray2
  color: style.$white
  padding: .5rem
  width: calc( 100% - 1rem )
  border-radius: 20px
  text-align: center

.Aside
  @include style.flex-center()
  flex-direction: column
  position: fixed
  top: 0
  left: 0
  padding: 1rem
  background-color: style.$gray1
  height: calc( 100vh - 2rem )
  gap: 2rem
  .Aside-icon
    @include style.flex-center()
    gap: 1.2rem
    span
      @include style.font1(1.5rem)
      color: style.$white
  .Aside-new
    @include style.flex-center()
    background-color: style.$gray2
    width: 70%
    height: 50px
    border-radius: 25px
    cursor: pointer
    border: none
    svg
      width: 30px
      height: 30px
    span
      @include style.font1(1.5rem)
      color: style.$white
      padding: 0 .5rem
  .Aside-nav
    display: flex
    flex-direction: column
    width: 100%
    flex: 1
    gap: 1rem
    a
      @include style-button
      display: block
      text-decoration: none
  .Aside-storage
    @include style-button
    font-size: 1rem
</style>
