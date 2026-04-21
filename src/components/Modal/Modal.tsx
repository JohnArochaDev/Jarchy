import { ReactNode } from 'react'

import { cs } from '../../constants/utils'
import { Button } from '../Button'
import { Container } from '../Container'
import { Divider } from '../Divider'
import { Spacer } from '../Spacer'
import styles from './styles.module.scss'

export interface ModalProps {
  /** Additional CSS class for the primary button. */
  buttonOneClassname?: string
  /** Label for the primary action button. Defaults to 'Save'. */
  buttonOneLabel?: string
  /** Additional CSS class for the secondary button. */
  buttonTwoClassname?: string
  /** Label for the secondary action button. Defaults to 'Cancel'. */
  buttonTwoLabel?: string
  /** The main body content of the modal. */
  content: ReactNode
  /** Optional max width for the modal (e.g. '400px', '50%'). */
  maxWidth?: string
  /** Called when the secondary button or the X close button is clicked. */
  onClose: () => void
  /** Called when the primary button is clicked; also triggers onClose. */
  onSave: () => void
  /** Controls visibility of the modal. */
  showModal: boolean
  /** Optional title rendered in the modal header above a divider. */
  title?: string
}

export const Modal = (props: ModalProps) => {
  const {
    buttonOneClassname = '',
    buttonOneLabel = 'Save',
    buttonTwoClassname = '',
    buttonTwoLabel = 'Cancel',
    content,
    maxWidth,
    onClose,
    onSave,
    showModal,
    title,
  } = props

  const handleSave = () => {
    onSave()
    onClose()
  }

  return (
    showModal && (
      <div className={styles.modal} style={maxWidth ? { maxWidth } : undefined}>
        {/* header */}
        {title && (
          <>
            <h3 className={styles.header}>{title}</h3>{' '}
            <Divider variant="horizontal" />
          </>
        )}
        {!title && <Spacer size="xl" />}
        {/* content */}
        <div className={styles.content}>{content}</div>
        {/* buttons */}
        <Spacer size="md" />
        <Container
          flexDirection="row"
          justifyContent="space-around"
          padding="md"
        >
          <Button
            onClick={handleSave}
            label={buttonOneLabel}
            classname={cs([styles.modalButton, buttonOneClassname])}
          />
          <Button
            onClick={onClose}
            label={buttonTwoLabel}
            classname={cs([styles.modalButton, buttonTwoClassname])}
          />
        </Container>
        <button className={styles.closeButton} onClick={onClose}>
          <svg
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="2"
              y1="2"
              x2="14"
              y2="14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="14"
              y1="2"
              x2="2"
              y2="14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    )
  )
}
