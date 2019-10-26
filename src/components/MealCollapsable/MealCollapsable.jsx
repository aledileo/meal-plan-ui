import React from 'react'
import { Summary, FoodList, ListItem, Details } from './MealCollapsableStyles';

const MealCollapsable = (props) => {
  return (
    <Details open>
      <Summary>{props.name}</Summary>
      <FoodList>
        <ListItem>ASDF</ListItem>
        <ListItem>ASDF</ListItem>
        <ListItem>ASDF</ListItem>
      </FoodList>
    </Details>
  )
}

export default MealCollapsable
