import React from 'react';
import './App.css';

const TimerDisplay = props =>
  <div>
    {Math.floor(props.seconds / 60)}
    :
    {("0" + props.seconds % 60).slice(-2)}
  </div>
  
export default TimerDisplay;