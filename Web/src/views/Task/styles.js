import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;

  width: 100%;
`;

export const Form = styled.div`
  width: 50%;

  #timeDate {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .time,
    .date{
      width: 40%;
    }
  }
`;


export const Content = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center; 
`;

export const TypeIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;

  .inative{
    opacity: 0.5;
  }

  button {
    background: none;
    border: none;

    &:focus {
      outline: none;
    }
  }

  img {
    width: 50px;
    margin: 5px;
    cursor: pointer;

    transition: all ease .3s;

    &:hover{
      opacity: 0.7;
      transform: scale(1.05);
    }
  } 
`;

export const Input = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 15px 0;

  span{
    color: #707070;
    margin-bottom: 5px;
    font-size: 18px;
    font-weight: 600;
  }

  input {
    font-size: 16px;
    padding: 7px;
    border: none;
    border-bottom: 1px solid #ee6b26;

    &:focus {
      outline: none;
    }
  }
`;

export const TextArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 15px 0;

  span{
    color: #707070;
    margin-bottom: 5px;
    font-size: 18px;
    font-weight: 600;
  }

  textarea {
    font-size: 16px;
    padding: 5px;
    border: 1px solid #ee6b26;
    border-radius: 4px;

    &:focus {
      outline: none;
    }
  }
`;

export const Options = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    color: #ee6b26; 
    font-weight: bold;
    font-size: 16px;

    input {
      opacity: 1  ;
      cursor: pointer;
      height: 20px;
      width: 20px;
      background-color: #ee6b26;
      margin-right: 5px;
    }
  }

  button {
    font-weight: bold;
    color: #20295f;
    border: none;
    background: none;
    cursor: pointer;
    font-size: 16px;

    transition: all ease .3s;

    &:hover {
      transform: scale(0.9);
      opacity: 0.7;
    }

    &:focus {
      outline: none;
    }
  }
`

export const Save = styled.div`
  width: 100%;
  margin-top: 15px;

  button {
    width: 100%;
    padding: 10px 0;
    border: none;
    background-color: #ee6b26;
    color: white;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    transition: all ease .3s;

    &:hover {
      opacity: 0.8;
    }
  }
`