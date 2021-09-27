import React from "react";
import timerFuncs from "./timer";

var sessionTimer;
var breakTimer;
var breakFunc;
var sessionFunc;
// var startedBreak;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timeLeft: "25:00",
      currently: "Session",
      timerOn: false
    };

    this.minSession = this.state.sessionLength;
    this.minBreak = this.state.breakLength;
    this.sec = 0;
    this.setTimeLeft = this.setTimeLeft.bind(this);
  }
  setTimeLeft(min, sec) {
    if (sec < 10) {
      if (min < 10) {
        this.setState({
          timeLeft: "0" + String(min) + ":0" + String(sec)
        });
      } else {
        this.setState({
          timeLeft: String(min) + ":0" + String(sec)
        });
      }
    } else if (min < 10) {
      this.setState({
        timeLeft: "0" + String(min) + ":" + String(sec)
      });
    } else {
      this.setState({
        timeLeft: String(min) + ":" + String(sec)
      });
    }
  }
  sessionFunc(sessionLength, breakLength) {
    if (this.minSession === 0 && this.sec === 0) {
      clearInterval(sessionTimer);
      // would sound the alarm right here and maybe call breakTimer?
      this.minBreak = breakLength;
      this.setState({
        currently: "Break"
      });
      this.setTimeLeft(this.minBreak, 0);
      breakTimer = setInterval(
        () => this.breakFunc(sessionLength, breakLength),
        1000
      );
      return;
    }
    if (this.sec === 0) {
      this.sec = 59;
      this.minSession -= 1;
    } else {
      this.sec -= 1;
    }
    this.setTimeLeft(this.minSession, this.sec);
  }

  breakFunc(sessionLength, breakLength) {
    if (this.minBreak === 0 && this.sec === 0) {
      clearInterval(breakTimer);
      // would sound the alarm right here and maybe call breakTimer?
      this.minSession = sessionLength;
      this.setState({
        currently: "Session"
      });
      this.setTimeLeft(this.minSession, 0);
      sessionTimer = setInterval(
        () => this.sessionFunc(sessionLength, breakLength),
        1000
      );
      return;
    }
    if (this.sec === 0) {
      this.sec = 59;
      this.minBreak -= 1;
    } else {
      this.sec -= 1;
    }
    this.setTimeLeft(this.minBreak, this.sec);
  }

  pauseTimer() {
    this.setState({
      timerOn: false
    })
    clearInterval(sessionTimer);
    clearInterval(breakTimer);
  }

  handleClick(id) {
    const currSession = this.state.sessionLength;
    const currBreak = this.state.breakLength;
    const timerOn = this.state.timerOn;
    const currently = this.state.currently;
    switch (id) {
      case "start":
        if (timerOn) {
          this.pauseTimer();
          return;
        }
        this.setState({
          timerOn: true
        });
        this.minBreak = currBreak;
        this.minSession = currSession;
        if (currently === "Session") {
          sessionTimer = setInterval(
          () => this.sessionFunc(currSession, currBreak),
          1000
        );
        } else {
          breakTimer = setInterval(
            () => this.breakFunc(currSession, currBreak),
            1000
          );
        }
        
        break;
      case "pause":
        this.pauseTimer();
        break;
      case "reset":
        this.pauseTimer();
        this.setState({
          sessionLength: 25,
          breakLength: 5,
          currently: "Session",
          timerOn: false,
          timeLeft: "25:00"
        });
        this.sec = 0;
        break;
      case "session-decrement":
        if (currSession > 1 && !timerOn) {
          this.setState({
            sessionLength: currSession - 1
          });
          if (currently === "Session") {
            this.sec = 0;
            this.setTimeLeft(currSession - 1, 0);
          }
          return;
        }
        break;
      case "session-increment":
        if (currSession < 60 && !timerOn) {
          this.setState({
            sessionLength: currSession + 1
          });
          if (currently === "Session") {
            this.sec = 0;
            this.setTimeLeft(currSession + 1, 0);
          }        
          return;
        }
        break;
      case "break-decrement":
        if (currBreak > 1 && !timerOn) {
          this.setState({
            breakLength: currBreak - 1
          });
          if (currently === "Break") {
            this.sec = 0;
            this.setTimeLeft(currBreak - 1, 0);
          }
          return;
        }
        break;
      case "break-increment":
        if (currBreak < 60 && !timerOn) {
          this.setState({
            breakLength: currBreak + 1
          });
          if (currently === "Break") {
            this.sec = 0;
            this.setTimeLeft(currBreak + 1, 0);
          }
          return;
        }
        break;

      default:
        return;
    }
  }
  render() {
    return (
      <div className="App">
        <header>Focus Timer</header>
        <div id="main-container">
          <div id="session-container" className="session-break">
            <div id="session-label" className="label">
              Session Length
            </div>
            <div className="inc-dec-container">
              {" "}
              <button
                id="session-decrement"
                class="inc-dec-button"
                onClick={() => this.handleClick("session-decrement")}
              >
                <i class="fas fa-minus"></i>
              </button>
              <div id="session-length" className="length">
                {this.state.sessionLength}
              </div>
              <button
                id="session-increment"
                class="inc-dec-button"
                onClick={() => this.handleClick("session-increment")}
              >
                <i class="fas fa-plus"></i>
              </button>
            </div>
          </div>
          <div id="timer-container">
            <div id="timer-label">{this.state.currently}</div>
            <div id="time-left">{this.state.timeLeft}</div>
          </div>
          <div id="break-container" className="session-break">
            <div id="break-label" className="label">
              Break Length
            </div>
            <div className="inc-dec-container">
              <button
                id="break-decrement"
                class="inc-dec-button"
                onClick={() => this.handleClick("break-decrement")}
              >
                <i class="fas fa-minus"></i>
              </button>
              <div id="break-length" className="length">
                {this.state.breakLength}
              </div>
              <button
                id="break-increment"
                class="inc-dec-button"
                onClick={() => this.handleClick("break-increment")}
              >
                <i class="fas fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
        <div id="timer-controls">
          <button
            id="start_stop"
            className="timer-btn"
            onClick={() => this.handleClick("start")}
          >
            <i class="fas fa-play"></i>
          </button>
          <button
            id="pause"
            className="timer-btn"
            onClick={() => this.handleClick("pause")}
          >
            <i class="fas fa-pause"></i>
          </button>
          <button
            id="reset"
            className="timer-btn"
            onClick={() => this.handleClick("reset")}
          >
            <i class="fas fa-redo"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
