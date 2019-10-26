import React from 'react'
import { Meals } from './MealsStyles';
import MealCollapsable from '../MealCollapsable';

const mockData = {
  'Breakfast': [
    'Food 1',
    'Food 2',
    'Food 3'
  ],
  'Lunch': [
    'Food 4',
    'Food 5',
    'Food 6',
  ]
}

const MealsContainer = () => {
  return (
    <Meals>
      {
        Object.keys(mockData).map(meal => (
          <MealCollapsable
            name={meal}
            food={mockData[meal]}
            key={meal}
          />
        ))
      }
    </Meals>
  )
};

export default MealsContainer;
