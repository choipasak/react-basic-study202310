// import logo from './logo.svg';
import React from 'react';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
// import NoName from './NoName';

function App() {
  // const $h2 = <h2>반가뵤</h2>;

  // 지출 항목 객체 배열
  const expenses = [
    {
      title: '타코야끼',
      price: 3000,
      date: new Date(2023, 2 - 1, 11),
    },
    {
      title: '오코노미야끼',
      price: 12000,
      date: new Date(2023, 4 - 1, 5),
    },
    {
      title: '불닭볶음면',
      price: 1800,
      date: new Date(2023, 2 - 1, 11),
      // 그냥 위처럼 -1 해주는 방법밖엔 없음
    },
  ];

  return (
    // 함수 내에서  JSX를 리턴할 때에는 반드시 하나의태그만 리턴이 가능함
    // 그래서 2개 이상의 태그를 리턴하는 상황 -> 1개의 부모태그로 묶어준다.
    // 근데 만약 의미없는 부모태그를 하나 더 생성하게되는게 싫다!
    // 그냥 태그로만 감싸주면 된다! <> </>로 감싸주기
    <>
      {/* 부모 컴포넌트가 자식에게 데이터를 전달하기 위해서 사용하는 것이 props */}
      {/* 어떻게 전달하고 받아내는가 */}
      <ExpenseItem
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        price={expenses[1].price}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        price={expenses[2].price}
        date={expenses[2].date}
      />
      {/* 이거 class가 아니라 className이라고 작성해줘야함: 충돌남 */}
      {/* {$h2} */}
    </>
  );
}

export default App;
