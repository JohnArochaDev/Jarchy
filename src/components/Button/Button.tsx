import { Themes } from '../../constants/types'
import styles from './Button.module.scss'

export interface ButtonProps {
  disabled?: boolean
  label?: string
  onClick?: () => void
  theme?: Themes
}

export const Button = (props: ButtonProps) => {
  const { disabled, label = 'Button', onClick, theme = 'theme-black' } = props

  return <button disabled={disabled} className={`${theme} ${styles.button}`} onClick={onClick}>{label}</button>
}
