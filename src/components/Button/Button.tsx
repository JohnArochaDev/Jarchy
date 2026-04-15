import { useState } from 'react'

import { Themes } from '../../constants/types'
import styles from './styles.module.scss'

type Types = 'submit' | 'reset' | 'button'

export interface ButtonProps {
  /** Classname for custom styling */
  classname?: string
  /** Disables the button, preventing interaction and applying disabled styling. */
  disabled?: boolean
  /**
   * Text displayed inside the button.
   * @default "Button"
   */
  label?: string
  /** Callback fired when the button is clicked. Not called when `disabled` is true and `toggle` is true. */
  onClick: () => void
  /**
   * Visual theme applied to the button.
   * @default "theme-black"
   */
  theme?: Themes
  /**
   * The buttons default behavior
   * @default "button"
   */
  type?: Types
  /**
   * When true, the button maintains an active/selected state on each click,
   * toggling between selected and unselected on subsequent clicks.
   */
  toggle?: boolean
  /**
   * The buttons toggled state
   * @default false
   */
  toggledState?: boolean
}

export const Button = (props: ButtonProps) => {
  const {
    classname,
    disabled,
    label = 'Button',
    onClick,
    theme = 'theme-black',
    type = 'button',
    toggle,
    toggledState = false,
  } = props

  const [toggleState, setToggleState] = useState<boolean>(toggledState)

  const clickWithToggle = (): void => {
    if (toggle && !disabled) {
      setToggleState(!toggleState)
    }
    onClick()
  }

  const toggleClass = (): string => {
    if (toggle && toggleState) {
      return styles.selected
    }

    return ''
  }

  return (
    <button
      disabled={disabled}
      className={`${theme} ${styles.button} ${toggleClass()} ${classname ?? ''}`}
      onClick={clickWithToggle}
      type={type}
    >
      {label}
    </button>
  )
}
