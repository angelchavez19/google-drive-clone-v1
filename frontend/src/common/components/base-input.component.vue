<script setup lang="ts">
defineProps({
  label: { type: String },
  modelValue: { type: String, require: true },
  error: { type: String }
})
</script>

<template>
  <div class="input">
    <label v-if="label" :for="label.toLowerCase()">{{ label }}</label>
    <input
      class="Form-input"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target?.value)"
      v-bind="$attrs"
      :id="label?.toLowerCase()"
      autocomplete="off"
    />
    <p class="input-error" v-if="error" v-show="modelValue != ''">{{ error }}</p>
  </div>
</template>

<style scope lang="sass">
@use '../../sass/style'

.input
  @include style.flex-center()
  flex-direction: column
  width: 100%
  gap: .5rem
  label
    @include style.font2(1.2rem)
    color: style.$white
    width: 100%
  .input-error
    @include style.font2(.9rem)
    text-align: center
    color: style.$red
    font-weight: 900
</style>
