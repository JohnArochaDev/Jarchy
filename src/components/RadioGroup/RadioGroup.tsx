import { useState } from 'react'

import { Themes } from '../../constants/types'
import { Radio } from '../Radio'
import styles from './styles.module.scss'

export interface RadioOption {
  label: string
  value: string
}

export interface RadioGroupProps {
  /** Classname for custom styling on the outer container element. */
  className?: string
  /** The initially selected value. */
  defaultValue?: string
  /** Groups radios at the HTML level to enforce mutual exclusion. */
  group?: string
  /** Called with the selected value when a radio is selected. */
  onChange?: (value: string) => void
  /** The radio options to render. */
  options: RadioOption[]
  /**
   * Visual theme applied to all radios.
   * @default "theme-black"
   */
  theme?: Themes
}

export const RadioGroup = (props: RadioGroupProps) => {
  const {
    className,
    defaultValue,
    group,
    onChange,
    options,
    theme = 'theme-black',
  } = props

  const [selected, setSelected] = useState(defaultValue ?? options[0]?.value)

  const handleChange = (value: string) => {
    setSelected(value)
    onChange?.(value)
  }

  return (
    <div className={[styles.container, className].filter(Boolean).join(' ')}>
      {options.map((option) => (
        <Radio
          key={option.value}
          group={group}
          value={option.value}
          label={option.label}
          checked={selected === option.value}
          onChange={handleChange}
          theme={theme}
        />
      ))}
    </div>
  )
}
