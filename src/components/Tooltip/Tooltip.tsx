import { ReactNode, useId } from 'react'

import styles from './styles.module.scss'

export interface TooltipProps {
  children: ReactNode
  text: string
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
