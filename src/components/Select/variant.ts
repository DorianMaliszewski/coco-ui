export type SelectVariant = 'inside' | 'outside' | 'default'

export const SelectVariantClassNames: Record<SelectVariant, any> = {
  default: {
    container: {
      base: `relative border bg-background rounded p-2 h-10 flex items-center w-full outline-none`,
      default:
        'focus-within:border-primary-600 focus-within:text-primary-600 text-gray-500 border-gray-300',
      disabled: 'opacity-30 cursor-not-allowed pointer-events-none',
      loading: 'pointer-events-none cursor-not-allowed',
      error: 'text-error-600 border-error-600',
    },
    input: {
      base: 'absolute bg-transparent flex-grow outline-none',
      error: 'text-error-600',
    },
    label: {
      base: 'text-xs',
      default: '',
      error: 'text-error-600',
    },
    valueContainer: {
      base: 'w-full flex justify-between items-center',
      default: 'text-foreground',
      error: 'text-error-600',
    },
  },
  inside: {
    container: {
      loading: 'pointer-events-none cursor-not-allowed',
      base: `relative border bg-background rounded pt-1 p-2 flex flex-col w-full outline-none h-10`,
      default:
        'focus-within:border-primary-600 focus-within:text-primary-600 text-gray-500 border-gray-300',
      disabled: 'opacity-30 cursor-not-allowed pointer-events-none',
      error: 'text-error-600 border-error-600',
    },
    input: {
      base: 'absolute bg-transparent flex-grow outline-none',
      error: 'text-error-600',
    },
    label: {
      base: 'text-xs',
      default: '',
      error: '',
    },
    valueContainer: {
      base: 'w-full flex justify-between items-center',
      default: 'text-foreground',
      error: 'text-error-600',
    },
  },
  outside: {
    container: {
      loading: 'pointer-events-none cursor-not-allowed',
      base: `relative flex w-full flex-col h-10`,
      default:
        'focus-within:border-primary-600 focus-within:text-primary-600 border-gray-300 text-gray-500',
      disabled: 'opacity-30 cursor-not-allowed pointer-events-none',
      error: 'text-error-600',
    },
    input: {
      base: 'absolute bg-transparent flex-grow outline-none',
      error: 'text-error-600',
    },
    label: {
      base: 'text-xs',
      default: '',
      error: 'text-error-600',
    },
    valueContainer: {
      base:
        'border bg-background rounded p-2 w-full flex justify-between items-center outline-none',
      default:
        'focus-within:border-primary-600 border-gray-300 text-foreground',
      error: 'border-error-600',
    },
  },
}
