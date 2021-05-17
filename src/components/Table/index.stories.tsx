import React from 'react'
import { Story, Meta } from '@storybook/react'
import Table, { TableProps } from '.'
import useTableState from './useTableState'

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
        columns={[{ name: 'Id' }, { name: 'Name' }, { name: 'Skill' }]}
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

export const Composition: Story<TableProps> = ({ hoverable }: TableProps) => {
  return (
    <Table hoverable={hoverable}>
      <Table.Head>
        <Table.Row>
          <Table.HeadCell>Id</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Skill</Table.HeadCell>
        </Table.Row>
      </Table.Head>
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

Composition.args = {
  hoverable: false,
}

export const Sortable: Story<TableProps> = ({ hoverable }: TableProps) => {
  const { data, sort, onSort } = useTableState({ data: fakeData(30) })
  return (
    <Table data={data} hoverable={hoverable}>
      <Table.Head>
        <Table.Row>
          <Table.HeadCell onSort={onSort} sort={sort} sortable="id">
            Id
          </Table.HeadCell>
          <Table.HeadCell onSort={onSort} sort={sort} sortable="name">
            Name
          </Table.HeadCell>
          <Table.HeadCell onSort={onSort} sort={sort} sortable="skill">
            Skill
          </Table.HeadCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {({ row }) => (
          <Table.Row key={row.id}>
            <Table.Cell>{row.id}</Table.Cell>
            <Table.Cell>{row.name}</Table.Cell>
            <Table.Cell>{row.skill}</Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  )
}

Sortable.args = {
  hoverable: false,
}
