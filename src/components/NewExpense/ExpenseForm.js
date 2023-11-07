import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpense, onToggle }) => {
  const [userInput, setUserInput] = useState({
    // userInput은 값 자체. setUserInput은 값을바꿀 수 있게 해주는 변수!
    title: '',
    price: '',
    date: '',
  });
  //   let [title, setTitle] = useState('');
  //   let [price, setPrice] = useState('');
  //   let [date, setDate] = useState('');
  // useState를 이용해서 값 초기화 시켜주기! -> 초기값

  const titleChangeHandler = (e) => {
    // console.log(e.target.value);
    // title = e.target.value;
    // console.log(title);
    // setUserInput({
    // ...userInput, // userInput에 적힌 객체 프로퍼티를 그대로 복사해서 여기에 넣을건데
    // title: e.target.value, // title만 이렇게 바꿔조!(이것도 디스트럭쳐 문법의 일종임)
    // 선생님 노션에서 구조 분해 할당 -> spread -> 실제로 배열을 내용까지 복사가능함!(...userInput)
    setUserInput((prevUserInput) => {
      // 바뀌기 전의 상태 값을 저장한다!
      return {
        ...prevUserInput,
        title: e.target.value,
      };
    });
    // });
  };

  const priceChangeHandler = (e) => {
    // console.log(e.target.value);
    // price = e.target.value;
    setUserInput({
      ...userInput,
      price: e.target.value,
    });
  };

  const dateChangeHandler = (e) => {
    // console.log(e.target.value);
    // date = e.target.value;
    setUserInput({
      ...userInput,
      date: e.target.value,
      // e.target.value: 리턴 타입이 String. 후에 값을 따로 뺄 수가 없음.
      // 그래서 Date 객체로 포장 해 준다.
    });
  };

  const formSubmitHandler = (e) => {
    // 리액트에서 form을 사용하려면
    e.preventDefault(); // submit 차단!
    console.log('submit 버튼을 누름!');
    console.log(userInput);
    onToggle(); // 취소 버튼 누르면 작동할 함수

    const newExpense = {
      title: userInput.title,
      // 앞에 +기호를 붙이면 정수 타입으로 바꿔준다!
      price: +userInput.price,
      date: new Date(userInput.date),
    };

    onSaveExpense(newExpense);

    // 입력창 리셋
    setUserInput({
      title: '',
      price: '',
      date: '',
    });
    onToggle(); // QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ이거 다른곳에
    // setTitle('');
    // setPrice('');
    // setDate(''); // 입력하고 add버튼 누르면 비워주겠다!
    // // title = '';
    // price = '';
    // date = ''; // 리액트가 상태가 변화한걸 감지하지 못함 -> 화면의 리렌더링X -> useState를 사용해야함
  };

  const cancelInsertHandler = () => {
    console.log('취소 버튼 누름!');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            onChange={titleChangeHandler}
            value={userInput.title}
          />
        </div>
        <div className='new-expense__control'>
          <label>Price</label>
          <input
            type='number'
            min='1000'
            step='1000'
            onChange={priceChangeHandler}
            value={userInput.price}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2025-12-31'
            onChange={dateChangeHandler}
            value={userInput.date}
          />
          <div className='new-expense__actions'>
            <button
              type='button'
              onClick={cancelInsertHandler}
            >
              Cancel
            </button>
            <button
              type='submit'
              onClick={cancelInsertHandler}
            >
              Add Expense
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
