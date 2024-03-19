import { ref } from 'vue'
import { toast } from 'vue-sonner'
import { Fetching } from '@/services/fetch_data.service'
import { URLCreateDirectory } from '@/config/api'
import { useModalsStore } from '@/store/modals'
import { useGetPath } from '@/helpers/getData'

export const useDashboardCreateDirectory = () => {
  let modals = useModalsStore()
  let nameDirectory = ref('')
  let fetching = new Fetching(URLCreateDirectory)
  const path = useGetPath([])

  const handleSumbit = (e: any) => {
    e.preventDefault()
    modals.changeCreateDirectory(false)

    toast.promise(fetching.postJson({ directory: `${path.path}/${nameDirectory.value}` }), {
      loading: 'Loading...',
      success: (data) => {
        return data
      },
      error: (data) => data
    })
    nameDirectory.value = ''
  }

  return { modals, handleSumbit, nameDirectory }
}
