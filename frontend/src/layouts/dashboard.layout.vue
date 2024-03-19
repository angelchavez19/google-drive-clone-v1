<script setup lang="ts">
import { useRoute } from 'vue-router'
import { URLIcon } from '@/config/api'
import ProtectLayout from '@/layouts/protect.layout.vue'
import { useUserInfoStore } from '@/store/user-info'
import Avatar from '@/common/components/avatar.component.vue'
import ContextMenu from '@/common/components/context-menu.vue'
import DashboardCreateDirectory from './components/dashboard-create-directory.layout.component.vue'
import DashboardUploadFiles from './components/dashboard-upload-files.layout.component.vue'
import DashboardAside from './components/dashboard-aside.layout.component.vue'
import DashboardMain from './components/dashboard-main.layout.component.vue'
import DashboardSearch from './components/dashboard-search.layout.component.vue'
import DashboardUploadIcon from './components/dashboard-upload-icon.layout.component.vue'
import DashboardDelete from './components/dashboard-delete.layout.component.vue'
import DashboardPath from './components/dashboard-path.layout.component.vue'
import { useDashboard } from './composables/dashboard.composable'

let { user } = useUserInfoStore()
const route = useRoute()
let { changeShowImage, showModal, showImage } = useDashboard()
</script>

<template>
  <ProtectLayout>
    <ContextMenu />
    <DashboardAside />
    <DashboardMain>
      <div class="Header">
        <div class="Header-search">
          <DashboardSearch v-if="route.name == 'drive' || route.name == 'drive_path'" />
        </div>
        <Avatar @click="showModal = !showModal" :icon="URLIcon(user.id)" :name="user.username" />
        <DashboardUploadIcon
          @changeShowImage="changeShowImage"
          :show="showModal"
          :showImage="showImage"
          id="upload-icon"
        />
      </div>
      <DashboardPath
        v-if="route.name == 'drive' || route.name == 'drive_path'"
        :pathMatch="route.params.pathMatch"
      />
      <slot />
    </DashboardMain>
    <DashboardCreateDirectory />
    <DashboardUploadFiles />
    <DashboardDelete />
  </ProtectLayout>
</template>

<style scope lang="sass">
@use '../sass/style'

.Header
  @include style.flex-center()
  justify-content: flex-end
  position: relative
  width: calc(100% - 1rem)
  .Header-search
    @include style.flex-center()
    justify-content: flex-start
    flex: 1
</style>
./components/dashboard-upload-files.layout.component.vue
