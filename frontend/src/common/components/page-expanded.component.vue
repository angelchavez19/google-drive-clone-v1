<template>
  <section class="PageExpanded">
    <slot />
  </section>
</template>

<style scope lang="sass">
@use '../../sass/style'

.PageExpanded
  @include style.flex-center()
  position: absolute
  top: 0
  left: 0
  width: 100vw
  height: 100vh
</style>
