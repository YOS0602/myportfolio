type TQualification = {
  /** 取得年月 */
  ym: string
  /** 資格名 */
  q: string
}

export const qualificationsData: Readonly<TQualification>[] = [
  // {
  //   ym: '2023/07',
  //   q: 'Microsoft Certified: Azure Developer Associate AZ-204',
  // },
  { ym: '2023/07', q: 'Microsoft Certified: Azure Fundamentals AZ-900' },
  { ym: '2022/06', q: '日本漢字能力検定2級' },
  { ym: '2022/03', q: 'Certified Scrum Developer' },
  { ym: '2021/12', q: 'Certified ScrumMaster' },
  { ym: '2021/03', q: '応用情報技術者' },
  { ym: '2020/09', q: 'TOEIC 825点' },
  { ym: '2019/11', q: '基本情報技術者' },
]
