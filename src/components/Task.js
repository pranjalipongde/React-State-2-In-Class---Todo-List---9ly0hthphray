import React from "react";

function Task(props) {
  return (
    <div>
      <li>{props.task} </li>

      {!props.edit && (
        <button className="edit" onClick={editHandler}>
          Edit{" "}
        </button>
      )}
      {!props.edit && <button className="delete">Delete</button>}

      {props.edit && (
          <textarea
            value={tasks}
            key={index}
            className="editTask"
            onChange={(e) => taskHandler(e)}
          >
            {" "}
          </textarea>
        ) && (
          <button className="saveTask" onClick={AddTaskHandler}>
            Save
          </button>
        )}
    </div>
  );
}

export default Task;
