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
        font-size: 1.1rem;
        cursor: pointer;

        margin: 0 1.25rem;
        transition: filter 0.2s;

        &.active {
          padding-bottom: 0.1rem;
          border-bottom: 3px solid ${({ theme }) => theme.colors.red};
          transition: ease 0.8s;
        }

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

    .notification {
      display: flex;

      .notification-counter {
        width: 18px;
        height: 18px;
        text-align: center;
        border-radius: 99999px;

        position: relative;
        right: 20px;
        bottom: 6px;

        background-color: ${({ theme }) => theme.colors.red};

        font-size: 0.864rem;
      }
    }

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
