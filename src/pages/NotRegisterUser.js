import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../containers/RegisterMutation'

const descriptionRegister = 'Bienvenido a Petgram! ¿ya estas listo para aventurarte al mágico mundo de las mascotas?'

export const NotRegisterUser = () => (
  <Context.Consumer>
    {
      ({ isAuth, activateAuth }) => {
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
                return <UserForm
                  disabled={loading}
                  title='Registrarse'
                  description={descriptionRegister}
                  onSubmit={onSubmit}
                  error={errorMsg}
                />
              }
            }
          </RegisterMutation>
        )
      }
    }
  </Context.Consumer>
)