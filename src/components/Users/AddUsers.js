import React, { useRef, useState } from 'react';
import styles from './AddUsers.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button/Button';
import ErrorModal from '../UI/Modal/ErrorModal';

const AddUsers = ({ onAddUser }) => {
  // 에러 상태 관리 -> ErrorModal을 useState로 관리
  const [error, setError] = useState(null);
  // null -> false로 인식 된다.

  // input dom 가져오기
  const nameInput = useRef();
  const ageInput = useRef();

  const userSubmitHandler = (e) => {
    e.preventDefault();

    console.log(nameInput.current);

    // 사용자가 submit을 누르면!
    const username = nameInput.current.value;
    const age = ageInput.current.value;

    if (username.trim() === '' || age.trim() === '') {
      setError({
        // 사용자가 아무것도 입력하지X
        // 객체로 세팅
        title: '유효하지 않은 입력 값!',
        message: '입력 값은 공백으로 작성하시면 안됩니다!',
      });
      return;
    }

    if (+age < 1) {
      setError({
        title: '유효하지 않은 나이의 범위',
        message: '나이는 1 이상의 숫자로 작성 해 주세요!',
      });
      return;
    }

    onAddUser({ username, age });

    nameInput.current.value = '';
    ageInput.current.value = '';
  };

  return (
    <>
      {error && (
        // error라는 변수의 값이 false면 우항의 값(ErrorModal)이 실행X
        // error가 true -> ErrorModal 실행
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={() => setError(null)}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={userSubmitHandler}>
          <label htmlFor='username'>이름</label>
          <input
            id='username'
            type='text'
            ref={nameInput}
          />
          <label htmlFor='age'>나이</label>
          <input
            id='age'
            type='number'
            ref={ageInput}
          />
          <Button type='submit'>가입하기</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUsers;
