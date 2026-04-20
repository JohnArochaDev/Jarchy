import styles from './styles.module.scss'

export type DividerType = 'horizontal' | 'vertical'

export interface DividerProps {
  variant: DividerType
}

export const Divider = (props: DividerProps) => {
  const { variant } = props
  return <hr className={styles[variant]} />
}
