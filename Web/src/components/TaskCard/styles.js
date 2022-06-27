
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 250px;
  height: 180px;
  padding: .5rem;

  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.7);
  border-radius: 8px;

  margin: 15px;
  cursor: pointer;
  transition: all ease .3s;

  opacity: ${ props => props.done ? 0.5 : 1} ;

  &:hover{
    opacity: 0.7;
  }
`

export const TopCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 70px;
  }

  h1 {
    font-size: 1.4rem;
  }
`

export const BottomCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;

  strong {
    color: #EE6B26;
    font-weight: bold;
  }

  span {
    color: #707070;
    font-weight: 500;
  }
`