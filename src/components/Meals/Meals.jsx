import React from 'react'
import { Meals } from './MealsStyles';
import MealCollapsable from '../MealCollapsable';

const MealsContainer = () => {
  return (
    <Meals>
      {
        [{name: 'Breakfast'}, {name: 'Lunch'}].map(meal => (
          <MealCollapsable name={meal.name} key={meal.name}/>
          )
        )
      }
    </Meals>
  )
};

export default MealsContainer;
