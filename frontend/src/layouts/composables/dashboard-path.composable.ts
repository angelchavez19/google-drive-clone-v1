import { computed } from 'vue'
import { getPageFiles } from '@/helpers/getData'

export const useDashboardPath = (props: any) => {
  let totalPath = computed(() => {
    let path = 'Drive'
    if (props.pathMatch) for (let p of props.pathMatch) path += ' <span>⟩</span> ' + p
    return path
  })

  let to = computed(() => {
    getPageFiles()
    let path = '/dashboard/drive'
    let pathMatch = props.pathMatch ? [...props.pathMatch] : []
    if (pathMatch.length > 1) {
      pathMatch.pop()
      path += '/' + pathMatch.join('/')
    }
    return path
  })

  return { totalPath, to }
}
