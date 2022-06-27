import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 50px;
  background: #20295f;

  border-top: 5px solid #ee6b26;

  position: fixed;
  bottom: 0;

  span {
    color: white;
    font-weight: 600;
  }
`