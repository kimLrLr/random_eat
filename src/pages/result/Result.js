import styled from "styled-components";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";
import { Link, useLocation } from "react-router-dom";
import { foodInfo } from "../../food/foodInfo";

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

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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
  const foodList = useLocation();
  const choiceFood = foodList.state.foodList;

  const getRandomIndex = function (length) {
    return parseInt(Math.random() * length);
  };
  //랜덤으로 숫자 뽑아줌

  const getRandomFood = choiceFood[getRandomIndex(choiceFood.length)];
  //랜덤으로 뽑힌 숫자의 배열에 적힌 음식 이름을 가져옴

  const findFood = foodInfo.find(function (data) {
    return data.foodName === getRandomFood;
  });
  // 랜덤으로 뽑은 음식의 이름과 음식 정보가 담긴 배열의
  // 이름이 일치할 때에 해당 정보를 가져와서 findFood에 넣음

  // console.log(findFood);

  return (
    <>
      <PageTitle titleName="결과페이지" />
      <Layout>
        <MenuListWrap>
          <MenuList>
            <MenuImg>
              <img src={findFood.img} alt="음식사진" />
            </MenuImg>
            <MenuTitle>
              <div>
                오늘은
                <h3>"{getRandomFood}"</h3>
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
