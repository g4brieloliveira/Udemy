import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  margin-top: 80px;

  width: 12.5rem;
  height: 2rem;
  padding: 20px;

  border-radius: 5px;

  background: ${props => props.actived ? '#ee6b26' :  '#20295f' };
  cursor: pointer;

  transition: all ease .4s;

  img{
    width: 22px;
    height: 22px;
  }

  span {
    color: white;
    font-weight: 700;
    align-self: flex-end;
  }

  &:hover{
    background-color: rgb(238, 107, 38, 0.8);
  }
`

