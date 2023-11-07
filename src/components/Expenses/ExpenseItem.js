// rafce -> 기본함수? 형태? 를 만들어줌
import React, { useState } from 'react';
// react는 왜 괄호X: 내용 자체를 가져옴. { useState } -> 함수만 가져오는 것
// css 로딩~
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
// 이렇게 작성하는 것 마저 귀찮다. -> 구조분해할당
// 객체 버전
// 선생님 노션에 검색
// props가 객체 형태로 오는 것을 쪼개보자!
const ExpenseItem = ({ title, price: propsPrice, date }) => {
  // let itemTitle = title;

  // 값이 변경되어 화면에 반영되어야 하는 값들은
  // useState 훅을 통해 상태 변수로 관리한다.

  // useState는 배열을 리턴하는데
  // 첫번째 요소는 관리 할 상태 값
  // 두번째 요소는 상태값을 변경하는 setter 함수
  const [itemTitle, setItemTitle] = useState(title);
  // setter를 이용해서 값을 줄 것이기 때문에 const로 선언해도 상관X
  // 이게 배열의 분할?임.
  // useState를 사용할땐 값을 주면 된다
  // 값을 전달하고 싶다면 무조건 setter 메서드를 이용해서 값을 변경해줘야 한다 그래야 재렌더링함

  // console.log(stateItem);

  // console.log(props);

  // const price = 9999;

  // 리턴 전에는 함수 선언 가능하다(당연)
  // const expenseDate = date;
  // const expenseTitle = title;
  // const expensePrice = price;

  // 1자리 숫자를 2자리수로 변환하는 함수
  const make2digit = (text) => {
    return text.toString().padStart(2, '0');
    // padStart라는 문자열 함수?
  };

  // 날짜 포맷팅 변환 함수 정의 -> 5월:05월, 6일:06일 로 변환시켜준다.
  const makeFormattedDate = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return `${year}년 ${make2digit(month)}월 ${make2digit(day)}일`;
  };

  // 숫자를 원화 표기법으로 바꾸기
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(propsPrice);

  const clickHandler = (e) => {
    // console.log('버튼 클릭함!');
    // itemTitle = '안녕';
    // console.log(itemTitle); 이렇게 값 주면 안된다는 말임.
    // itemTitle의 내용으로 바꾸면서 다시 랜더링을 해줘야 하는데 안해줌.
    // 그럼 어떡: hook 이라는 기능을 사용해서 재랜더링을 시켜줘야한다.

    // state로 관리하는 변수는 반드시 setter로만 변경하셔야 합니다.
    // setItemTitle((snapshot) => {
    //   console.log(`snapshot: ${snapshot}`);
    //   // 메롱이 새로운 값이 되며 기존 스냅샷과 다를 경우
    //   // 화면이 리렌더링하고 같을 경우 리렌더링을 하지 않는다.
    //   return '메롱';
    // });
    setItemTitle('메롱');
    // 이러면 이제 title의 값이 '안녕'으로 바뀌게 된다!
  };

  // 버튼 가져오기
  // const $btn = document.getElementById('btn');
  // console.log($btn);
  // // 이게 왜 오류 -> 지금 파일은 리액트라서 그럼 -> 함수형 컴포넌트 내부여서 그럼
  // $btn.addEventListener('click', clickHandler);
  // 위 처럼 가져올 수 없음

  return (
    // 이렇게 {}열어주면 원하는 태그로 작성 가능해짐!
    <Card className='expense-item'>
      <ExpenseDate date={date} />
      {/* 이렇게 작성 해 주면 자동으로 import 시켜준다.
          얘 한테 date값을 props로 넘기겠다*/}
      <div className='expense-item__description'>
        {/* 수정 버튼을 누르면 title값이 변화했으면 좋겠다 */}
        <h2>{itemTitle}</h2>
        <div className='expense-item__price'>{formattedPrice}원</div>
      </div>
      <button
        id='btn'
        onClick={clickHandler}
      >
        수정
      </button>
      <button
        id='btn'
        onClick={(e) => {
          console.log('삭제!');
        }}
      >
        삭제
      </button>
    </Card>
  );
};

export default ExpenseItem;
