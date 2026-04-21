export const cs = (classnames: string[]): string => {
  return classnames.filter(Boolean).join(' ')
}
