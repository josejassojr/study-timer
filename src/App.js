function App() {
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
            <button id="session-decrement" class="inc-dec-button">
              <i class="fas fa-minus"></i>
            </button>
            <div id="session-length" className="length">
              25
            </div>
            <button id="session-increment" class="inc-dec-button">
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>
        <div id="timer-container">
          <div id="timer-label">Session</div>
          <div id="time-left">25:00</div>
        </div>
        <div id="break-container" className="session-break">
          <div id="break-label" className="label">
            Break Length
          </div>
          <div className="inc-dec-container">
            <button id="break-decrement" class="inc-dec-button">
              <i class="fas fa-minus"></i>
            </button>
            <div id="break-length" className="length">
              5
            </div>
            <button id="break-increment" class="inc-dec-button">
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
        <button id="reset" className="timer-btn">
          <i class="fas fa-redo"></i>
        </button>
      </div>
    </div>
  );
}

export default App;
