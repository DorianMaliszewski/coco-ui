import Root from '../src/Root'
import '!style-loader!css-loader!postcss-loader!../src/index.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: '',
      order: ['Introduction', 'Components', 'Credits'],
      locales: '',
    },
  },
}

export const decorators = [
  (Story) => (
    <Root>
      <Story />
    </Root>
  ),
]
