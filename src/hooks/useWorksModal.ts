import { useEffect, useState } from 'react'

/**
 * TODO Comment
 * @returns
 */
export const useWorksModal = () => {
  const [showWorksModal, setShowWorksModal] = useState<boolean>(false)

  function openModal() {
    console.log('openModal called')
    setShowWorksModal(true)
  }
  function closeModal() {
    console.log('closeModal called')
    setShowWorksModal(false)
  }

  return {
    showWorksModal,
    openModal,
    closeModal,
  }
}
