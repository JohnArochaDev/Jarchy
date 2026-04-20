import { ReactNode, useId } from 'react'

import styles from './styles.module.scss'

export interface TooltipProps {
  /** The element that triggers the tooltip on hover. */
  children: ReactNode
  /** The text content displayed inside the tooltip. */
  text: string
  /**
   * The side of the trigger element where the tooltip appears.
   * @default "top"
   */
  placement?: 'top' | 'bottom' | 'left' | 'right'
}

export const Tooltip = ({
  children,
  text,
  placement = 'top',
}: TooltipProps) => {
  const id = useId()

  return (
    <div className={styles.wrapper}>
      <div aria-describedby={id}>{children}</div>
      <div
        id={id}
        role="tooltip"
        className={[styles.tooltip, styles[placement]].join(' ')}
      >
        {text}
      </div>
    </div>
  )
}
