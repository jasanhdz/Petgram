import React, { useContext } from 'react'
import { Context } from '../Context'
import { LoginMutation } from '../containers/LoginMutation'
import { Login as LoginComponent } from '../components/Login'

export const Login = () => {
  const { activateAuth } = useContext(Context)
  const loginMutation = () => {
    return (
      <LoginMutation>
        {
          (login, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              login({ variables })
                .then(({ data }) => {
                  const { login } = data
                  activateAuth(login)
                })
            }
            const errorMsg = error && 'Error al iniciar sesión alguno de los campos es incorrecto'
            return (
              <LoginComponent
                disabled={loading}
                onSubmit={onSubmit}
                error={errorMsg}
              />
            )
          }
        }
      </LoginMutation>
    )
  }
  return (
    <Context.Consumer>
      {loginMutation}
    </Context.Consumer>
  )
}