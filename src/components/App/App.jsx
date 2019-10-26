import React from 'react'
import styled from 'styled-components'
import Title from '../Title';

const AppContainer = styled.div`
  font-family: ${props => props.theme.font};
`

const App = () => {
  return (
    <AppContainer>
      <Title />
    </AppContainer>
  )
}

export default App
