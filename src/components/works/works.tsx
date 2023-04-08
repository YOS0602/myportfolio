import { useWorksModal } from '../../hooks/useWorksModal'
import Image from 'next/image'
import { WorksModal } from './worksModal'
import { worksData } from './worksData'

// image See https://zenn.dev/nbr41to/articles/365e8105efa448

export const Works = (): JSX.Element => {
  const { showWorksModal, openModal } = useWorksModal()

  return (
    <div className="flex flex-row flex-wrap justify-center">
      {worksData.map((w) => (
        <div
          key={w.id}
          className="card my-2 xl:my-8 mx-2 p-4 bg-white border-2 border-zinc-200 hover:border-c4 hover:animate-pulse w-full sm:w-2/3 lg:w-5/12 min-h-min cursor-pointer"
          onClick={openModal}
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
      <div>{`showWorksModal at Works Component: ${showWorksModal}`}</div>
      <WorksModal />
    </div>
  )
}
