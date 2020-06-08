import React from 'react'
import Styles from './styles.scss'
import { Spinner } from '..'

const FormStatus: React.FC = () => (
  <div className={Styles.errorWrap}>
    <Spinner className={Styles.spinner} />
    <span className={Styles.error}>Erro</span>
  </div>
)

export default FormStatus
