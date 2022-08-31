import styled from "styled-components";

export const Main = styled.main`
  width: 100vw;
  height: 100vh;

  background-color: ${(props) => props.theme.primaryGray};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;

`;
