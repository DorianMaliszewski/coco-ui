const makeUUID = (prefix = '', length = 10): string => {
  const result = []
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result.push(characters.charAt(Math.floor(Math.random() * charactersLength)))
  }
  return prefix.length > 0 ? `${prefix}-${result.join('')}` : result.join('')
}

export default makeUUID
