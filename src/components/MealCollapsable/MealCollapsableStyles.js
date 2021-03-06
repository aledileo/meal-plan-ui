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
  background-color: ${props => props.theme.alternativeBackground}88;
  border-radius: 0.25em;
  margin-bottom: 2em;
  /* padding-bottom: 2em; */
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
  padding: 0px 32px 16px 32px;
`

export const CompletedText = styled.span`
  position: relative;
  top: -2.2em;
  left: 17em;
`

export const FoodListContainer = styled.div`
  padding-bottom: 16px;
`