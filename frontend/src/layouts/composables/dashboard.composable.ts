import { ref, onUnmounted } from 'vue'
import { widthContextMenu, heighContextMenu } from '@/config/sizes'
import { useModalStateStore } from '@/store/modal-state'

export const useDashboard = () => {
  let { changePosition, changeIsShow, state } = useModalStateStore()

  let showModal = ref(false)
  let showImage = ref(false)

  const changeShowImage = (newValue: boolean) => (showImage.value = newValue)

  const changePositionModal = (e: any) => {
    e.preventDefault()

    let newX = e.clientX + window.scrollX
    let newY = e.clientY + window.scrollY

    const uploadIcon = document.getElementById('upload-icon')
    if (!uploadIcon) return
    const rectUploadIcon = uploadIcon.getBoundingClientRect()

    if (
      showImage &&
      rectUploadIcon.x < newX &&
      newX < rectUploadIcon.x + rectUploadIcon.width &&
      rectUploadIcon.y < newY &&
      newY < rectUploadIcon.y + rectUploadIcon.height
    )
      return

    if (
      state.x < newX &&
      newX < state.x + widthContextMenu &&
      state.y < newY &&
      newY < state.y + heighContextMenu
    )
      return

    if (newX > window.innerWidth - widthContextMenu) newX -= widthContextMenu
    if (newY > window.innerHeight - heighContextMenu) newY -= heighContextMenu

    changePosition(newX, newY)
    changeIsShow(true)
  }

  const hiddenModal = (e: any) => {
    let newX = e.clientX + window.scrollX
    let newY = e.clientY + window.scrollY

    const uploadIcon = document.getElementById('aside-new')
    if (!uploadIcon) return
    const rectUploadIcon = uploadIcon.getBoundingClientRect()

    if (
      rectUploadIcon.x < newX &&
      newX < rectUploadIcon.x + rectUploadIcon.width &&
      rectUploadIcon.y < newY &&
      newY < rectUploadIcon.y + rectUploadIcon.height
    ) {
      changePosition(rectUploadIcon.x, rectUploadIcon.y + rectUploadIcon.height + 10)
      changeIsShow(true)
    } else changeIsShow(false)
  }

  document.addEventListener('contextmenu', changePositionModal)
  document.addEventListener('click', hiddenModal)

  onUnmounted(() => {
    document.removeEventListener('contextmenu', changePositionModal)
    document.removeEventListener('click', hiddenModal)
  })

  return { changeShowImage, showModal, showImage }
}
