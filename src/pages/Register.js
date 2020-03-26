import React, { useContext } from 'react'
import { Context } from '../Context'
import { RegisterMutation } from '../containers/RegisterMutation'
import { Register as RegisterComponent } from '../components/Register'
import { Layout } from '../components/Layout'

export const Register = () => {
  const { activateAuth } = useContext(Context)
  const registerMutation = () => {
    return (
      <RegisterMutation>
        {
          (register, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              register({ variables })
                .then(({ data }) => {
                  const { signup } = data
                  activateAuth(signup)
                })
            }
            const errorMsg = error && 'El usuario ya existe o hay algún problema'
            return <RegisterComponent
              disabled={loading}
              onSubmit={onSubmit}
              error={errorMsg}
            />
          }
        }
      </RegisterMutation>
    )
  }

  return (
    <Layout title='Registrarse'>
      <Context.Consumer>
        {registerMutation}
      </Context.Consumer>
    </Layout>
  )
}