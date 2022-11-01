export type SelectVariant = 'inside' | 'outside'

export const SelectVariantClassNames: Record<SelectVariant, any> = {
  inside: {
    container: {
      loading: 'pointer-events-none cursor-not-allowed',
      base: `border bg-background rounded p-2 flex flex-col outline-none`,
      default:
        'focus-within:border-primary-600 focus-within:text-primary-600 text-gray-500 border-gray-300',
      disabled: 'opacity-30 cursor-not-allowed pointer-events-none',
      error: 'text-error-600 border-error-600',
    },
    input: {
      base: 'bg-transparent outline-none h-6 truncate w-full',
      default: 'text-gray-700',
      error: 'text-error-600',
    },
    label: {
      default: '',
      error: '',
    },
    valueContainer: {
      base: 'absolute inset-0 outline-none',
      default: 'text-gray-700',
      error: 'text-error-600',
    },
  },
  outside: {
    container: {
      loading: 'pointer-events-none cursor-not-allowed',
      base: `flex flex-col`,
      default:
        'focus-within:border-primary-600 focus-within:text-primary-600 text-gray-500',
      disabled: 'opacity-30 cursor-not-allowed pointer-events-none',
      error: 'text-error-600',
    },
    input: {
      base: 'h-10 px-2 py-5 rounded border bg-transparent outline-none truncate w-full',
      open: 'border-primary-600',
      close: 'border-gray-300',
      default: 'text-gray-700',
      error: 'text-error-600 border-error-600 placeholder-error-600',
    },
    label: {
      default: '',
      error: 'text-error-600',
    },
    valueContainer: {
      base: 'absolute inset-x-2 top-2 outline-none',
      default: 'text-gray-700',
      error: 'text-error-600',
    },
  },
}
