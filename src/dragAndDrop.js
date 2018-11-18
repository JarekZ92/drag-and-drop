import React, { Component } from "react";
import "./App.css";

export default class dragAndDrop extends Component {
    
  state = {
    tasks: [
      { name: "Task1", category: "wip", color: "yellow" },
      { name: "Task2", category: "wip", color: "pink" },
      { name: "Task3", category: "done", color: "skyblue" }
    ]
  };

  render() {
    var tasks = {
      wip: [],
      done: []
    };

    this.state.tasks.forEach(t => {
      tasks[t.category].push(
        <div
          key={t.name}
          className="draggable"
          style={{ backgroundColor: t.color }}
        >
          {t.name}
        </div>
      );
    });
    return (
      <div className="main_container">
        <h2 className="header">Drag and Drop</h2>
        <div className="wip">
          <span className="task-header">Wip</span>
          {tasks.wip}
        </div>
        <div className="droppable">
          <span className="task-header">Completed</span>
          {tasks.done}
        </div>
      </div>
    );
  }
}
