import styled from 'styled-components'

export const StyledTaskListFrame = styled.div`
  width: 100%;
`

export const StyledClickableLabel = styled.td`
  color: darkblue;
  &:hover {
    font-size: 15px;
    color: blue;
  }
  &:active {
    font-size: 14px;
    color: darkblue;
  }
`