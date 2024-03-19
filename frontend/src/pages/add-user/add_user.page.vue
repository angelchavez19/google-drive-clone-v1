<script setup lang="ts">
import Form from '@/common/components/form.component.vue'
import BaseInput from '@/common/components/base-input.component.vue'
import Submit from '@/common/components/submit.component.vue'
import PageCardLayout from '@/layouts/page-card.layout.vue'
import { useAddUser } from './add_user.composale'

const { data, errors, handle_submit, form_valid } = useAddUser()
</script>

<template>
  <PageCardLayout>
    <Form title="Create your Account">
      <BaseInput
        label="Username"
        v-model="data.username"
        :error="errors.username"
        placeholder="username"
        type="text"
        required
        autofocus
        spellcheck="false"
      />
      <BaseInput
        label="Password"
        v-model="data.password"
        :error="errors.password"
        placeholder="•••••••••"
        type="password"
        required
      />
      <Submit text="Create Account" @click="handle_submit" :disabled="!form_valid" />
    </Form>
  </PageCardLayout>
</template>

<style scope lang="sass"></style>
