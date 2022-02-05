import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.header};

  header {
    max-width: 1420px;
    width: 100%;
    height: 80px;
    display: flex;
    margin: 0 auto;
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
          padding-bottom: 0.2rem;
          border-bottom: 3px solid ${({ theme }) => theme.colors.red};
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
    gap: 9px;

    .notification {
      position: relative;
      color: ${({ theme }) => theme.colors.white};

      div {
        background-color: ${({ theme }) => theme.colors.red};
        position: absolute;
        right: 0;
        top: -2px;
        border-radius: 50%;
        width: 15px;
        height: 15px;
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
