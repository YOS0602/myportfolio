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
  return (
    <>
      <div className="overlay fixed top-0 left-0 w-full h-full bg-c1 opacity-80 z-30">
        <p>Modalです</p>
        <button onClick={props.closeModal}>close</button>
        {/* TODO idをもとに、worksContentsから表示内容を取得する */}
      </div>
    </>
  )
}
