import Image from 'next/image'
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
  const { imageSrc, imageAlt, title, description, skills } = getWorkContent(props.workId)

  return (
    <>
      <div className="modal-overlay fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <div
          className="modal-bg absolute w-full h-full bg-c1 opacity-50 z-30"
          onClick={props.closeModal}
        ></div>

        <div className="modal-content w-3/4 h-3/5 rounded bg-cbg opacity-100 z-30">
          <div className="detail-grid px-4 grid grid-cols-3 gap-4 items-center">
            <div className="work-image col-span-1 relative w-32 h-24 md:w-48 md:h-36">
              <Image src={imageSrc} alt={imageAlt} layout="fill" objectFit="contain" />
            </div>

            <div className="col-span-2">
              <div className="flex justify-between items-center py-2">
                <h1 className="text-left text-2xl">{title}</h1>
                <button className="w-12 h-12 bg-c2 rounded-full p-2" onClick={props.closeModal}>
                  X
                </button>
              </div>
              <div className="text-left text-base py-2">{description}</div>
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
  if (!props.skills || props.skills.length === 0) {
    return <p>Skills Undefined...</p>
  }
  return (
    <>
      <h2 className="text-left text-xl py-2">Used Skills</h2>
      <div className="flex flex-wrap justify-start space-x-2 py-2">
        {props.skills.map((s, i) => (
          <p key={i} className="px-2  bg-c2 rounded-full">
            {s}
          </p>
        ))}
      </div>
    </>
  )
}
