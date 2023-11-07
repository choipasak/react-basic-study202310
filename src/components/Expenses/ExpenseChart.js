import React from 'react';

import Chart from '../Chart/Chart';

const ExpenseChart = ({ expenses }) => {
  // console.log('expenses: ', expenses);

  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 }, // 각각의 월을 나타내는 객체(프로퍼티: label, value)
  ]; // 배열 객체 선언.

  // 목표: 선택 년도의 모든 지출 데이터를 꺼내서 월을 추출하면서
  // 해당 월의 지출액을 chartDataPoints의 월 value에 누적
  expenses.forEach((exp) => {
    // 매개 값으로 콜 백 함수

    // console.log(exp.date.getMonth() + 1);
    // +1 안하면 실제 월에서 -1 한 값이 출력된다! -> 그렇게 작성 해놨음
    const expenseMonth = exp.date.getMonth();
    const expensePrice = exp.price;

    // 뽑아낸 Month객체의 value값에 복합누적해서 expensePrice값을 주겠다!
    chartDataPoints[expenseMonth].value += expensePrice;
  });

  return <Chart dataPoints={chartDataPoints} />;
  // dataPoints 라는 이름으로 데이터를 넘기고 있음.
  // Chart.js에게 넘김
};

export default ExpenseChart;
