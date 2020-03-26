import styled from 'styled-components'

export const Form = styled.form`
  padding: 16px 0;
  width: 90%;
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  outline: 0;
  font-size: 1.1em;
  &[disabled] {
    opacity: .3;
  }

`

export const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 20px;
`
export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 80vh;
  height: 100%;
  align-items: center;
  flex-direction: column;
`

export const Img = styled.img`
  width: 200px;
  height: 200px;
`

export const Text = styled.p`
  margin-top: 20px;
  width: 90%;
  text-align: center;
`

export const Error = styled.span`
  font-size: 14px;
  color: red;
`