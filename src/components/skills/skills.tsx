import React from 'react'
import { SkillsCharts } from './skillsCharts'

export const Skills = (): JSX.Element => {
  return (
    <>
      <div>
        <h3 className="text-xl md:text-2xl pt-10">Frontend</h3>
        <SkillsCharts skillKind="frontend" />
      </div>
      <div>
        <h3 className="text-xl md:text-2xl pt-10">Server Side</h3>
        <SkillsCharts skillKind="server side" />
      </div>
      <div>
        <h3 className="text-xl md:text-2xl pt-10">Framework</h3>
        <SkillsCharts skillKind="framework" />
      </div>
      <div>
        <h3 className="text-xl md:text-2xl pt-10">Cloud</h3>
        <SkillsCharts skillKind="cloud" />
      </div>
      <div>
        <h3 className="text-xl md:text-2xl pt-10">Other</h3>
        <SkillsCharts skillKind="other" />
      </div>
    </>
  )
}
