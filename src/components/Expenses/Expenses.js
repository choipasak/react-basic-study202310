import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpenseChart from './ExpenseChart';

// 부모가 넘겨주는 전체 소비
const Expenses = ({ items }) => {
  // 선택된 연도 상태 값 관리
  const [filteredYear, setFilteredYear] = useState(
    new Date().getFullYear().toString()
  );

  // 자식 컴포넌트 ExpensesFilter에 있는 선택 연도를 끌어올리는 함수
  const filterChangeHandler = (selectedYear) => {
    // console.log('Expenses: ', selectedYear);
    setFilteredYear(selectedYear);
    // 항상 setter를 이용해서 값을 바꿔줘야 한다. 그래야 리액트가 감지함.
  };

  // ExpenseItem을 동적 렌더링하기.
  // const iterateExpenseItem = () => {
  //   // JS 배열의 메서드 map(배열 요소에 적용할 함수)
  //   // 콜백 함수의 매개 값으로 배열의 요소가 하나씩 전달됨.
  //   // 콜백 함수는 배열 요소의 개수만큼 반복됩니다.
  //   // 결과: map의 리턴 값: 함수가 적용된 각 요소가 담긴 새로운 배열이 리턴 됨.
  //   return items.map((item) => (
  //     // 얘를 이용해서 브라우저에 그려주고 있는 것임
  //     <ExpenseItem
  //       key={item.id}
  //       title={item.title}
  //       price={item.price}
  //       date={item.date}
  //     /> // 이 리턴 값은 저 아래의 {iterateExpenseItem()}로 리턴 된다!
  //   ));
  // };

  // const renderArray = [];

  // for (let item of items) {
  //   renderArray.push(
  //     <ExpenseItem
  //       title={item.title}
  //       price={item.price}
  //       date={item.date}
  //     />
  //   );
  // }

  // return [
  //   <ExpenseItem
  //     title={expenses[0].title}
  //     price={expenses[0].price}
  //     date={expenses[0].date}
  //   />,
  //   <ExpenseItem
  //     title={expenses[1].title}
  //     price={expenses[1].price}
  //     date={expenses[1].date}
  //   />,
  // ];

  // 사용자가 선택한 필터에 걸러진 애들만 받는 filteredItems
  // 선택한 년도의 데이터 값만 저장 되어 있음.
  const filteredItems = items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  // 조건부 렌더링을 위한 변수
  let expenseContent = <p>아직 등록된 지출이 없습니다.</p>;
  if (filteredItems.length > 0) {
    expenseContent = filteredItems.map((item) => (
      // 얘를 이용해서 브라우저에 그려주고 있는 것임
      <ExpenseItem
        key={item.id}
        title={item.title}
        price={item.price}
        date={item.date}
      /> // 이 리턴 값은 저 아래의 {iterateExpenseItem()}로 리턴 된다!
    ));
  }

  return (
    // 함수 내에서 JSX를 리턴할 때에는 반드시 하나의태그만 리턴이 가능함 //
    //   그래서 2개 이상의 태그를 리턴하는 상황 -> 1개의 부모태그로 묶어준다. //
    //   근데 만약 의미없는 부모태그를 하나 더 생성하게되는게 싫다! // 그냥
    //   태그로만 감싸주면 된다! <> </>로 감싸주기
    <Card className='expenses'>
      <ExpensesFilter onChangeFilter={filterChangeHandler} />
      {/* 부모 컴포넌트가 자식에게 데이터를 전달하기 위해서 사용하는 것이 props */}
      {/* 어떻게 전달하고 받아내는가 */}
      {
        // items
        // e.target.value -> 리턴 타입이 String임
        // 그래서 밑의 조건에서 date타입이 아닌 문자열에서 getFullYear를 부를 수가 없음
        // .filter((item) => item.date.getFullYear().toString()
        // === filteredYear)
      }
      <ExpenseChart expenses={filteredItems} />
      {expenseContent}
    </Card>
  );
};

export default Expenses;
