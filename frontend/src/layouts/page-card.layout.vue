<template>
  <main class="Page">
    <section class="Page-container">
      <slot />
    </section>
  </main>
</template>

<style scope lang="sass">
@use '../sass/style'

.Page
  @include style.flex-center()
  width: 100%
  padding: 1.5rem 0
  min-height: 100vh
  .Page-container
    @include style.flex-center()
    flex-direction: column
    background-color: style.$gray1
    width: calc( 300px - 2rem )
    border-radius: 20px
    padding: 1rem
    gap: 2rem
</style>
