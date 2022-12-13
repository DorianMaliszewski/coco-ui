import '../src/index.css'

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
  backgrounds: {
    disable: true,
  },
}

const Root = ({ children }) => {
  const firstHtml = document.querySelector('html')

  if (firstHtml) firstHtml.setAttribute('data-theme', 'light')

  return children
}

export const decorators = [
  (Story) => (
    <Root>
      <Story />
    </Root>
  ),
]
