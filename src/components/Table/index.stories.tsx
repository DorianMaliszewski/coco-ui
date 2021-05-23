import React from 'react'
import { Story, Meta } from '@storybook/react'
import Table, { TableProps } from '.'
import useTableState from './useTableState'

export default {
  title: 'Components/Table',
  component: Table,
} as Meta

const fakeDataGenerator = (length: number) => {
  return Array.from({ length }, (_, i) => i).map((index) => ({
    id: index + 1,
    name: 'Developer ' + (index + 1),
    skill: Math.random() > 0.5 ? 'None' : 'Eat pizza',
  }))
}

const fakeData = fakeDataGenerator(10)

export const Basic: Story<TableProps> = ({ hoverable }: TableProps) => {
  return (
    <Table hoverable={hoverable}>
      <Table.Head
        columns={[{ name: 'Id' }, { name: 'Name' }, { name: 'Skill' }]}
      />
      <Table.Body>
        {fakeData.map((row) => (
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
        {fakeData.map((row) => (
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
  const { data, sort, onSort } = useTableState({
    data: fakeData,
    initialSort: { field: 'id', order: 'asc' },
  })
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

export const Example: Story<TableProps> = ({ hoverable }: TableProps) => {
  const { data, sort, onSort } = useTableState({
    data: fakeData,
    initialSort: { field: 'id', order: 'asc' },
  })
  return (
    <Table data={data} hoverable={hoverable}>
      <Table.Head>
        <Table.Row>
          <Table.HeadCell
            className="text-center w-20"
            onSort={onSort}
            sort={sort}
            sortable="id"
          >
            Id
          </Table.HeadCell>
          <Table.HeadCell
            className="py-1"
            onSort={onSort}
            sort={sort}
            sortable="name"
          >
            Name
          </Table.HeadCell>
          <Table.HeadCell
            className="text-center"
            onSort={onSort}
            sort={sort}
            sortable="skill"
          >
            Skill
          </Table.HeadCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {({ row }) => (
          <Table.Row hoverable={hoverable} key={row.id}>
            <Table.Cell className="p-1 text-center">{row.id}</Table.Cell>
            <Table.Cell className="p-1">{row.name}</Table.Cell>
            <Table.Cell className="text-center">{row.skill}</Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  )
}

Example.args = {
  hoverable: true,
}
