import styles from './styles.module.scss'

export type SelectOption = {
  value: string
  label: string
}

export interface SelectProps {
  /** Label text rendered above the select. */
  label?: string
  /** The list of options to display in the dropdown. */
  options: SelectOption[]
  /** Called with the selected option's value when the selection changes. */
  onChange: (value: string) => void
  /** The controlled value of the select. */
  value: string
  /** Placeholder text shown as a disabled, hidden first option when no value is selected. */
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
