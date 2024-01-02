import styled from "styled-components";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";
import { Link } from "react-router-dom";

const MenuListWrap = styled.div`
  width: 70vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
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
`;

const MenuImg = styled.div`
  width: 100px;
  height: 100px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &.MenuImg1 {
    background-image: url("https://cdn.discordapp.com/attachments/1071326637540524122/1191700869146759269/kr_food.png");
  }
  &.MenuImg2 {
    background-image: url("https://cdn.discordapp.com/attachments/1071326637540524122/1191700314252922920/jp_food.png");
  }
  &.MenuImg3 {
    background-image: url("https://cdn.discordapp.com/attachments/1071326637540524122/1191700314642980885/cn_food.png");
  }
  &.MenuImg4 {
    background-image: url("https://cdn.discordapp.com/attachments/1071326637540524122/1191700314437455932/w_food.png");
  }
`;

const MenuTitle = styled.div`
  width: 200px;
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
              <MenuImg className="MenuImg1" />
              <MenuTitle>한식</MenuTitle>
            </MenuList>
          </Link>
          <Link to="/sub" state={{ name: "일식" }}>
            <MenuList>
              <MenuImg className="MenuImg2" />
              <MenuTitle>일식</MenuTitle>
            </MenuList>
          </Link>
          <Link to="/sub" state={{ name: "중식" }}>
            <MenuList>
              <MenuImg className="MenuImg3" />
              <MenuTitle>중식</MenuTitle>
            </MenuList>
          </Link>
          <Link to="/sub" state={{ name: "양식" }}>
            <MenuList>
              <MenuImg className="MenuImg4" />
              <MenuTitle>양식</MenuTitle>
            </MenuList>
          </Link>
        </MenuListWrap>
      </Layout>
    </>
  );
};
