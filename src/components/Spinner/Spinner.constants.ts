export type SpinnerSize = 'sm' | 'md' | 'lg'

export const SIZE_MAP: Record<SpinnerSize, number> = {
  sm: 24,
  md: 40,
  lg: 64,
}

export interface SpinnerProps {
  size?: SpinnerSize | number
  color?: string
}
