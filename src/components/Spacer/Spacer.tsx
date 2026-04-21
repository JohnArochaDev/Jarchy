import { cs } from '../../constants/utils'
import styles from './styles.module.scss'

export type SpacerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface SpacerProps {
  /**
   * The direction the spacer expands.
   * @default "vertical"
   */
  direction?: 'vertical' | 'horizontal'
  /**
   * The size of the spacer using preset spacing tokens.
   * @default "md"
   */
  size?: SpacerSize
}

export const Spacer = (props: SpacerProps) => {
  const { direction = 'vertical', size = 'md' } = props

  return (
    <div
      className={cs([styles.spacer, styles[direction], styles[`size-${size}`]])}
      aria-hidden="true"
    />
  )
}
