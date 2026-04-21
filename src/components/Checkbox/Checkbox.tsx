import { useState } from 'react'

import { Themes } from '../../constants/types'
import { cs } from '../../constants/utils'
import styles from './styles.module.scss'

export interface CheckboxProps {
  /**
   * Whether the checkbox is initially checked.
   * @default false
   */
  checked: boolean
  /** Classname for custom styling on the checkbox input. */
  className?: string
  /** Classname for custom styling on the outer container element. */
  containerClassname?: string
  /** Disables the checkbox, preventing interaction. */
  disabled?: boolean
  /** Text label rendered beside the checkbox. */
  label?: string
  /** Classname for custom styling on the label text. */
  labelClassname?: string
  /**
   * Visual theme applied to the checkbox.
   * @default "theme-black"
   */
  theme?: Themes
}

export const Checkbox = (props: CheckboxProps) => {
  const {
    checked = false,
    className = '',
    containerClassname = '',
    disabled,
    label,
    labelClassname = '',
    theme = 'theme-black',
  } = props

  const [checkedValue, setCheckedValue] = useState<boolean>(checked)

  const handleClick = () => {
    if (!disabled) {
      setCheckedValue(!checkedValue)
    }
  }

  return (
    <label className={cs([theme, styles.container, containerClassname])}>
      <input
        className={cs([styles.checkbox, className])}
        type="checkbox"
        checked={checkedValue}
        onClick={handleClick}
        disabled={disabled}
      />
      {label && (
        <span className={cs([styles.label, labelClassname])}>{label}</span>
      )}
    </label>
  )
}
