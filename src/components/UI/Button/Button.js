import React from 'react';
import styles from './Button.module.css';

const Button = ({ type, onClick, children, className, disabled }) => {
  return (
    <button
      type={type || 'button'}
      className={`${styles.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default Button;

// import React from 'react';
// import './Button.css';
// import styles from 'styled-components';

// // const Button = styled.button`
// //   .button {
// //     font: inherit;
// //     padding: 0.5rem 1.5rem;
// //     border: 1px solid #8b005d;
// //     color: white;
// //     background: #8b005d;
// //     box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
// //     cursor: pointer;
// //   }

// //   &:focus {
// //     outline: none;
// //   }

// //   &:hover,
// //   &:active {
// //     background: #ac0e77;
// //     border-color: #ac0e77;
// //     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
// //   }
// // `;

// const Button = ({ type, onClick, children }) => {
//   // 다른곳에서 버튼을 쓸 때 요청 type이 없을수도 있음
//   return (
//     <button
//       // 그래서 type이 전달 안됬을 때는 버튼으로 처리
//       type={type || 'button'}
//       className='button'
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;
