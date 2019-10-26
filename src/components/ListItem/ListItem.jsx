import React from 'react'
import { ListItemContainer, Checkbox, ListItemText } from './ListItemStyles';

const ListItem = (props) => {
  const [isCompleted, setCompleted] = React.useState(false)
  const completeItem = () => setCompleted(prevState => !prevState);

  return (
    <ListItemContainer>
      <Checkbox id={props.id} type='checkbox' onChange={completeItem}/>
      <ListItemText htmlFor={props.id} isCompleted={isCompleted}> 
        {props.text}
      </ListItemText>
    </ListItemContainer>
  )
}

export default ListItem
