import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;
export const Button = styled.button`
  cursor: pointer;
  border-radius: 5px;
  outline: none;

  border: 1px solid black;
  margin-left: 5px;
  padding: 3px;
  :active {
    background-color: #5f5ffc;
  }
`;
