import React from 'react'
import { Story, Meta } from '@storybook/react'
import List, { ListProps } from '.'

const fakeDataGenerator = (length: number) => {
  return Array.from({ length }, (_, i) => i).map((index) => ({
    id: index + 1,
    name: 'Developer ' + (index + 1),
    skill: Math.random() > 0.5 ? 'None' : 'Eat pizza',
  }))
}

const fakeData = fakeDataGenerator(10)
const columns = [
  {
    name: 'ID',
    sort: (itemA: any, itemB: any) =>
      itemA.id > itemB.id ? 1 : itemA.id < itemB.id ? -1 : 0,
  },
  { name: 'Name' },
  { name: 'Skill' },
]

const Template: Story<ListProps> = (args) => (
  <List {...args}>
    {({ data }) => (
      <>
        {data.map((line) => {
          const typedLine = line as { name: string; id: number; skill: string }
          return (
            <List.Row key={typedLine.name}>
              <List.Cell>{typedLine.id}</List.Cell>
              <List.Cell>{typedLine.name}</List.Cell>
              <List.Cell>{typedLine.skill}</List.Cell>
            </List.Row>
          )
        })}
      </>
    )}
  </List>
)

export const Basic = Template.bind({})
Basic.args = {
  className: 'w-full',
  columns: columns,
  data: fakeData,
}

export default {
  title: 'Components/List',
  component: List,
} as Meta
