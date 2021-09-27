import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timeLeft: "25:00",
      currently: "Session"
    }
  }

  handleClick(id) {
    const currSession = this.state.sessionLength;
    const currBreak = this.state.breakLength;
    switch (id) {
      case "session-decrement":
        if (currSession > 1) {
          this.setState({
            sessionLength: currSession - 1
          });
          return;
        }
        break;
      case "session-increment":
        if (currSession < 60) {
          this.setState({
            sessionLength: currSession + 1
          });
          return;
        }
        break;
      case "break-decrement":
        if (currBreak > 1) {
          this.setState({
            breakLength: currBreak - 1
          });
          return;
        }
        break;
      case "break-increment":
        if (currBreak < 60) {
          this.setState({
            breakLength: currBreak + 1
          });
          return;
        }
        break;
      case "reset":
        this.setState({
          sessionLength: 25,
          breakLength: 5,
          currently: "Session"
        })
      default: return;
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
          <button id="start_stop" className="timer-btn">
            <i class="fas fa-play"></i>
          </button>
          <button id="pause" className="timer-btn">
            <i class="fas fa-pause"></i>
          </button>
          <button id="reset" className="timer-btn" onClick={() => this.handleClick("reset")}>
            <i class="fas fa-redo"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
