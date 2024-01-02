import styled from "styled-components";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";
import { Link, useLocation } from "react-router-dom";
import { menuList } from "../../food/menuList";

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

  margin-right: 80px;

  h2 {
    font-size: 30px;
    width: 100%;
    margin-bottom: 30px;
    text-align: center;
    font-weight: 700;
  }
`;

const MenuTitle = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #dbdbdb;
  line-height: 50px;
  font-size: 20px;
  font-weight: 700;
  color: #333;
`;

const EatTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    width: 200px;
    text-align: center;
    margin: 10px auto;
    font-weight: 400;
    font-size: 20px;
  }

  p {
    margin-top: 10px;
    color: #c20000;
    opacity: 0.6;
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
  const foodName = useLocation();
  const choiceName = foodName.state.name;

  const findChoiceFood =
    choiceName === "한식"
      ? menuList[0].foodList
      : choiceName === "일식"
      ? menuList[1].foodList
      : choiceName === "중식"
      ? menuList[2].foodList
      : menuList[3].foodList;

  // console.log(findChoiceFood);

  return (
    <>
      <PageTitle titleName="상세페이지" />
      <Layout>
        <MenuListWrap>
          <MenuList>
            <h2>😘{choiceName}에서 나올 수 있는 메뉴💕</h2>
            <MenuTitle>
              {findChoiceFood.map((data, idx) => (
                <p key={idx}>{data}</p>
              ))}
            </MenuTitle>
          </MenuList>

          <EatTitle>
            <div>오늘은 "{choiceName}"</div>
            <FoodBtn>
              <Link to="/result" state={{ foodList: findChoiceFood }}>
                먹을래요!
              </Link>
            </FoodBtn>
            <p> &uarr; 위 버튼을 클릭하면 음식을 골라줘요!</p>
          </EatTitle>
        </MenuListWrap>
      </Layout>
    </>
  );
};
