import styled from 'styled-components'

export const Button = styled.button`
  border: 0px;
  border-radius: 0.25em;
  background-color: ${props => props.theme.main};
  color: #FFF;
  width: 80%;
  min-height: 2em;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`