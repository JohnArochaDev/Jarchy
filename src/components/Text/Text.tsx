// import styles from './styles.module.scss'

export type TextType =
  | 'p'
  | 'span'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'label'

export interface TextProps {
  value: string
  as?: TextType
}

export const Text = (props: TextProps) => {
  const { value, as: Tag = 'p' } = props

  return <Tag>{value}</Tag>
}
