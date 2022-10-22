import { useState } from 'react'

export const useWorksModal = () => {
  const [showWorksModal, setShowWorksModal] = useState<boolean>(false)

  const closeModal = () => {
    setShowWorksModal(false)
  }

  return {
    showWorksModal,
    setShowWorksModal,
    closeModal,
  }
}
