import styles from './styles.module.scss'

export type SelectOption = {
  value: string
  label: string
}

export interface SelectProps {
  label?: string
  options: SelectOption[]
  onChange: (value: string) => void
  value: string
  /**
   * Controls the width of the select.
   * @default 'md'
   */
  placeholder?: string
}

export const Select = (props: SelectProps) => {
  const { label, options, onChange, value = 'md', placeholder } = props

  return (
    <>
      {label && <p className={styles.label}>{label}</p>}
      <select
        className={styles.select}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {placeholder && (
          <option className={styles.placeholder} value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option
            className={styles.options}
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </>
  )
}
