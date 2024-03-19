import { toast } from 'vue-sonner'
import { URLDeleteDF } from '@/config/api'
import { useGetPath } from '@/helpers/getData'
import { useModalsStore } from '@/store/modals'
import { Fetching } from '@/services/fetch_data.service'

export const useDashboardDelete = () => {
  let modals = useModalsStore()
  let path = useGetPath([])
  let fetching = new Fetching(URLDeleteDF)

  const handleSumbit = async (e: any) => {
    e.preventDefault()
    modals.changeDeleteDF(false)

    let directory = path.path + '/' + modals.deleteItem

    toast.promise(fetching.deleteJson({ directory }), {
      loading: 'Loading...',
      success: (data: any) => data,
      error: (data: any) => data
    })
  }

  return { modals, handleSumbit }
}
