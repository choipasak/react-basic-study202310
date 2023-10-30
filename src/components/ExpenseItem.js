import React from 'react';

const ExpenseItem = () => {
  return (
    // 이렇게 {}열어주면 원하는 태그로 작성 가능해짐!
    <div className='expense-item'>
      <div>2023년 10월 30일</div>
      <div className='expense-item__description'>
        <h2>냠냠치킨</h2>
        <div className='expense-item__price'>19000원</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
