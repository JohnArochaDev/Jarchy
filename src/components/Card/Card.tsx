import { ReactNode } from 'react'

import { Divider } from '../Divider'
import styles from './styles.module.scss'

export interface CardProps {
  title?: string
  content: ReactNode
  /** Optional max width for the card (e.g. '400px', '50%') */
  maxWidth?: string
}

export const Card = (props: CardProps) => {
  const { title, content, maxWidth } = props
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
      <div className={styles.content}>{content}</div>
    </div>
  )
}
