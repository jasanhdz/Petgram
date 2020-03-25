import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Div, Container, Text, Error } from './styles'
import { DogSvg } from '../Dog'
import { Link } from '@reach/router'

export const UserForm = ({ onSubmit, title, description, error, disabled }) => {
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
      <h2 style={{ textAlign: 'center' }}>{title}</h2>
      <Text>{description}</Text>
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
        <Button disabled={disabled}>{title}</Button>
        <Text>¿No tienes una cuenta? <Link to='/register' style={{ color: 'blue' }}>Registrate</Link></Text>
      </Form>
      {error && <Error>{error}</Error>}
    </Container>
  )
}