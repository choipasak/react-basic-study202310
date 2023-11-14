import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultState = {
  items: [],
};

// 리듀서 함수 정의: 여러가지 복잡한 상태 관리를 중앙 집중화
// state: 업데이트 하기 전의 상태 값
// action: 어떤 업데이트를 하는지에 대한 정보와 필요값들이 들어있음.
const cartReducer = (state, action) => {
  // 여기서 action에 들어오는  값을 가려줘야 함
  if (action.type === 'ADD') {
    const updatedItem = [...state.items, action.item];
    console.log(updatedItem);
    // cart안의 상태가 변할때마다 리턴타입에 따라 새로운 객체 부여
    return {
      items: updatedItem,
    }; // 이 액션에 대한 업데이트 된 새로운 상태 반환.
  } else if (action.type === 'REMOVE') {
    // 기존의 배열에서 id가 일치하는 값을 찾아서 지운다는 내용 -> 반복문 돌려서 찾는다.
    const removedItems = state.items.filter((item) => item.id !== action.id);

    // cart안의 상태가 변할때마다 리턴타입에 따라 새로운 객체 부여
    return {
      items: removedItems,
    };
  }
  return defaultState;
};

const CartProvider = ({ children }) => {
  // 리듀서 사용
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);

  const cartContext = {
    items: cartState.items, // 장바구니에 담긴 항목 배열
    addItem: (item) => {
      // 액션함수는 반드시 무슨 액션을 하는지와 액션에 필요한 값을 전달.
      dispatchCartAction({
        type: 'ADD', // ADD라는 타입 전달
        item: item, // ADD하려는 값
      });
    },
    removeItem: (id) => {
      dispatchCartAction({
        type: 'REMOVE', // 지우려는 타입
        id: id, // REMOVE하려는 값
      });
    },
  }; // Cart에 대한 정보(카트의 상태 + 카드의 기능을 내포한 것들)

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
    // Provider의 value는 실제로 관리할 데이터 객체.
  );
};

export default CartProvider;
