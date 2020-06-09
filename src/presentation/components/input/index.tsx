import React from 'react'
import Styles from './styles.scss'

type Props = React.DetailedHTMLProps<
React.InputHTMLAttributes<HTMLInputElement>,
HTMLInputElement
>

const Input: React.FC<Props> = (props: Props) => {
  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }

  return (
    <div className={Styles.inputWrap}>
      <input autoComplete='off' {...props} readOnly onFocus={enableInput} />
      <span className={Styles.status}>{'\u{1F534}'}</span>
    </div>
  )
}

export default Input
