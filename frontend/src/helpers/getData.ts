import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
import { useFilesStore } from '@/store/files'

export const useGetPath = (prev = ['drive']) => {
  let route = useRoute()

  let path = ref(prev)
  if (route.params.pathMatch) path.value = path.value.concat(route.params.pathMatch)

  return { path: path.value.join('/') }
}

export const getPageFiles = async () => {
  let { getPage } = useFilesStore()
  const router = useRouter()
  let path = useGetPath()

  try {
    await getPage(path.path)
  } catch (e) {
    toast.error('Directory not found')
    router.push({ name: 'drive' })
  }
}

export const getSearchFiles = async (search: string) => {
  let { getSearch } = useFilesStore()

  try {
    await getSearch(search)
  } catch (e) {
    toast.error('File not found')
  }
}
