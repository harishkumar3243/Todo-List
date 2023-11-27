import React from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import Task from "./components/Task";
function App() {
  return (
    <>
      <div className="App">
        <Task />
        <TaskList />
      </div>
    </>
  );
}

export default App;
