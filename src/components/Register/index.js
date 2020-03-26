import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Div, Container, Text, Error } from './styles'
import { SubmitButton } from '../SubmitButton'
import { DogSvg } from '../Dog'
import { Link } from '@reach/router'

export const Register = ({ onSubmit, error, disabled }) => {
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
      <h2 style={{ textAlign: 'center' }}>Registrarse</h2>
      <Text>Bienvenido a Petgram! ¿ya estas listo para aventurarte al mágico mundo de las mascotas?</Text>
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
        <SubmitButton disabled={disabled} >Registrarse</SubmitButton>
        <Text>¿Ya tienes una cuenta? <Link to='/login' style={{ color: 'blue' }}>Iniciar sessión</Link></Text>
      </Form>
      {error && <Error>{error}</Error>}
    </Container>
  )
}