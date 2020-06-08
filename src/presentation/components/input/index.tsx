import React from 'react'
import Styles from './styles.scss'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => (
  <div className={Styles.inputWrap}>
    <input {...props} />
    <span className={Styles.status}>{'\u{1F534}'}</span>
  </div>
)

export default Input
