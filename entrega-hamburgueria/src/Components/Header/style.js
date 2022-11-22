import styled from "styled-components";

export const Nav = styled.header`
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: var(--grey-1);
  padding-bottom: 10px;
  padding-top: 10px;

  .nav {
    display: flex;
    justify-content: space-between;
    height: 80px;
    align-items: center;
    width: 1400px;
  }
  .img-header {
    width: 150px;
    height: 23px;
  }
  @media (max-width: 800px) {
    padding: 30px;
    .img-header {
      margin-bottom: 10px;
    }
    .nav {
      flex-direction: column;
    }
  }
`;
