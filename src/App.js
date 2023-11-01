// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Expenses from './components/Expenses';
import Hello from './components/Hello';
// import NoName from './NoName';

const App = () => {
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

  console.log('App 실행!');

  return (
    // 함수 내에서  JSX를 리턴할 때에는 반드시 하나의태그만 리턴이 가능함
    // 그래서 2개 이상의 태그를 리턴하는 상황 -> 1개의 부모태그로 묶어준다.
    // 근데 만약 의미없는 부모태그를 하나 더 생성하게되는게 싫다!
    // 그냥 태그로만 감싸주면 된다! <> </>로 감싸주기
    <>
      {/* 부모 컴포넌트가 자식에게 데이터를 전달하기 위해서 사용하는 것이 props */}
      {/* 어떻게 전달하고 받아내는가 */}
      <Expenses items={expenses} />
      {/* <Hello>
        <ul>
          <li>사과</li>
          <li>포도</li>
          <li>복숭아</li>
        </ul>
      </Hello>
      얘는 children 공부할라고 사용했었음 */}
      {/* children을 많이 사용하는 방식: 공통적 형식의 박스를 제작할 때 공통 박스
      역할을 하는 것을 만들고, // 그걸 계속 사용. */}
    </>
  );
};

export default App;
