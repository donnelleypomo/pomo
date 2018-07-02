import React from 'react';
import NumericInput from 'react-numeric-input';
import './App.css';

function settings() {
    const multiplier = document.getElementById("demoModeCheckBox").checked ? 1 : 60;;
    return ({
        focusPeriodDuration: multiplier * document.getElementById("focusPeriodDuration").value,
        longBreakDuration: multiplier * document.getElementById("longBreakPeriod").value,
        shortBreakDuration: multiplier * document.getElementById("shortBreakPeriod").value,
    })
};

const SetupPanel = props =>
    <div>
        <button id="StartButton" onClick={() => props.onStartButtonClicked(settings())}>Start Timing</button>
        <div id="durationsInMinutes">
            <div>
                <label htmlFor="durationsInMinutes">Durations in minutes:</label>
            </div>
            <div>
                <label htmlFor="focusPeriodDuration">Focus period (25):</label>
                <NumericInput className="NumericInput" readOnly value={25} id="focusPeriodDuration" />

            </div>
            <div>
                <label htmlFor="shortBreakPeriod">Short break period (3-5):</label>
                <NumericInput className="NumericInput" strict min={3} max={5} value={4} id="shortBreakPeriod" />
            </div>
            <div>
                <label htmlFor="longBreakPeriod">Long break period (15-30):</label>
                <NumericInput className="NumericInput" strict min={15} max={30} value={20} id="longBreakPeriod" />
            </div>
            <div id="DemoModeDiv">
                <input type="checkbox" id="demoModeCheckBox" />
                <label htmlFor="demoModeCheckBox">Demo mode: Durations in seconds, not minutes.</label >
            </div>
        </div>
    </div>

export default SetupPanel;