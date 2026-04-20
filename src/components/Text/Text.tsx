import { ReactNode } from 'react'

import styles from './styles.module.scss'

export type TextType =
  | 'p'
  | 'span'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'label'

export interface TextProps {
  /**
   * The HTML tag to render as.
   * @default 'p'
   */
  as?: TextType
  /** The content rendered inside the text element. */
  children: ReactNode
  /** Classname for custom styling */
  className?: string
}

export const Text = (props: TextProps) => {
  const { as: Tag = 'p', children, className } = props

  return (
    <Tag className={[styles.text, className].filter(Boolean).join(' ')}>
      {children}
    </Tag>
  )
}
