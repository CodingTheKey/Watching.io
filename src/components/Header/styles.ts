import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.header};

  header {
    max-width: 100%;
    height: 80px;
    display: flex;
    margin: 0 8.125rem;
    justify-content: space-between;
    align-items: center;
  }

  nav {
    ul {
      display: flex;

      li {
        font-size: 1rem;
        cursor: pointer;

        margin: 0 1.25rem;
        transition: filter 0.2s;

        :hover {
          filter: brightness(0.9);
        }
      }
    }
  }

  .header-end {
    display: flex;
    align-items: center;

    svg {
      margin: 0 5px;
      cursor: pointer;
    }

    // eu ja vou arrumar essa poha ai é que eu estou nervoso agora
    /* #notification {
      width: 15px;
      height: 15px;
      position: absolute;
      cursor: pointer;

      top: 23px;
      right: 209px;

      font-size: 0.563rem;
      font-weight: medium;
      text-align: center;

      border-radius: 999px;
      background: ${({ theme }) => theme.colors.red};
    } */

    .border-user {
      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;

      margin-left: 0.5rem;
      padding: 0.2rem;

      border-radius: 999999px;
      border: 2.5px solid ${({ theme }) => theme.colors.red};
    }
  }
`;
