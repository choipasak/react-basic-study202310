import React, { useCallback, useState } from 'react';
import './CourseInput.css';
import Button from '../UI/Button/Button';

const CourseInput = ({ onAdd }) => {
  const [enteredText, setEnteredText] = useState('');
  // 입력값 검증 상태변수
  const [isValid, setIsValid] = useState(true);

  const textChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }

    // 상태 변수로 관리해주자!
    setEnteredText(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault(); // form이 제출되면서 화면이 꿈벅 거리는 것을 막아줌. + submit도
    // 이 목표를 적은 입력 값인 enteredText를 부모인 App.js로 보내야함.
    // 함수를 선언해서 매개 값으로 전달! -> props drilling

    if (enteredText.trim().length === 0) {
      setIsValid(false);
      // alert('입 력 입 력 입 력');
      return;
    }

    onAdd(enteredText);

    setEnteredText(''); // 추가하기 버튼 누르면 입력창 초기화
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>나의 목표</label>
        {/* 사용자가 입력할 때마다 값을 가져가게 이벤트를 걸어준다. */}
        <input
          type='text'
          onChange={textChangeHandler}
          value={enteredText} // 상태변수를 사용해서 가능한 기능
        />
      </div>
      <Button type='submit'>목표 추가하기</Button>
    </form>
  );
};

export default CourseInput;
