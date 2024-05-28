import styled from "styled-components";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";
import { Link } from "react-router-dom";

const MenuListWrap = styled.div`
  width: 85vw;
  height: 100%;
  align-items: center;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 30px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const MenuList = styled.div`
  height: 25vh;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #dbdbdb;
  border-radius: 20px;
  box-shadow: 5px 8px 10px rgba(0, 0, 0, 0.06);

  &:hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 1024px) {
    height: 20vh;
  }
`;

const MenuImg = styled.div`
  img {
    display: block;
    margin: 10px auto;
  }
`;

const MenuTitle = styled.div`
  text-align: center;
  margin-top: 25px;
  font-weight: 700;
  font-size: 20px;
`;

export const Main = () => {
  return (
    <>
      <PageTitle titleName="메인페이지" />
      <Layout>
        <MenuListWrap>
          <Link to="/sub" state={{ name: "한식" }}>
            <MenuList>
              <MenuImg>
                <img
                  src={process.env.PUBLIC_URL + "/img/kr_food.png"}
                  alt="한식 아이콘"
                />
              </MenuImg>
              <MenuTitle>한식</MenuTitle>
            </MenuList>
          </Link>
          <Link to="/sub" state={{ name: "일식" }}>
            <MenuList>
              <MenuImg>
                <img
                  src={process.env.PUBLIC_URL + "/img/jp_food.png"}
                  alt="일식 아이콘"
                />
              </MenuImg>
              <MenuTitle>일식</MenuTitle>
            </MenuList>
          </Link>
          <Link to="/sub" state={{ name: "중식" }}>
            <MenuList>
              <MenuImg>
                <img
                  src={process.env.PUBLIC_URL + "/img/cn_food.png"}
                  alt="중식 아이콘"
                />
              </MenuImg>
              <MenuTitle>중식</MenuTitle>
            </MenuList>
          </Link>
          <Link to="/sub" state={{ name: "양식" }}>
            <MenuList>
              <MenuImg>
                <img
                  src={process.env.PUBLIC_URL + "/img/w_food.png"}
                  alt="양식 아이콘"
                />
              </MenuImg>
              <MenuTitle>양식</MenuTitle>
            </MenuList>
          </Link>
        </MenuListWrap>
      </Layout>
    </>
  );
};
