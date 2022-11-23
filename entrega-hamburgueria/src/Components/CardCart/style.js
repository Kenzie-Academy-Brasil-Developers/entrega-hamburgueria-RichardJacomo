import styled from "styled-components";

export const LiCart = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  .img-card {
    width: 77px;
    border-radius: var(--radius-02);
    background-color: var(--grey-2);
  }
  .div-global-card {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .div-description-card {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
  .div-description-card > h2 {
    font-size: var(--font-size-3);
    margin-bottom: 10px;
  }
  .div-description-card > p {
    color: var(--grey-3);
  }
  .div-button-card {
    padding-top: 8px;
  }
  .div-button-card > button {
    background-color: var(--grey-1);
    border: none;
    color: var(--grey-3);
  }
`;
