import { useRef } from "react";
import "./Project.css";

export default function Project({ current, onAddTask, onDeleteProject }) {
  const inputRef = useRef();

  return (
    <div className="container">
      <div className="header">
        <h2>{current.title}</h2>
        <button onClick={() => onDeleteProject(current?.id)}>Delete</button>
      </div>
      <div>{current.description}</div>

      <div className="separator"></div>

      <h2>Tasks</h2>
      <div className="header">
        <input ref={inputRef}></input>
        <button
          onClick={() => {
            onAddTask(inputRef.current.value, current?.id);
          }}
        >
          Add Task
        </button>
      </div>
      {current?.tasks?.length < 1
        ? "This project does not have any tasks yet"
        : current?.tasks?.map((task, index) => <div key={index}>{task}</div>)}
    </div>
  );
}
