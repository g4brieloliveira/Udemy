import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;


export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: #EE6B26;
    margin: 0;
  }

  p {
    color: #20295f;
    margin: 0;

  }
`;


export const QRCodeArea = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  margin: 1.2rem 0;
`;


export const ValidationCode = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;

  span {
    font-weight: 500;
  }

  .inputarea {
    width: 100%;

    input {
      font-size: 15px;
      padding: 10px;
      border: 1px solid black;
      border-right: none;
      border-radius: 5px 0 0 5px;

      &:focus{
      outline: none;
      }
    }

    button {
      font-size: 15px;
      background-color: #EE6B26;
      padding: 10px;
      border: 1px solid black;
      border-left: none;
      border-radius: 0 5px 5px 0;

      cursor: pointer;
      transition: all ease .3s;

      &:focus{
      outline: none;
      }

      &:hover {
        background-color: #EE6B26cc;
      }

      p {
        all: unset;
      }
    }
  }
`;