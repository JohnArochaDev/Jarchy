import styles from './styles.module.scss'

export type DividerType = 'horizontal' | 'vertical'

export interface DividerProps {
  /** Controls the orientation of the divider line. */
  variant?: DividerType
}

export const Divider = (props: DividerProps) => {
  const { variant = 'horizontal' } = props
  return <hr className={styles[variant]} />
}
