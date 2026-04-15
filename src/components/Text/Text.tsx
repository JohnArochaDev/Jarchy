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
  /** The content rendered inside the text element. */
  children: ReactNode
  /**
   * The HTML tag to render as.
   * @default 'p'
   */
  as?: TextType
  /** Classname for custom styling */
  className?: string
}

export const Text = (props: TextProps) => {
  const { children, as: Tag = 'p', className } = props

  return (
    <Tag className={[styles.input, className].filter(Boolean).join(' ')}>
      {children}
    </Tag>
  )
}
