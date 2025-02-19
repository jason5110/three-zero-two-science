
export const normalizeIndex = (index: number) => {
  if (index < 0) {
    return '00'
  }

  if (index > 99) {
    return '99+'
  }

  if (index < 10) {
    return `0${index}`
  }

  return `${index}`
}