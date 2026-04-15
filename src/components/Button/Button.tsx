import { useState } from 'react'

import { Themes } from '../../constants/types'
import styles from './Button.module.scss'

export interface ButtonProps {
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

/**
 * A general-purpose button component with optional theme and toggle behavior.
 *
 * @example
 * // Basic usage
 * <Button label="Save" onClick={() => console.log('saved')} />
 *
 * @example
 * // Themed and toggleable
 * <Button label="Like" theme="theme-green" toggle onClick={() => console.log('toggled')} />
 *
 * @example
 * // Disabled state
 * <Button label="Submit" disabled onClick={() => {}} />
 */
export const Button = (props: ButtonProps) => {
  const {
    disabled,
    label = 'Button',
    onClick,
    theme = 'theme-black',
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
      className={`${theme} ${styles.button} ${toggleClass()}`}
      onClick={clickWithToggle}
    >
      {label}
    </button>
  )
}
