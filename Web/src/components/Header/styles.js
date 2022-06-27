import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  width: 100%;
  height: 70px;
  background: #20295f;

  border-bottom: 5px solid #ee6b26;

  position: fixed;
  top: 0;
  z-index: 2;
`

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 50%;
  height: 70px;
  padding-left: .5rem;

  a{
    width: 6rem;
  }

  img {
    width: 100%;
  }
`

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 50%;
  height: 70px;

  a, button {
    margin: 0 10px;

    color: white;
    font-weight: bold;
    font-family: 'Rajdhani', sans-serif;
    font-size: 16px;
    text-align: center;

    text-decoration: none;
    text-transform: uppercase;

    background-color: transparent;

    border: 0;

    transition: all ease .2s;

    cursor: pointer;


    &:hover{
    transform: scale(1.06);
    color: #ee6b26;
    }

    &:focus {
      outline: none;
    }
  }  

  #notification {
    background: none;
    border: none;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    img {
      width: 20px;
    }

    span {
      padding: 0 6px;

      background-color: white;
      border-radius: 50%;

      color: #ee6b26;

      position: relative;
      top: -20px;
      right: 10px;
    }

    &:hover{
      transform: scale(1.1);
      opacity: 0.9;
    }
  }

  .divider::after {
    content: "|";
    margin: 0 10px;
    color: white;
  }
`