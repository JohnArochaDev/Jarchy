import { Themes } from '../../constants/types'
import styles from './Button.module.scss'

export interface ButtonProps {
  label?: string
  theme?: Themes
  onClick?: () => void
}

export const Button = (props: ButtonProps) => {
  const { label = 'Button', onClick, theme = 'theme-black' } = props

  return <button className={`${theme} ${styles.button}`} onClick={onClick}>{label}</button>
}
