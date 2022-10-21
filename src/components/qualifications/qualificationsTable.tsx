import styles from './qualificationsTable.module.css'

export const QualificationsTable = (): JSX.Element => {
  const qualificationsData = [
    { id: 5, ym: '2022/03', q: 'Certified Scrum Developer' },
    { id: 4, ym: '2021/12', q: 'Certified ScrumMaster' },
    { id: 3, ym: '2021/03', q: '応用情報技術者' },
    { id: 2, ym: '2020/09', q: 'TOEIC 825点' },
    { id: 1, ym: '2019/11', q: '基本情報技術者' },
  ]

  const makeTbody = () => {
    return qualificationsData.map((d) => (
      <tr key={d.id} className={styles.tr}>
        <td className={styles.td}>{d.ym}</td>
        <td className={`text-left p-12 ${styles.td}`}>{d.q}</td>
      </tr>
    ))
  }

  return (
    <table className={`table-auto mx-auto ${styles.table}`}>
      <thead>
        <tr>
          <th className={styles.th}>取得年月</th>
          <th className={styles.th}>資格名</th>
        </tr>
      </thead>
      <tbody>{makeTbody()}</tbody>
      <tfoot></tfoot>
    </table>
  )
}
