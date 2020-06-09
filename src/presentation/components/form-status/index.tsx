import React, { useContext } from 'react'
import Styles from './styles.scss'
import { Spinner } from '..'
import { FormContext as Context } from '@/presentation/contexts'

const FormStatus: React.FC = () => {
  const { state, errorState } = useContext(Context)

  return (
    <div data-testid='error-wrap' className={Styles.errorWrap}>
      {state.isLoading && <Spinner className={Styles.spinner} />}
      {errorState.main && <span className={Styles.error}>{errorState.main}</span>}
    </div>
  )
}

export default FormStatus
