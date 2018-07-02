import React, { Component } from 'react';
import PomodoroPanel from './PomodoroPanel.jsx';
import SetupPanel from './SetupPanel';
import TasksPanel from './TasksPanel.jsx'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.handleAppResetButtonClicked = this.handleAppResetButtonClicked.bind(this);
    this.handleStartButtonClicked = this.handleStartButtonClicked.bind(this);

    this.state = { setupModeActive: true };
  };

  handleAppResetButtonClicked() { this.setState({ setupModeActive: true }); }

  handleStartButtonClicked(settings) {
    this.setState(settings);
    this.setState({ setupModeActive: false });
  }

  render() {
    return (
      <div id="App" >
        <span className="title" >Pomodoro Timer & ToDos</span>
        <button id="ResetButton" onClick={this.handleAppResetButtonClicked}>Reset App</button >
        {(this.state.setupModeActive)
          ? <SetupPanel onStartButtonClicked={(settings) => this.handleStartButtonClicked(settings)} />
          : <div>
            <PomodoroPanel appState={this.state} />
            <TasksPanel />
          </div>}
      </div>
    )
  }
}
    
export default App;
    
