import clsx from 'clsx'
import React from 'react'

const classes = {
  base: 'rounded-full flex justify-center items-center',
  withoutSrc: 'p-4 select-none bg-base-300',
}

export const getStringFromAlt = (altStr: string): string => {
  if (!altStr) return ''
  const array = altStr.split(' ')
  if (array.length > 1) {
    return `${array[0].substr(0, 1) + array[1].substr(0, 1)}`.toUpperCase()
  }
  return array.length ? `${array[0].substr(0, 1)}`.toUpperCase() : ''
}

export interface AvatarProps
  extends React.HTMLAttributes<HTMLImageElement | HTMLDivElement> {
  size: number
  src?: string
  className?: string
  alt: string
}

const Avatar = ({
  size,
  src,
  alt,
  className,
  ...props
}: AvatarProps): JSX.Element => {
  return src ? (
    <img
      src={src}
      alt={alt}
      className={clsx(classes.base, className)}
      style={{ width: size, height: size }}
      {...props}
    />
  ) : (
    <div
      className={clsx(classes.base, classes.withoutSrc, className)}
      style={{ width: size, height: size }}
      {...props}
    >
      {getStringFromAlt(alt)}
    </div>
  )
}

Avatar.defaultProps = {
  size: 24,
}

export default Avatar
