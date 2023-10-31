import React from 'react';
// css 로딩~
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

// 이렇게 작성하는 것 마저 귀찮다. -> 구조분해할당
// 객체 버전
// 선생님 노션에 검색
// props가 객체 형태로 오는 것을 쪼개보자!
const ExpenseItem = ({ title, price: propsPrice, date }) => {
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

  return (
    // 이렇게 {}열어주면 원하는 태그로 작성 가능해짐!
    <div className='expense-item'>
      <ExpenseDate date={date} />
      {/* 이렇게 작성 해 주면 자동으로 import 시켜준다. 
        얘 한테 date값을 props로 넘기겠다*/}
      <div className='expense-item__description'>
        <h2>{title.toString()}</h2>
        <div className='expense-item__price'>{formattedPrice}원</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
