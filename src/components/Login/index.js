import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Div, Container, Text, Error } from './styles'
import { Button } from '../SubmitButton/styles'
import { Link } from '@reach/router'
import Lottie from 'react-lottie'
import * as dogAnimationData from '../../assets/dog.json'

const dogAnimationOptions = {
  loop: true,
  autoplay: true,
  animationData: dogAnimationData.default
}

export const Login = ({ onSubmit, title, description, error, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <Container>
      <Lottie options={dogAnimationOptions} height={200} width={300} />
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