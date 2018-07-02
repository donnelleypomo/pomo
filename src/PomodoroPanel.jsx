import React, { Component } from 'react';
import TimerDisplay from './TimerDisplay.jsx';

class PomodoroPanel extends Component {
  constructor(props) {
    super(props);
    this.calcBreakTimeToGo = this.calcBreakTimeToGo.bind(this);
    this.startFocusPeriod = this.startFocusPeriod.bind(this);
    this.session = 0;
  }

  componentWillMount() {
    this.startFocusPeriod();
    this.intervalId = setInterval(this.timer.bind(this), 1000);
  }

  calcBreakTimeToGo() {
    // alert(JSON.stringify(this.session % 4));
    return (
      (this.session % 4 === 0) ? this.props.appState.longBreakDuration
        : this.props.appState.shortBreakDuration
    );
  }

  componentWillUnmount() { clearInterval(this.intervalId) };

  startBreakPeriod() {
    this.setState({ focusTimerActive: false, breakTimeToGo: this.calcBreakTimeToGo() });
  }

  startFocusPeriod() {
    this.session++;
    this.setState({
      focusTimerActive: true,
      focusTimeToGo: this.props.appState.focusPeriodDuration,
      breakTimeToGo: 0,
    });
  }

  timer() {
    (this.state.focusTimerActive)
      ? (this.state.focusTimeToGo === 0) ? this.startBreakPeriod() :
        this.setState({ focusTimeToGo: this.state.focusTimeToGo - 1 })
      : (this.state.breakTimeToGo === 0) ? this.startFocusPeriod() :
        this.setState({ breakTimeToGo: this.state.breakTimeToGo - 1 });
  }

  render() {
    return (
      <div id = "PomodoroPanel">
        <div>Session: {this.session}</div>
        <div><span className="focusBreak">Focus</span><span>Break</span></div>
        <span className='TimerSpan'><TimerDisplay seconds={this.state.focusTimeToGo} state={this.state} /></span>
        <span className='TimerSpan'><TimerDisplay seconds={this.state.breakTimeToGo} state={this.state} /></span>
      </div>
    );
  }
}

export default PomodoroPanel;;