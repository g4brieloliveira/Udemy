import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const FilterArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  margin-top: 1rem;

  button {
    background: none;
    border: none;

    &:focus{
      outline: none;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;

  border-bottom: 1px solid #20295f;

  margin-bottom: 20px;
  h1 {
    font-size: 1.3rem;
    color: #20295f;
    position: relative;
    top: 30px;

    background-color: white;
    padding: 0 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
  width: 100%;
  margin-bottom: 70px;

  a {
    text-decoration: none;
    color: black;
  }
`;