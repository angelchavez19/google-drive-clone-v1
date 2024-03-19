import { toast } from 'vue-sonner'
import { URLDataIcon } from '@/config/api'

export const useDashboardUploadIcon = (
  emit: (event: 'changeShowImage', ...args: any[]) => void
) => {
  const handleChange = (e: any) => {
    const file = e.target.files[0]
    const img: any = document.getElementById('img-preview')

    if (file) {
      img.src = URL.createObjectURL(file)
      emit('changeShowImage', true)
    } else {
      img.src = ''
      emit('changeShowImage', false)
    }
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    let form: HTMLFormElement | null = document.getElementById(
      'form-upload-icon'
    ) as HTMLFormElement
    if (!form) return

    const formData = new FormData(form)

    try {
      const response = await fetch(URLDataIcon, {
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
    }
  }

  return { handleChange, handleSubmit }
}
