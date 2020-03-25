import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'

export const NotRegisterUser = () => (
  <Context.Consumer>
    {
      ({ isAuth, activateAuth }) => {
        return <UserForm onSubmit={activateAuth} />
      }
    }
  </Context.Consumer>
  // <h1>This is NotRegisterUser</h1>
)