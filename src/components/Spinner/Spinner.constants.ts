export type SpinnerSize = 'sm' | 'md' | 'lg'

export const SIZE_MAP: Record<SpinnerSize, number> = {
  sm: 24,
  md: 40,
  lg: 64,
}

export interface SpinnerProps {
  /**
   * Size of the spinner. Accepts a named size or an explicit pixel value.
   * @default "md"
   */
  size?: SpinnerSize | number
  /**
   * Color of the spinner ticks, as any valid CSS color string.
   * @default "#808080"
   */
  color?: string
}
