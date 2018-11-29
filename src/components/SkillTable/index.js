import React from 'react'

import { Table, Column, ColumnHeader } from './elements'

const SkillTable = props => {
  return (
    <Table>
      <Column>
    <ColumnHeader>Front-End</ColumnHeader>
    <hr />
    <div>JavaScript</div>
    <div>React</div>
    <div>Html</div>
    <div>CSS (Bootstrap)</div>
    <div>jQuery</div>
    </Column>

    <Column>
    <ColumnHeader>Back-End</ColumnHeader>
    <hr />
    <div>Node js</div>
    <div>.NET Core</div>
    <div>Express</div>
    <div>MongoDB</div>
    <div>SQL</div>
    </Column>

    <Column>
      <ColumnHeader>Tools</ColumnHeader>
      <hr />
    <div>VS Code</div>
    <div>Git</div>
    <div>Webpack</div>
    <div>Babel</div>
    <div>NuGet</div>
    </Column>
    </Table>
  )
}

export default SkillTable