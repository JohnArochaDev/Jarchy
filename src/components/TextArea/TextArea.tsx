import styles from './styles.module.scss'

export interface TextAreaProps {
  /** Classname for custom styling */
  className?: string
  /** Error message(s) displayed below the textarea. Accepts a single string or an array joined by ", ". */
  errors?: string | string[]
  /** Label text rendered above the textarea. */
  label?: string
  /** Called with the current textarea value on every keystroke. */
  onChange?: (value: string) => void
  /** Placeholder text shown when the textarea is empty. */
  placeholder?: string
  /** The controlled value of the textarea. */
  value: string
}

export const TextArea = (props: TextAreaProps) => {
  const { className, errors, label, onChange, placeholder, value } = props

  const formattedErrors =
    typeof errors === 'string' ? errors : errors?.join(', ')

  return (
    <>
      {label && (
        <p className={[styles.label, className].filter(Boolean).join(' ')}>
          {label}
        </p>
      )}
      <textarea
        placeholder={placeholder}
        className={[styles.input, className].filter(Boolean).join(' ')}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />

      {formattedErrors && (
        <p className={styles.bottomError}>{formattedErrors}</p>
      )}
    </>
  )
}
