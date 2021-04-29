import React from 'react'
import { Story, Meta } from '@storybook/react'
import Table, { TableProps } from '.'

export default {
  title: 'Components/Table',
  component: Table,
} as Meta

const fakeData = (length: number) => {
  return Array.from({ length }, (_, i) => i).map((index) => ({
    id: index,
    name: 'Developer ' + index,
    skill: index % 2 === 0 ? 'None' : 'Eat pizza',
  }))
}

export const Basic: Story<TableProps> = ({ hoverable }: TableProps) => {
  return (
    <Table hoverable={hoverable}>
      <Table.Head
        columns={[{ name: 'Id' }, { name: 'Name' }, { name: 'Skills' }]}
      />
      <Table.Body>
        {fakeData(30).map((row) => (
          <Table.Row key={row.id}>
            <Table.Cell>{row.id}</Table.Cell>
            <Table.Cell>{row.name}</Table.Cell>
            <Table.Cell>{row.skill}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

Basic.args = {
  hoverable: false,
}
