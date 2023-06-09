import { useState } from 'react'

/**
 * WorksのModalにおける表示/非表示を決定するstateを管理する。
 */
export const useWorksModal = () => {
  const [showWorksModal, setShowWorksModal] = useState<boolean>(false)

  function openModal() {
    setShowWorksModal(true)
  }
  function closeModal() {
    setShowWorksModal(false)
  }

  return {
    showWorksModal,
    openModal,
    closeModal,
  }
}
