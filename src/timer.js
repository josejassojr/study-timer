const timerFuncs = (sessionLength, breakLength) => {
  var minSession = sessionLength;
  var minBreak = breakLength;
  var sec = 0;
  var sessionTimer;
  var breakTimer;
  var breakFunc;
  var sessionFunc;

  sessionFunc = () => {
    if (minSession === 0 && sec === 0) {
      clearInterval(sessionTimer);
      // would sound the alarm right here and maybe call breakTimer?
      minBreak = breakLength;
      breakTimer = setInterval(breakFunc, 200);
      return;
    }
    if (sec === 0) {
      sec = 59;
      minSession -= 1;
    } else {
      sec -= 1;
    }
    if (sec < 10) {
      console.log("sesion time left is " + String(minSession) + ":0" + String(sec));
    } else {
      console.log("session time left is " + String(minSession) + ":" + String(sec));
    }
  };

  breakFunc = () => {
    if (minBreak === 0 && sec === 0) {
      clearInterval(breakTimer);
      // would sond the alarm right here and maybe call breakTimer?
      minSession = sessionLength;
      sessionTimer = setInterval(sessionFunc, 200);
      return;
    }
    if (sec === 0) {
      sec = 59;
      minBreak -= 1;
    } else {
      sec -= 1;
    }
    if (sec < 10) {
      console.log("break time left is " + String(minBreak) + ":0" + String(sec));
    } else {
      console.log("break time left is " + String(minBreak) + ":" + String(sec));
    }
  };
  sessionTimer = setInterval(sessionFunc, 200);
};

export default timerFuncs;
