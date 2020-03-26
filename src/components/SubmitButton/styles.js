import styled from 'styled-components'

export const Button = styled.button`
background-color: #8d00ff;
border-radius: 3px;
color: #fff;
height: 32px;
display: block;
width: 100%;
font-size: 1.1em;
text-align: center;
&[disabled] {
  opacity: .3;
}
`