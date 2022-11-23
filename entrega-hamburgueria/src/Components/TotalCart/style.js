import styled from "styled-components";

export const DivTotal = styled.div`
  border-top: 3px solid var(--grey-2);
  display: flex;
  flex-direction: column;
  align-items: center;
  .div-total {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    margin-bottom: 20px;
  }
  .title-total {
    font-size: var(--font-size-2);
  }
  .value-total {
    font-size: var(--font-size-2);
    color: var(--grey-3);
  }
`;

export const ButtonCart = styled.button`
  background-color: var(--grey-3);
  border: none;
  width: 94%;
  height: 60px;
  background-color: var(--grey-2);
  color: var(--grey-3);
  font-size: var(--font-size-4);
  font-weight: 600;
  border-radius: var(--radius-02);
`;
