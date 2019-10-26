import React from 'react'
import styled from 'styled-components'
import Title from '../Title';
import Meals from '../Meals';

const AppContainer = styled.div`
  font-family: ${props => props.theme.font};
  color: ${props => props.theme.textColor};
`

const App = () => {
  return (
    <AppContainer>
      <Title />
      <Meals />
    </AppContainer>
  )
}

export default App
