import styled, { keyframes } from 'styled-components'

// const detailsKeyframe = keyframes`
//   0% {
//       opacity: 0;
//       transform: translateY(-1.25em);
//   }
//   100% {
//       opacity: 1;
//       transform: translateY(0);
//   }
// `

export const Details = styled.details`
  background-color: ${props => props.theme.main}88;
  border-radius: 0.25em;
  margin-bottom: 2em;
    /* animation-name: ${detailsKeyframe};
    animation-duration: 0.5s;
  & [open] ~ *: {
  } */
  /* transition: all 0.3s ease-out; */
`

export const Summary = styled.summary`
  padding: 16px;
`

export const FoodList = styled.ul`
  margin: 0px;
  list-style: none;
  padding: 8px 32px;
`

export const ListItem = styled.li`
  padding: 8px 4px;
`