import styled from "styled-components";

export const Form = styled.form`
  width: 365px;
  height: 60px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--grey-2);
  border-radius: var(--radius-02);

  .inputSearch {
    width: 245px;
    height: 57px;
    border: none;
    padding-left: 10px;
  }
  .inputSearch {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
  .buttonSearch {
    width: 107px;
    height: 40px;
    background-color: var(--color-primary);
    border-radius: var(--radius-02);
    border: none;
    color: white;
    font-weight: 600;
  }
`;
