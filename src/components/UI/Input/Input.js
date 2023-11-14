import React from 'react';
import styles from './Input.module.scss';

// 어느곳에서 사용하던지 자유롭게 사용될 수 있도록 작성했다! -> 어디서나 Input 컴포넌트 사용가능
const Input = ({ input, label, onAdd }) => {
  // 이렇게 함수로 따로 체인지핸들러를 만들어서 onAddToCart를 받은 후 input태그에 전달 해 줘야 함
  const amountChangeHandler = (e) => {
    onAdd(e.target.value);
  };

  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input
        {...input}
        onChange={amountChangeHandler}
      />
    </div>
  );
};

export default Input;
