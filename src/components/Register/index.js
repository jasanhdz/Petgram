import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Div, Container, Text, Error } from './styles'
import { SubmitButton } from '../SubmitButton'
import { Link } from '@reach/router'
import Lottie from 'react-lottie'
import * as dogAnimationData from '../../assets/dog.json'

const dogAnimationOptions = {
  loop: true,
  autoplay: true,
  animationData: dogAnimationData.default
}

export const Register = ({ onSubmit, error, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <Container>
      <Lottie options={dogAnimationOptions} height={200} width={300} />
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