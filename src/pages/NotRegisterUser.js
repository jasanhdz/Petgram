import React from 'react'
import Context from '../Context'

export const NotRegisterUser = () => (
  <Context.Consumer>
    {
      ({ isAuth, activateAuth }) => {
        return (
          <form onSubmit={activateAuth}>
            <button>Iniciar sessión</button>
          </form>
        )
      }
    }
  </Context.Consumer>
  // <h1>This is NotRegisterUser</h1>
)