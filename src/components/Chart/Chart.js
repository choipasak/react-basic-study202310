import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({ dataPoints }) => {
  // 매개 값으로 dataPoints배열을 받음.

  // 1년치 지출 총액이 필요하다! -> 그래야 (그래프)비율을 설정할 수 있으니까!
  const dataPointValues = dataPoints.map((dp) => dp.value);

  // 1년치 총액
  // a: 리턴 결과에 대한 누적값, b: 배열에서 하나씩 꺼낸 값
  const totalValue = dataPointValues.reduce((a, b) => a + b, 0); // 맨 뒤의 0: 초기값.
  // 1년 중에 가장 지출이 큰 달을 100%로 기준 잡고 표현해보자!
  // 1. 제일 지출이 큰 값 구하기
  // const maximumValue = Math.max(...dataPointValues);
  // 지출 액들만 월별로 추출.

  return (
    <div className='chart'>
      {dataPoints.map(({ label, value }) => {
        // dp라는 이름으로 객체들이 넘어온다.
        console.log(value);
        return (
          <ChartBar
            key={label} // 이 key값을 바로 줄 순 없음.
            // label값 따로 전달.
            label={label}
            currentValue={value}
            maxValue={totalValue}
          /> // 이 형태로 출력 해줘!
        );
      })}
    </div>
  );
};

export default Chart;
