import { toast } from 'vue-sonner'
import { URLUploadFiles } from '@/config/api'
import { useModalsStore } from '@/store/modals'
import { useGetPath } from '@/helpers/getData'

export const useDashboardUploadFiles = () => {
  let modals = useModalsStore()
  const path = useGetPath()

  const handleSumbit = async (e: any) => {
    e.preventDefault()
    modals.changeUploadFiles(false)

    let form: HTMLFormElement | null = document.getElementById(
      'form-upload-file'
    ) as HTMLFormElement
    if (!form) return

    const fileInput: HTMLInputElement | null = form.querySelector('input[type="file"]')
    if (!fileInput) return

    if ((fileInput.files?.length || 0) == 0) {
      toast.error('Error: No files have been selected')
      return
    }

    const formData = new FormData(form)

    try {
      const response = await fetch(URLUploadFiles(path.path), {
        method: 'POST',
        body: formData
      })

      if (!response.ok) {
        const json = await response.json()
        toast.error('Error:', json.error)
        return
      }

      toast.success('Success')
    } catch {
      toast.error('Error')
    } finally {
      form.reset()
    }
  }

  return { modals, path, handleSumbit }
}
