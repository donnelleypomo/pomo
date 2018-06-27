import React, { Component } from 'react';
import './App.css';

class App extends Component {
 
  constructor(props) {
    super(props);
    this.setState({focusPeriodDuration: 25});
    // App state
      // sessionNumber: 1,  //resetApp()
     
      // focusPeriodDuration: 25,
      // restPeriodDuration: 5,
      // breakPeriodDuration: 30;
      // mode: SET_UP, // TIMER_RUNNING
      // tasks

      // callBack from start, start 1 sec timer
  };

  
  render() {
    const seconds = 301;

    const TimerDisplay = props => 
      <div>
        {Math.floor(props.seconds / 60)}
        :
        {props.seconds % 60}  
      </div>;
  
    return (

      
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TimerDisplay seconds={seconds} />
      </div>
    /*  if state.mode = "TIMER_RUNNING" 
          <PomodoroPanel> reset app button  show session number 
          timer F
          timer R
          </PomodoroPanel>

          <TasksPanel> </TasksPanel>
        if state.mode = "SET_UP"  
        <StartupPanel> 
           start button three durations save to state, save on enter, error check limits
           demo mode buttn
           callback on start
        </StartupPanel>
        */
    );
  }
}

/*
  never both zero?

  StartFocusPeriod()
    activeTimer = "FOCUS"
    focusTime = *
    announce
    sessions++
  StartBreakPeriod()
    activeTimer = "BREAK"
    focusTime = 0
    breakTime = * (take sessionbs into account)
    announce

  

  init cycle
    focusTimer = 0; breakTimer = 0; sessions = 0; start timer StartFocusPeriod()
  cycle
    if (activeTimer == "FOCUS") (focusTime == 0) ? StartBreakPeriod() : focusTime--
    else (breakTime == 0) ? StartFocusPeriod() : breakTimer--
  

*/

export default App;
