import { useState } from 'react'

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
  /** Initial value of the input. */
  value: string
}

export const Input = (props: InputProps) => {
  const {
    classname,
    errors,
    label,
    placeholder,
    size = 'md',
    type = 'text',
    value,
  } = props

  const [inputValue, setInputValue] = useState<string>(value ?? '')

  const formattedErrors = errors?.join(', ')

  return (
    <>
      {label && (
        <p className={[styles.label, classname].filter(Boolean).join(' ')}>
          {label}
        </p>
      )}

      <input
        className={`${styles.input} ${styles[`width-${size}`]} ${formattedErrors ? styles.error : ''}`}
        type={type}
        placeholder={placeholder ?? ''}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {formattedErrors && (
        <p className={styles.bottomError}>{formattedErrors}</p>
      )}
    </>
  )
}
