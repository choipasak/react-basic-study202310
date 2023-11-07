import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onAddExpense }) => {
  const [expenseToggle, setExpenseToggle] = useState(false);

  // 작성 내용이 1줄이어서 괄호 생략 가능
  const startInsertModeHandler = () => setExpenseToggle(true);
  const stopInsertModeHandler = () => setExpenseToggle(false);
  // 자식에서 이 false값을 가진 함수를 호출하게 해줄 것이다!

  let newExpenseContent = (
    <button onClick={startInsertModeHandler}>새로운 지출 추가하기</button>
  );

  if (expenseToggle) {
    // expenseToggle라는 값에 따라서 토글기능
    newExpenseContent = (
      <ExpenseForm
        onSaveExpense={onAddExpense}
        onToggle={stopInsertModeHandler}
      />
    );
  }

  return (
    <div className='new-expense'>
      {/* 밑에 줄이 브라우저에 보라색 폼임. */}
      {newExpenseContent}
    </div>
  );
};

export default NewExpense;
