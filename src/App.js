import { useState } from "react";
import './App.css';


function App() {
  const [statistics, setStatistics] = useState(() => [
    {
      date: "2023-01-01",
      alarms: "100",
      issues: "10"
    },
    {
      date: "2023-01-02",
      alarms: "101",
      issues: "12"
    },
    {
      date: "2023-01-03",
      alarms: "102",
      issues: "11"
    },
    {
      date: "2023-01-04",
      alarms: "98",
      issues: "9"
    }
  ])

  return (
    <div className="App">
      <p>Hello</p>
      
      {statistics.map((item, index) => (
        <div>{item.date}: {item.alarms}</div>
      ))}
    </div>
  );
}

export default App;
