import { useEffect, useState } from 'react'

import styles from './styles.module.scss'

export type ToastVariant = 'success' | 'error'

export interface ToastProps {
  message: string
  time?: number
  variant?: ToastVariant
}

export const Toast = (props: ToastProps) => {
  const { message, time = 10000, variant = 'success' } = props

  const [timeLeft, setTimeLeft] = useState<number>(time)

  useEffect(() => {
    if (timeLeft < 0) return
    const timer = setTimeout(() => setTimeLeft((prev) => prev - 100), 100)
    return () => clearTimeout(timer)
  }, [timeLeft])

  return (
    <>
      {timeLeft >= 0 && (
        <div
          className={
            variant === 'success' ? styles.toastSuccess : styles.toastError
          }
        >
          <span className={styles.message}>{message}</span>
          <button
            className={styles.closeButton}
            onClick={() => setTimeLeft(-1)}
          >
            ✕
          </button>
          <div
            className={styles.timeBar}
            style={{ width: `${(timeLeft / time) * 100}%` }}
          />
        </div>
      )}
    </>
  )
}
