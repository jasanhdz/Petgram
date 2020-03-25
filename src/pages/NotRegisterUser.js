import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'

const descriptionRegister = 'Bienvenido a Petgram! ¿ya estas listo para aventurarte al mágico mundo de las mascotas?'

export const NotRegisterUser = () => (
  <Context.Consumer>
    {
      ({ isAuth, activateAuth }) => {
        return <UserForm title="Registrarse" description={descriptionRegister} onSubmit={activateAuth} />
      }
    }
  </Context.Consumer>
  // <h1>This is NotRegisterUser</h1>
)