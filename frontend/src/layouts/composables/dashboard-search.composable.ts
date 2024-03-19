import { ref, watch } from 'vue'
import { getSearchFiles } from '@/helpers/getData'
import { useFilesStore } from '@/store/files'

export const useDashboardSearch = () => {
  let inputSearch = ref('')
  let { changeSearch, resetSearch } = useFilesStore()

  watch(inputSearch, () => {
    if (inputSearch.value) getSearchFiles(inputSearch.value)
    else resetSearch()
    changeSearch(inputSearch.value)
  })

  return { inputSearch }
}
