const sizes: Record<string, string> = {
  xs: 'w-1/6',
  sm: 'w-2/6',
  md: 'w-3/6',
  lg: 'w-4/6',
  xl: 'w-5/6',
  full: 'w-full',
}

export type ModalSize = keyof typeof sizes
export type ModalPosition = 'top' | 'right' | 'bottom' | 'left' | 'center'
export type ModalState = 'closed' | 'opened' | 'opening' | 'closing'

export const getSize = (size: ModalSize): string => sizes[size] ?? ''

const fades = {
  fade: {
    in: 'translate-y-0 sm:scale-100',
    out: 'translate-y-4 sm:translate-y-0 sm:scale-95',
  },
  fadeTop: { in: '-translate-y-0', out: '-translate-y-20' },
  fadeRight: { in: '-translate-x-0', out: 'translate-x-20' },
  fadeBottom: { in: '-translate-y-0', out: 'translate-y-20' },
  fadeLeft: { in: '-translate-x-0', out: '-translate-x-20' },
}

const generateFadeAnimations = (): Record<
  string,
  Record<string, Record<string, string>>
> => {
  return Object.entries(fades).reduce(
    (acc, fadeEntry) => ({
      ...acc,
      [fadeEntry[0]]: {
        container: {
          in: 'fixed inset-0 z-100 overflow-y-auto',
          out: 'sr-only',
        },
        background: {
          out: 'ease-in duration-300 opacity-0',
          in: 'ease-out duration-300 opacity-100',
        },
        modal: {
          out: `ease-in duration-200 opacity-0 ${fadeEntry[1].out}`,
          in: `ease-out duration-300 opacity-100 ${fadeEntry[1].in}`,
        },
      },
    }),
    {}
  )
}

const animations = {
  ...generateFadeAnimations(),
}

export type ModalAnimation = keyof typeof fades

const getContainerClassNames = (
  animation: ModalAnimation,
  state: ModalState
) => {
  switch (state) {
    case 'closed':
      return animations[animation]?.container.out
    case 'closing':
    case 'opened':
    case 'opening':
      return animations[animation]?.container.in
    default:
      return ''
  }
}

const getBackgroundClassNames = (
  animation: ModalAnimation,
  state: ModalState
) => {
  const base = 'fixed flex inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
  switch (state) {
    case 'closed':
      return `${base} ${animations[animation]?.background.out}`
    case 'closing':
      return `${base} ${animations[animation]?.background.out}`
    case 'opened':
    case 'opening':
      return `${base} ${animations[animation]?.background.in}`
    default:
      return ''
  }
}

const getModalDialodClassNames = (
  animation: ModalAnimation,
  state: ModalState,
  size: ModalSize
) => {
  const base = `${sizes[size]} text-foreground flex align-bottom bg-white rounded-lg text-left overflow-visible shadow-xl transform transition-all sm:my-4 sm:align-middle sm:max-w-full p-2`
  switch (state) {
    case 'closed':
    case 'closing':
      return `${base} ${animations[animation]?.modal.out}`
    case 'opened':
    case 'opening':
      return `${base} ${animations[animation]?.modal.in}`
    default:
      return ''
  }
}

const getModalContainerlClassNames = (position: ModalPosition) => {
  const base = 'flex min-h-screen pt-4 px-4 pb-20 text-center sm:p-0'
  switch (position) {
    case 'top':
      return `${base} items-start justify-center`
    case 'right':
      return `${base} items-center justify-end`
    case 'bottom':
      return `${base} items-end justify-center `
    case 'left':
      return `${base} items-center`
    case 'center':
    default:
      return `${base} items-center justify-center`
  }
}

const getCloseButtonClassNames = (position: ModalPosition, size: ModalSize) => {
  const base =
    'absolute bg-background rounded-full w-6 h-6 p-1 flex items-center justify-center'

  if (size === 'full' || position === 'right') {
    return `${base} top-1 right-2`
  }

  return `${base} -right-8 top-0`
}

export const getModalClassNames = (
  animation: ModalAnimation,
  state: ModalState,
  position: ModalPosition,
  size: ModalSize
): Record<string, string> => {
  const classNames: Record<string, string> = {}

  classNames.container = getContainerClassNames(animation, state)
  classNames.background = getBackgroundClassNames(animation, state)
  classNames.modal = getModalDialodClassNames(animation, state, size)
  classNames.modalContainer = getModalContainerlClassNames(position)
  classNames.closeButton = getCloseButtonClassNames(position, size)

  return classNames
}
