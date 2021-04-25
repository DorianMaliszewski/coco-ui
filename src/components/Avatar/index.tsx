import injectClassNames from 'helpers/injectClassNames'
import React from 'react'

export const getStringFromAlt = (altStr: any) => {
  if (!altStr) return ''
  const array = altStr.split(' ')
  if (array.length > 1) {
    return `${array[0].substr(0, 1) + array[1].substr(0, 1)}`.toUpperCase()
  }
  return array.length ? `${array[0].substr(0, 1)}`.toUpperCase() : ''
}

export interface AvatarProps extends React.ImgHTMLAttributes<any> {
  size: number
  src?: string
  className?: string
  alt: string
}

const StyledImg = injectClassNames(
  'img'
)`rounded-full bg-gray-300 flex justify-center items-center`

const StyledDiv = injectClassNames(
  'div'
)`rounded-full bg-gray-300 flex justify-center items-center p-4`

const Avatar = ({ size, src, alt, className, ...props }: AvatarProps) => {
  return src ? (
    <StyledImg
      src={src}
      alt={alt}
      className={className}
      style={{ width: size, height: size }}
      {...props}
    />
  ) : (
    <StyledDiv
      className={className}
      style={{ width: size, height: size }}
      {...props}
    >
      {getStringFromAlt(alt)}
    </StyledDiv>
  )
}

Avatar.defaultProps = {
  size: 24,
}

export default Avatar
