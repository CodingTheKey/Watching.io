import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;

  border: 2px solid transparent;

  transition: all 0.3s;

  img {
    width: 100%;
  }

  .movieInfo {
    position: absolute;
    bottom: 15px;
    left: 12px;
    z-index: 1;
  }

  p {
    margin-bottom: 5px;
    color: ${({ theme }) => theme.colors.gray150};
    font-weight: 500;
  }

  time {
    color: ${({ theme }) => theme.colors.gray500};
    font-size: 14px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: ${({ theme }) => theme.colors.darkRed};
    width: 58px;
    height: 58px;
    border-radius: 50%;

    z-index: 1;

    visibility: hidden;

    svg {
      font-size: 2.3rem;
      color: ${({ theme }) => theme.colors.white};
      margin-left: 0.25rem;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      179.95deg,
      rgba(0, 0, 0, 0) 0.05%,
      #000000 150.1%
    );
    z-index: 1;
  }

  &:hover {
    cursor: pointer;

    border: 2px solid ${({ theme }) => theme.colors.darkRed};

    button {
      visibility: visible;
    }
  }
`;
