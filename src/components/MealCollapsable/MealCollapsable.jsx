import React from 'react'
import {
  Summary,
  FoodList,
  Details,
  CompletedText,
  FoodListContainer
} from './MealCollapsableStyles';
import ListItem from '../ListItem';
import Button from '../Button';

const MealCollapsable = (props) => {
  return (
    <Details open>
      <Summary>{props.name}</Summary>
      {/* <CompletedText>Completed!</CompletedText> */}
      <FoodListContainer>
        <FoodList>
          {props.food.map(foodItem => (
            <ListItem
              key={`${props.name}${foodItem}`}
              id={`${props.name}${foodItem}`}
              text={foodItem}
            />
          ))}
        </FoodList>
        <Button>
          Refresh Meal
        </Button>
      </FoodListContainer>
    </Details>
  )
}

export default MealCollapsable
