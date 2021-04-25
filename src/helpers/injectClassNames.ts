import React from 'react'

const injectClassNames = (as = 'div') => (strings: TemplateStringsArray) => {
  const Element = ({ className, children, ...props }: any) => {
    return React.createElement(
      as,
      {
        className: `${className ?? ''}${strings ? ` ${strings}` : ``}`,
        ...props,
      },
      children
    )
  }
  Element.displayName = `${as}`
  return Element
}
export default injectClassNames
