import { cs } from '../../constants/utils'
import styles from './styles.module.scss'

type InputSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'

type InputType = 'text' | 'password' | 'email' | 'search' | 'url' | 'tel'

export interface InputProps {
  /** Classname for custom styling */
  classname?: string
  /** List of error messages displayed below the input. */
  errors?: string[]
  /** Label text rendered above the input. */
  label?: string
  /** Called with the current input value on every keystroke. */
  onChange: (value: string) => void
  /** Placeholder text shown when the input is empty. */
  placeholder?: string
  /**
   * Controls the width of the input.
   * @default 'md'
   */
  size?: InputSize
  /**
   * HTML input type.
   * @default 'text'
   */
  type?: InputType
  /** The controlled value of the input. */
  value: string
}

export const Input = (props: InputProps) => {
  const {
    classname = '',
    errors,
    label,
    onChange,
    placeholder,
    size = 'md',
    type = 'text',
    value,
  } = props

  const formattedErrors = errors?.join(', ')

  return (
    <>
      {label && <p className={cs([styles.label, classname])}>{label}</p>}

      <input
        className={cs([
          styles.input,
          styles[`width-${size}`],
          (formattedErrors && styles.error) ?? '',
        ])}
        type={type}
        placeholder={placeholder ?? ''}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      {formattedErrors && (
        <p className={styles.bottomError}>{formattedErrors}</p>
      )}
    </>
  )
}
