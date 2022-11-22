import styled from "styled-components";

export const Ul = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  li {
    width: 298px;
    height: 374px;
    border-radius: var(--radius-02);
    border: 3px solid var(--grey-2);
    overflow: hidden;
  }

  img {
    background-color: var(--grey-1);
    width: 50%;
    height: 50%;
  }
  .fig-img {
    background-color: var(--grey-1);
    display: flex;
    justify-content: center;
  }
  .div-description {
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
  h2 {
    margin-top: 10px;
    font-size: var(--font-size-2);
  }
  p {
    margin-top: 20px;
    margin-bottom: 20px;
    color: var(--grey-3);
    font-size: var(--font-size-2);
  }
  span {
    margin-bottom: 20px;
    color: var(--color-primary);
    font-size: var(--font-size-2);
  }
  button {
    width: 104px;
    height: 40px;
    background-color: var(--color-primary);
    color: white;
    font-weight: 600;
    border: none;
    border-radius: var(--radius-02);
  }
  @media (max-width: 800px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    width: 100vw;
    overflow-y: scroll;
    display: -webkit-box;
    margin-left: 22px;
  }
`;
