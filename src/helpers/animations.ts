const fadeIn = (open?: boolean) =>
  open ? 'ease-out duration-300 opacity-100' : 'ease-in duration-200 opacity-0'

const animations = {
  fadeIn,
}

export default animations
