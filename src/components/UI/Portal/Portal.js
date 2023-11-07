import React from 'react';
import ReactDOM from 'react-dom';

// 이렇게 선언해 놓으면 언제 어디서나 Portal을 불러서 사용할 수 있다!
// 매개 값만 전달하면 사용 가능!
const Portal = ({ children: renderComponent, destId }) => {
  // Component화
  return ReactDOM.createPortal(
    renderComponent,
    document.getElementById(destId)
  );
};

export default Portal;
