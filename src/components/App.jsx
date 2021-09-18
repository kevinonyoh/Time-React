import React from "react";

function App() {
  let now = new Date().toLocaleTimeString();

  const [time, setTime] = React.useState(now);

  const changeTime = () => {
    let timeUp = new Date().toLocaleTimeString();

    setTime(timeUp);
  };

  setInterval(changeTime);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={changeTime}>Get Time</button>
    </div>
  );
}

export default App;
