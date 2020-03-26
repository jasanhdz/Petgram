import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Div, Container, Text, Error } from './styles'
import { Button } from '../SubmitButton/styles'
import { DogSvg } from '../Dog'
import { Link } from '@reach/router'

export const Login = ({ onSubmit, title, description, error, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <Container>
      <Div>
        <DogSvg />
      </Div>
      <h2 style={{ textAlign: 'center' }}>Iniciar sessión</h2>
      <Text>Inicia sesión para poder ver el mágico mundo de las mascotas</Text>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Input
          type='text'
          placeholder='Email'
          disabled={disabled}
          {...email}
        />
        <Input
          type='password'
          placeholder='Password'
          disabled={disabled}
          {...password}
        />
        <Button disabled={disabled}>Iniciar sesión</Button>
        <Text>¿No tienes una cuenta? <Link to='/register' style={{ color: 'blue' }}>Registrate</Link></Text>
      </Form>
      {error && <Error>{error}</Error>}
    </Container>
  )
}