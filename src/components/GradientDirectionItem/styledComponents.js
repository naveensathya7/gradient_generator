// Style your elements here
import styled from 'styled-components/macro'

export const DirectionListItem = styled.li`
  margin-top: 10px;
  margin-right: 10px;
  width: 200px;
  list-style-type: none;
  @media screen and(min-width:768px) {
    width: 24%;
  }
`

export const DirectionButtonItem = styled.button`
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  color: ${props => (props.isActive ? '#334155' : ' #1e293b')};
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  background-color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  border-radius: 6px;
  border: none;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  margin-bottom: 10px;
  outline: none;
  cursor: pointer;
`
