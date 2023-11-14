import React from 'react';
import styles from './Input.module.scss';

// 어느곳에서 사용하던지 자유롭게 사용될 수 있도록 작성했다! -> 어디서나 Input 컴포넌트 사용가능
const Input = ({ input, label }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </div>
  );
};

export default Input;
