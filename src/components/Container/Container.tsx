import { ElementType, ReactNode } from 'react'

import { cs } from '../../constants/utils'
import styles from './styles.module.scss'

export type SpacingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type FlexDirection = 'column' | 'row'
export type JustifyContent =
  | 'center'
  | 'start'
  | 'end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

export interface ContainerProps {
  /**
   * The HTML element or component to render as.
   * @default "div"
   */
  as?: ElementType
  /**
   * The content to render inside the container.
   */
  children: ReactNode
  /**
   * Additional class names to apply to the container.
   */
  classname?: string
  /**
   * The flex direction of the container's children.
   * @default "column"
   */
  flexDirection?: FlexDirection
  /**
   * The gap between children using preset spacing tokens.
   * @default "md"
   */
  gap?: SpacingSize
  /**
   * How children are aligned along the main axis.
   * @default "start"
   */
  justifyContent?: JustifyContent
  /**
   * The padding inside the container using preset spacing tokens.
   * @default "md"
   */
  padding?: SpacingSize
}

export const Container = (props: ContainerProps) => {
  const {
    as: Tag = 'div',
    children,
    classname = '',
    flexDirection = 'column',
    gap = 'md',
    justifyContent = 'start',
    padding = 'md',
  } = props

  const classes = cs([
    styles.container,
    padding && styles[`padding-${padding}`],
    gap && styles[`gap-${gap}`],
    flexDirection && styles[`${flexDirection}`],
    justifyContent && styles[`justify-${justifyContent}`],
    classname,
  ])

  return <Tag className={classes}>{children}</Tag>
}
