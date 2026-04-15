import { Themes } from '../../constants/types'
import styles from './styles.module.scss'

export interface RadioProps {
  /** Whether this radio is selected. Derived from parent comparing value to selected state. */
  checked: boolean
  /** Classname for custom styling on the radio input. */
  className?: string
  /** Classname for custom styling on the outer container element. */
  containerClassname?: string
  /** Groups radios at the HTML level to enforce mutual exclusion. */
  group?: string
  /** Text label rendered beside the radio. */
  label?: string
  /** Classname for custom styling on the label text. */
  labelClassname?: string
  /** Called with this radio's value when selected. */
  onChange: (value: string) => void
  /**
   * Visual theme applied to the radio.
   * @default "theme-black"
   */
  theme?: Themes
  /** The value this radio represents. */
  value: string
}

export const Radio = (props: RadioProps) => {
  const {
    checked,
    className,
    containerClassname,
    group,
    label,
    labelClassname,
    onChange,
    theme = 'theme-black',
    value,
  } = props

  return (
    <label
      className={[theme, styles.container, containerClassname]
        .filter(Boolean)
        .join(' ')}
    >
      <input
        className={[styles.checkbox, className].filter(Boolean).join(' ')}
        type="radio"
        name={group}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
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
