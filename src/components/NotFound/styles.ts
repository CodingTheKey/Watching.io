import styled from "styled-components";

export const NotFoundContainer = styled.main`
  max-width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
`;

export const ContentNotFound = styled.section`
  max-width: 600px;

  h1 {
    font-size: 2rem;

    margin-bottom: 2.188rem;
  }

  h2 {
    margin-bottom: 2.5rem;
    font-size: 1.5rem;
    font-weight: medium;
  }

  h3 {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    font-weight: medium;
  }

  ul {
    list-style-type: disc;
    font-size: 1.3rem;
    font-weight: medium;

    li::marker {
      color: red;
      font-size: 1.3em;
    }

    li + li {
      padding-top: 21px;
    }

    a {
      color: ${({ theme }) => theme.colors.white};
      cursor: pointer;
      transition: ease 0.2s;

      :hover {
        color: ${({ theme }) => theme.colors.red};
      }
    }
  }
`;
