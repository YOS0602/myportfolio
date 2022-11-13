import { useEffect, useState } from 'react'

export const useWorksModal = () => {
  const [showWorksModal, setShowWorksModal] = useState<boolean>(false)

  const openModal = () => {
    setShowWorksModal(true)
  }
  const closeModal = () => {
    setShowWorksModal(false)
  }
  useEffect(() => {
    console.log({ showWorksModal })
  }, [showWorksModal])

  return {
    showWorksModal,
    openModal,
    closeModal,
  }
}
