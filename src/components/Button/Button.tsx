import styles from './Button.module.scss'

export interface ButtonProps {
  label?: string
  onClick?: () => void
  theme?: string
}

export const Button = (props: ButtonProps) => {
  const { label = 'Button', onClick, theme = 'theme-black' } = props

  return <button className={`${theme} ${styles.button}`} onClick={onClick}>{label}</button>
}
