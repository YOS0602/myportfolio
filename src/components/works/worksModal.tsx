// import { useEffect } from 'react'
import { useWorksModal } from '../../hooks/useWorksModal'

export const WorksModal = (): JSX.Element => {
  const { showWorksModal, closeModal } = useWorksModal()

  return (
    <>
      <div>{`showWorksModal at WorksModal Component: ${showWorksModal}`}</div>
      {showWorksModal && (
        <div
          className="overlay fixed top-0 left-0 w-full h-full bg-c1 opacity-80 z-30"
          onClick={closeModal}
        >
          Modalです
        </div>
      )}
    </>
  )
}
