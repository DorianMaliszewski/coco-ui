import React from 'react'

const sizes = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 10,
  xl: 14,
  '2xl': 16,
}

type LoaderSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
export interface LoaderProps {
  size?: number | LoaderSize
  color?: string
  className?: string
}
const Loader = ({
  size = 'md',
  color = 'primary-800',
  className = '',
}: LoaderProps): JSX.Element => {
  return (
    <svg
      className={`animate-spin h-${sizes[size as LoaderSize] ?? size} w-${
        sizes[size as LoaderSize] ?? size
      } text-${color} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  )
}

export default Loader
