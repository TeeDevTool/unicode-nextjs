import { useState, useEffect } from "react";

import colors from "styles/scss/_themes-vars.module.scss";

const { red } = colors;

const Clock = ({ timeInSec }) => {
  const formatTime = (sec) => {
    let secToMinute = 60;
    let minute = Math.trunc(sec / secToMinute);
    let second = (sec % secToMinute).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
    return `${minute}:${second}`;
  };

  return (
    <div style={{ fontWeight: 600, fontSize: 22, color: red }}>
      {formatTime(timeInSec)}
    </div>
  );
};

const SubText = ({ children }) => (
  <div style={{ fontWeight: 500, color: red, fontSize: 12 }}>{children}</div>
);

const Timer = () => {
  const [currentTime, setTime] = useState(300); // 5 minute

  useEffect(() => {
    let myTimer;
    if (currentTime > 0) {
      myTimer = setInterval(() => setTime(currentTime - 1), 1000); // countdown every 1 sec
    }

    return () => clearInterval(myTimer);
  });

  return (
    <div
      style={{
        padding: "11px 10px",
        border: `2px solid ${red}`,
        borderRadius: 10,
        alignItems: "center",
        textAlign: "center",
        minWidth: 70,
        height: 45,
      }}
    >
      <Clock timeInSec={currentTime} />
      <SubText>left to order</SubText>
    </div>
  );
};

export default Timer;
