import styled from "styled-components";

const HeadLogo = styled.div`
  height: 25vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #dbdbdb;
`;

export const Header = () => {
  return (
    <>
      <HeadLogo>
        <img
          src={process.env.PUBLIC_URL + `/img/logo.png`}
          alt="밥묵다 로고 이미지"
        />
      </HeadLogo>
    </>
  );
};
