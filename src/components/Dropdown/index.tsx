import clsx from 'clsx'
import Button from 'components/Button'
import React from 'react'

const dropdownContentClasses =
  'dropdown-content menu p-2 shadow bg-base-100 rounded-box'

export type DropdownProps = {
  children: React.ReactNode
}

const Dropdown = ({ children }: DropdownProps): JSX.Element => (
  <div className="dropdown">{children}</div>
)

Dropdown.defaultProps = {
  variant: 'primary',
}

interface IContentProps {
  children: React.ReactNode
  className?: string
}
const Content = ({ children, className }: IContentProps) => {
  return (
    <ul tabIndex={0} className={clsx(dropdownContentClasses, className)}>
      {children}
    </ul>
  )
}

Content.displayName = 'Dropdown.Content'

type LinkItemProps = React.LinkHTMLAttributes<HTMLAnchorElement>
const LinkItem = (props: LinkItemProps) => (
  <li>
    <a {...props}>{props.children}</a>
  </li>
)

type ButtonItemProps = React.ButtonHTMLAttributes<HTMLButtonElement>
const ButtonItem = (props: ButtonItemProps) => (
  <li>
    <button type="button" {...props}>
      {props.children}
    </button>
  </li>
)

Dropdown.Content = Content
Dropdown.Button = Button
Dropdown.LinkItem = LinkItem
Dropdown.ButtonItem = ButtonItem

export default Dropdown
