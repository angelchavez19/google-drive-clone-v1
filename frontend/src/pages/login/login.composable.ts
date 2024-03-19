import { computed, ref } from 'vue'
import type { ComputedRef, Ref } from 'vue'
import { toast } from 'vue-sonner'
import { useRoute, useRouter } from 'vue-router'
import { UrlLogin } from '@/config/api'
import { Fetching } from '@/services/fetch_data.service'

export const useLogin = () => {
  let fetching = new Fetching(UrlLogin)
  let password: Ref<string> = ref('')
  let route = useRoute()
  let router = useRouter()

  let formValid: ComputedRef<boolean> = computed(() => password.value !== '')

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      await fetching.postJson({ user_id: route.params.user, password: password.value })
      router.push({ name: 'drive' })
    } catch {
      toast.error('Invalid credentials')
      router.push({ name: 'users' })
    }
  }

  return { handleSubmit, formValid, password }
}
