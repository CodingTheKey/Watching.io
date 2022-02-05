import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1420px;
  width: 100%;
  margin: 114px auto 0;

  h1 {
    position: relative;
    font-size: 2.625rem;
    width: fit-content;

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;

      background-color: ${({ theme }) => theme.colors.red};

      width: 100%;
      height: 2px;
      border-radius: 1px;
    }
  }
`;

export const AvailableMovies = styled.section`
  margin-top: 50px;

  display: grid;
  grid-template-columns: repeat(5, 190px);
  justify-content: space-between;
`;
