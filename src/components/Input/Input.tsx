import { useState } from 'react'

import styles from './styles.module.scss'

type InputType = 'text' | 'password' | 'email' | 'search' | 'url' | 'tel'

export interface InputProps {
  errors?: string[]
  label?: string
  placeholder?: string
  type?: InputType
  value?: string
}

export const Input = (props: InputProps) => {
  const { errors, label, placeholder, type = 'text', value } = props

  const [inputValue, setInputValue] = useState<string>(value ?? '')

  const formattedErrors = errors?.join(', ')

  return (
    <>
      {label && <p className={styles.label}>{label}</p>}

      <input
        className={`${styles.input} ${formattedErrors ? styles.error : ''}`}
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
