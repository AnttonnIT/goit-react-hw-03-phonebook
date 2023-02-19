import styled from '@emotion/styled';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid black;
  width: 350px;
  padding: 10px;
`;
export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  gap: 5px;
`;
export const StyledButton = styled.button`
  width: 100px;
  cursor: pointer;
  border-radius: 5px;
  outline: none;
  border: 1px solid black;

  padding: 3px;

  :active {
    background-color: #5f5ffc;
  }
`;
