import { computed, ref } from 'vue'
import type { ComputedRef, Ref } from 'vue'
import { toast } from 'vue-sonner'
import { useRouter } from 'vue-router'
import { UrlUsers } from '@/config/api'
import { validateUsername, validatePassword } from '@/helpers/validators'
import type { UserI } from '@/interfaces/user'
import { Fetching } from '@/services/fetch_data.service'
import { useUserStore } from '@/store/users'

export const useAddUser = () => {
  let fetching = new Fetching(UrlUsers)
  const router = useRouter()
  const { getData } = useUserStore()

  let data: Ref<UserI> = ref({ username: '', password: '' })

  let errors: ComputedRef<UserI> = computed(() => {
    return {
      username: validateUsername(data.value.username),
      password: validatePassword(data.value.password)
    }
  })

  let form_valid: ComputedRef<boolean> = computed(
    () => errors.value.username === '' && errors.value.password === ''
  )

  const handle_submit = async (e: any) => {
    e.preventDefault()

    toast.promise(fetching.postJson(data.value), {
      loading: 'Loading...',
      success: (data: any) => {
        router.push({ name: 'users' })
        getData()
        return 'Success'
      },
      error: (data: any) => data
    })

    data.value.username = ''
    data.value.password = ''
  }

  return { data, errors, handle_submit, form_valid }
}
