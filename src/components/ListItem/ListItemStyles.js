import styled, { keyframes } from 'styled-components'

export const ListItemContainer = styled.li`
  padding: 8px 4px;
  display: flex;
  align-items: center;
`

export const Checkbox = styled.input`
  margin-right: 16px;
`

export const ListItemText = styled.label`
  display: inline-block;
  cursor: pointer;
	position: relative;
  transition: all 0.2s cubic-bezier(.55, 0, .1, 1);
  ${props => !props.isCompleted ? `
    &:after {
      transform: scaleX(0);
	    transform-origin: center right;
    }
  `: `
    color: #616161;
    opacity: 0.61;
  `}
  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 1px;
    margin-top: -0.7em;
    background: #616161;
    transform-origin: center left;
    animation: ${strikethrough} 1s 0.2s cubic-bezier(.55, 0, .1, 1) 1;
    transition: transform 0.2s cubic-bezier(.55, 0, .1, 1);
  }
`

/* Keyframes for initial animation */
const strikethrough = keyframes`
  from {
		transform: scaleX(0);
  }
	to {
		transform: scaleX(1);
  }
`