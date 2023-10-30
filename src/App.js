// import logo from './logo.svg';
import React from 'react';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import NoName from './NoName';

function App() {
  const $h2 = <h2>반가뵤</h2>;

  return (
    // 함수 내에서  JSX를 리턴할 때에는 반드시 하나의태그만 리턴이 가능함
    // 그래서 2개 이상의 태그를 리턴하는 상황 -> 1개의 부모태그로 묶어준다.
    // 근데 만약 의미없는 부모태그를 하나 더 생성하게되는게 싫다!
    // 그냥 태그로만 감싸주면 된다! <> </>로 감싸주기
    <>
      <NoName />
      <ExpenseItem />
      <div className='App'>
        {/* 이거 class가 아니라 className이라고 작성해줘야함: 충돌남 */}
        {$h2}
      </div>

      <div className='noname'>
        <input type='text' />
        <p>
          (스폰지밥)아이고 깜짝이야! 어? <br />
          핑핑아 오늘이 무슨요일이야? <br />
          (핑핑이)와우~ <br />
          (스폰지밥)월요일? 와우!월요일!! <br />
          월요일 좋아 <br />
          최고로 좋아 <br />
          난 일 할 때 제일 멋지지 <br />
          오늘부터 열심히 할 거야 <br />
          오, 좋아 <br />
          월요일 좋아 <br />
          같이불러 핑핑아! <br />
          (냔냔냔냔 냔냔냔냐 냐냐냐냐냔냐냐) <br />
          (냔냔냔냔냔 냐냐냔) <br />
          월요일 <br />
          월요일 <br />
          월요일~ <br />
          월요일 좋아~ <br />
          (징징이)제발좀 조용히해!! <br />
          월요일이 좋아서 난리 떠는 멍청이는 <br />
          이 세상에 너뿐일 거야! <br />
          (뚱이)월요일 좋아! <br />
          (징징이)맙소사.. <br />
          (뚱이)진짜 맛있는 날이야! <br />
          (징징이)제발그만해 <br />
          (뚱이) 냠냠 게살버거 <br />
          (스폰지밥) 넌 세개 먹어 <br />
          (뚱이)오예! 노래하자 내뱃살아! <br />
          오, 좋아 월요일 좋아 <br />
          (다같이)월요일 좋아 <br />
          월요일 좋아 <br />
          오늘은 월요일! <br />
          오늘은 월요일! <br />
          오, 좋아 <br />
          월요일 좋아~ <br />
        </p>
      </div>
    </>
  );
}

export default App;
