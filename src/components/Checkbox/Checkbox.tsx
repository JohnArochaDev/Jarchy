import { useState } from 'react'

import { Themes } from '../../constants/types'
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
    className,
    containerClassname,
    disabled,
    label,
    labelClassname,
    theme = 'theme-black',
  } = props

  const [checkedValue, setCheckedValue] = useState<boolean>(checked)

  const handleClick = () => {
    if (!disabled) {
      setCheckedValue(!checkedValue)
    }
  }

  return (
    <label
      className={[theme, styles.container, containerClassname]
        .filter(Boolean)
        .join(' ')}
    >
      <input
        className={[styles.checkbox, className].filter(Boolean).join(' ')}
        type="checkbox"
        checked={checkedValue}
        onClick={handleClick}
        disabled={disabled}
      />
      {label && (
        <span
          className={[styles.label, labelClassname].filter(Boolean).join(' ')}
        >
          {label}
        </span>
      )}
    </label>
  )
}
