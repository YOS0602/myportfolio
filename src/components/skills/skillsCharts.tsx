import { skills, TSkill, TSkillKind } from '@/const/skillsData'
import styles from './skillsCharts.module.css'

function filterSkills(kind: TSkillKind): TSkill[] {
  return skills.filter((v) => v.kind === kind)
}

type Props = {
  skillKind: TSkillKind
}

export const SkillsCharts = (props: Props): JSX.Element => {
  return (
    <>
      <div className="grid grid-cols-4 xl:grid-cols-7 gap-4 py-4">
        {filterSkills(props.skillKind).map((v, i) => (
          <div key={i}>
            <BarChart v={v} />
          </div>
        ))}
      </div>
    </>
  )
}

function BarChart({ v }: { v: TSkill }): JSX.Element {
  return (
    <>
      <div className="flex items-end mx-auto my-2 bg-slate-400 w-2 h-28 rounded-full">
        <div
          className={`${
            styles[`chart-bar-level-${v.level}`]
          } bg-c4 w-2 rounded-full`}
        ></div>
      </div>
      <p className="text-xs md:text-base">{v.name}</p>
    </>
  )
}
