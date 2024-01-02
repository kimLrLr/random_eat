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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MenuImg = styled.div`
  width: 350px;
  height: 350px;
  background-color: #909090;
`;

const MenuTitle = styled.div`
  width: 200px;
  text-align: center;
  margin: 20px auto;
  font-weight: 700;
  line-height: 30px;

  h3 {
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

export const Result = () => {
  return (
    <>
      <PageTitle titleName="메인페이지" />
      <Layout>
        <MenuListWrap>
          <MenuList>
            <MenuImg />
            <MenuTitle>
              <div>
                오늘은
                <h3>"고등어 백반"</h3>
                먹을래요!
              </div>
            </MenuTitle>
            <FoodBtn>
              <Link to="/">다시 고르기</Link>
            </FoodBtn>
          </MenuList>
        </MenuListWrap>
      </Layout>
    </>
  );
};
