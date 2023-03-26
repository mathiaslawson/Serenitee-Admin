import React from 'react';
import { Circle } from 'react-circle';

const ProgressCircle = ({ progress }) => {
  return (
    <Circle
      progress='70'
      progressColor="#54b332"
      bgColor="#ddd"
      textColor="white"
      textStyle={{
        font: 'bold 5rem Arial, sans-serif',
      }}
      strokeWidth="0"
      roundedStroke={true}
      responsive={true}
    />
  );
};

export default ProgressCircle;
