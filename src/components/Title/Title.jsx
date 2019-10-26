import React from 'react'
import Theme from '../ThemeContext';
import { getFormattedDate } from '../../helpers';
import { Title } from './TitleStyles';

const TitleContainer = () => {
  const { toggleTheme }= React.useContext(Theme);
  return (
    <Title onClick={toggleTheme}>
      {getFormattedDate()}
    </Title>
  )
}

export default TitleContainer;
