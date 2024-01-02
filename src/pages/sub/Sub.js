import styled from "styled-components";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";
import { Link } from "react-router-dom";

const MenuListWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuList = styled.div`
  margin-right: 80px;
`;

const MenuTitle = styled.div`
  width: 200px;
  background-color: #909090;
  line-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const EatTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    width: 200px;
    text-align: center;
    margin: 20px auto;
    font-weight: 400;
    font-size: 20px;
  }
`;

const FoodBtn = styled.button`
  all: unset;
  background-color: #dbdbdb;
  text-align: center;
  width: 300px;
  line-height: 60px;
  border: 1px solid #dbdbdb;
  border-radius: 30px;
  cursor: pointer;
  font-size: 30px;
  font-weight: 500;

  &:hover {
    opacity: 0.7;
  }
`;

export const Sub = () => {
  return (
    <>
      <PageTitle titleName="상세페이지" />
      <Layout>
        <MenuListWrap>
          <MenuList>
            <MenuTitle>
              <p>메뉴</p>
              <p>메뉴</p>
              <p>메뉴</p>
              <p>메뉴</p>
              <p>메뉴</p>
            </MenuTitle>
          </MenuList>

          <EatTitle>
            <div>오늘은 "한식"</div>
            <FoodBtn>
              <Link to="/result">먹을래요!</Link>
            </FoodBtn>
          </EatTitle>
        </MenuListWrap>
      </Layout>
    </>
  );
};
