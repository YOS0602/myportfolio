import { useEffect, useState } from 'react'

/**
 * TODO Comment
 * @returns
 */
export const useWorksModal = () => {
  const [showWorksModal, setShowWorksModal] = useState<boolean>(false)

  function openModal() {
    setShowWorksModal(true)
  }
  function closeModal() {
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
