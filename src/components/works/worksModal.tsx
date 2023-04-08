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
  const { title, description, skills } = getWorkContent(props.workId)

  return (
    <>
      <div className="bg-c5 z-40">
        <button className="bg-c2 rounded-full p-2" onClick={props.closeModal}>
          X
        </button>

        <p>workId: {props.workId}</p>
        <h3>{title}</h3>
        <div>{description}</div>
        <div>{skills.length > 0 ? skills : 'Skills Undefined...'}</div>
      </div>
      <div
        className="overlay fixed top-0 left-0 w-full h-full bg-c1 opacity-80 z-30"
        onClick={props.closeModal}
      ></div>
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
