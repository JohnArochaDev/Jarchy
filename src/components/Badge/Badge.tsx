import { Themes } from '../../constants/types'
import styles from './styles.module.scss'

export interface BadgeProps {
  /**
   * Visual theme applied to the button.
   * @default "theme-green"
   */
  theme?: Themes
  /**
   * Text to be displayed
   */
  value: string
}

export const Badge = (props: BadgeProps) => {
  const { theme = 'theme-green', value } = props
  return (
    <div className={[theme, styles.badge].filter(Boolean).join(' ')}>
      <span className={styles.text}>{value}</span>
    </div>
  )
}
