import React from 'react'
import { Summary, FoodList, Details } from './MealCollapsableStyles';
import ListItem from '../ListItem';

const MealCollapsable = (props) => {
  return (
    <Details open>
      <Summary>{props.name}</Summary>
      <FoodList>
        {props.food.map(foodItem => (
          <ListItem
            key={`${props.name}${foodItem}`}
            id={`${props.name}${foodItem}`}
            text={foodItem}
          />
        ))}
      </FoodList>
    </Details>
  )
}

export default MealCollapsable
