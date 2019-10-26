import React from 'react'
import styled from 'styled-components'
import Theme from './components/ThemeContext';

const Title = styled.h1`
  background-color: ${props => props.theme.main}
`

const App = () => {
  const { toggleTheme }= React.useContext(Theme);
  return (
    <Title onClick={toggleTheme}>
      ASDF
    </Title>
  )
}

export default App
