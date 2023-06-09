import Image from 'next/image'
import { useEffect, useCallback } from 'react'
import { worksContents, TWorksContents } from './worksContents'

type Props = {
  /** Modalを閉じるhooks */
  closeModal: () => void
  /** 表示する内容を特定するためのid */
  workId: number
}

/**
 * Worksの詳細を説明するModal Component。
 * 表示内容はpropsで渡されたworkのidをもとに、Contentsデータから取得する。
 */
export const WorksModal = (props: Props): JSX.Element => {
  const { imageSrc, imageAlt, title, description, skills } = getWorkContent(
    props.workId
  )

  /** close Modal when Escape key is pressed */
  const handleKeyUp = useCallback(
    function (event: KeyboardEvent) {
      if (event.key === 'Escape') {
        props.closeModal()
      }
    },
    [props]
  )

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp, false)
    return () => document.removeEventListener('keyup', handleKeyUp, false)
  }, [handleKeyUp])

  return (
    <>
      <div className="modal-overlay fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <div
          className="modal-bg absolute w-full h-full bg-c1 opacity-50 z-30"
          onClick={props.closeModal}
        ></div>

        <div className="modal-content w-5/6 h-5/6 md:w-3/4 md:h-3/5 rounded bg-cbg opacity-100 z-30">
          <div className="detail-grid px-4 grid grid-cols-3 gap-4 items-center">
            <div className="work-image col-span-1 relative w-32 h-24 md:w-48 md:h-36 hidden sm:block">
              <Image
                src={imageSrc}
                alt={imageAlt}
                layout="fill"
                objectFit="contain"
              />
            </div>

            <div className="col-span-3 sm:col-span-2">
              <div className="flex justify-between items-center pt-6 pb-4">
                <h1 className="text-left text-2xl">{title}</h1>
                <button
                  className="w-12 h-12 bg-c2 rounded-full p-2 hidden sm:block"
                  onClick={props.closeModal}
                >
                  X
                </button>
              </div>
              <div className="text-left text-base py-4">{description}</div>
              <div className="py-2">
                <SkillsList skills={skills} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function getWorkContent(workId: number): TWorksContents {
  return (
    worksContents.find((w) => w.id === workId) ?? {
      id: NaN,
      imageSrc: '',
      imageAlt: 'No Image...',
      title: <p>No Title</p>,
      description: <p>No Description... </p>,
      skills: [],
    }
  )
}

function SkillsList(props: { skills: string[] }): JSX.Element {
  return (
    <>
      <h2 className="text-left text-xl pt-6 pb-4">Used Skills</h2>

      {!props.skills || props.skills.length === 0 ? (
        <p className="text-left pt-6 pb-4">Skills Undefined...</p>
      ) : (
        <div className="flex flex-wrap justify-start py-2 mx-2">
          {props.skills.map((s, i) => (
            <p key={i} className="mr-2 my-1 px-3 bg-c2 rounded-full">
              {s}
            </p>
          ))}
        </div>
      )}
    </>
  )
}
