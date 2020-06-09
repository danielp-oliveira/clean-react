import React, { useState } from 'react'
import Styles from './styles.scss'
import {
  Footer,
  FormStatus,
  Input,
  LoginHeader as Header
} from '@/presentation/components'
import { FormContext as Context } from '@/presentation/contexts'

const Login: React.FC = () => {
  const [state] = useState({
    isLoading: false,
    emailError: 'Campo obrigatório',
    passwordError: 'Campo obrigatório'
  })

  const [errorState] = useState({
    email: 'Campo obrigatório',
    password: 'Campo obrigatório',
    main: ''
  })

  return (
    <div className={Styles.login}>
      <Header />
      <Context.Provider value={{ state, errorState }}>
        <form className={Styles.form}>
          <h2>Login</h2>
          <Input type='email' name='email' placeholder='Digite seu e-mail' />
          <Input
            type='password'
            name='password'
            placeholder='Digite sua senha'
          />
          <button
            data-testid='submit'
            disabled
            className={Styles.submit}
            type='submit'
          >
            Entrar
          </button>
          <span className={Styles.link}>Criar conta</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Login
