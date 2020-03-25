import React from 'react'
import Context from '../Context'
import { RegisterMutation } from '../containers/RegisterMutation'
import { Register } from '../components/Register'
import { LoginMutation } from '../containers/LoginMutation'
import { Login } from '../components/Login'

export const NotRegisterUser = () => (
  <Context.Consumer>
    {/* {registerMutation} */}
    {loginMutation}
  </Context.Consumer>
)

const loginMutation = ({ isAuth, activateAuth }) => {
  return (
    <LoginMutation>
      {
        (login, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            login({ variables })
              .then(activateAuth)
          }
          const errorMsg = error && 'Error al iniciar sesión alguno de los campos es incorrecto'
          return (
            <Login
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

const registerMutation = ({ isAuth, activateAuth }) => {
  return (
    <RegisterMutation>
      {
        (register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            register({ variables })
              .then(activateAuth)
          }
          const errorMsg = error && 'El usuario ya existe o hay algún problema'
          return <Register
            disabled={loading}
            onSubmit={onSubmit}
            error={errorMsg}
          />
        }
      }
    </RegisterMutation>
  )
}