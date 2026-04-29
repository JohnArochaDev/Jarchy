import { ReactNode } from 'react'

import { Divider } from '../Divider'
import styles from './styles.module.scss'

export interface CardProps {
  /** Optional title rendered in the card header above a divider. */
  title?: string
  /** The main body content of the card. */
  children: ReactNode
  /** Optional max width for the card (e.g. '400px', '50%'). */
  maxWidth?: string
}

export const Card = (props: CardProps) => {
  const { title, children, maxWidth } = props
  return (
    <div className={styles.card} style={maxWidth ? { maxWidth } : undefined}>
      {/* header */}
      {title && (
        <>
          <h3 className={styles.header}>{title}</h3>{' '}
          <Divider variant="horizontal" />
        </>
      )}
      {/* content */}
      <div className={styles.content}>{children}</div>
    </div>
  )
}
