import styles from './Button.module.scss'

export interface ButtonProps {
  label?: string
  onClick?: () => void
}

export const Button = (props: ButtonProps) => {
  const { label = 'Button', onClick } = props

  return <button className={styles.button} onClick={onClick}>{label}</button>
}
