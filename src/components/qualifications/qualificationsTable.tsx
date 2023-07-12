import styles from './qualificationsTable.module.css'
import { qualificationsData } from '@/const/qualificationsData'

export const QualificationsTable = (): JSX.Element => {
  const makeTbody = () => {
    return qualificationsData.map((d, i) => (
      <tr key={i} className={styles.tr}>
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
