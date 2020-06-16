import React from 'react'
import { makeLoginValidation } from './login-validation-factory'
import { makeRemoteAuthentication } from '@/main/factories/usercases/authentication/remote-authentication-factory'
import { Login } from '@/presentation/pages'

export const makeLogin: React.FC = () => (
  <Login
    authentication={makeRemoteAuthentication()}
    validation={makeLoginValidation()}
  />
)
