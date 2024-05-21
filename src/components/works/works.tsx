import { useState } from 'react'
import Image from "next/legacy/image"
import { WorksModal } from './worksModal'
import { useWorksModal } from '../../hooks/useWorksModal'
import { worksContents } from '@/const/worksContents'

// image See https://zenn.dev/nbr41to/articles/365e8105efa448

export const Works = (): JSX.Element => {
  const { showWorksModal, openModal, closeModal } = useWorksModal()
  const [selectedWorkId, setSelectedWorkId] = useState(NaN)

  /**
   * clickされたworks cardのidをstateにsetし、WorksModalをopenにする。
   * @param workId
   */
  function onClickWorksCard(workId: number) {
    setSelectedWorkId(workId)
    openModal()
  }

  return (
    <div className="flex flex-row flex-wrap justify-center">
      {worksContents.map((w) => (
        <div
          key={w.id}
          className="work-card my-2 xl:my-8 mx-2 p-4 bg-white border-2 border-zinc-200 hover:border-c4 hover:animate-pulse w-full sm:w-2/3 lg:w-5/12 min-h-min cursor-pointer rounded"
          onClick={() => onClickWorksCard(w.id)}
        >
          <div className="icon relative mx-auto w-32 h-24 md:w-48 md:h-36">
            <Image
              src={w.imageSrc}
              alt={w.imageAlt}
              layout="fill"
              objectFit="contain"
              className="text-center"
            />
          </div>
          <div className="title mt-4 text-base">{w.title}</div>
        </div>
      ))}

      {showWorksModal ? (
        <WorksModal closeModal={closeModal} workId={selectedWorkId} />
      ) : null}
    </div>
  )
}
