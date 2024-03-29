import styled from "styled-components";

const Wrap = styled.div`
  background-color: #dbdbdb;
`;
const Container = styled.footer`
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Copy = styled.h3`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;

export const Footer = () => {
  return (
    <Wrap>
      <Container>
        <Copy>copyright &copy; 2024 kimLrLr</Copy>
      </Container>
    </Wrap>
  );
};
