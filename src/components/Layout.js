import styled from "styled-components";

const Container = styled.div`
  height: 65vh;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};
