import { QualificationsTable } from './qualificationsTable'

export const Qualifications = (): JSX.Element => {
  return (
    <div>
      <p>保有している資格</p>
      <div className="my-10">
        <QualificationsTable />
      </div>
    </div>
  )
}
