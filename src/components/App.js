import React, { useState } from "react";
import "./../styles/App.css";
import Task from "./Task";

function App() {

	const [task, setTask] = useState()
	const [taskList, setTaskList] = useState([])
	const [edit, setEdit] = useState(false)
	const [editIndex,setEditIndex] = useState(null)
	const [editedTask,setEditedTask]= useState()
	const [savedTask,setSavedTask]= useState()
	const [saved,setSaved]= useState()

	
	const taskHandler = (e) => {
		setTask(e.target.value)

	}

	const savedTaskHandler = (e)=>{
		setSavedTask(e.target.value)
		
	}

	const AddTaskHandler = () => {
		setTaskList([...taskList, task])
		setTask("")

	}

	const editHandler = (index)=>{
		setEdit(true)
		setEditIndex(index)
		
	}

	const saveTaskHandler = ()=>{
		
		let  editedTask = [...taskList];
		editedTask[editIndex]=savedTask
		setTaskList(editedTask)
		setSaved(true)
		setEdit(false)
		
		console.log(saved)

		

	}

	const deleteHandler = (index)=>{
	
   let deletedTaskList = [...taskList]
	deletedTaskList.splice(index, 1)
	setTaskList(deletedTaskList)
	console.log(taskList)

	


	}
	return (
		<div id="main">
			<div><textarea value={task} id="task" onChange={(e) => taskHandler(e) } placeholder="enter task here">
			</textarea>
						
			</div>
			<button id="btn" onClick={AddTaskHandler}  disabled={task==="" ?true:false} >Add Task</button>


			<div id="task-list">
				<ol>
					{taskList.map((tasks,index) => {
						console.log(tasks.toString())
						
						return 	<li key={tasks.toString()} className="list">{tasks}

							{!edit &&  <button className="edit" onClick={()=>editHandler(index)}>Edit </button>}
							{!edit &&   <button className="delete" onClick={()=>deleteHandler(index)}>Delete</button>}
						{ edit  && index==editIndex ? <>
								<textarea value={savedTask} key={index} className="editTask" onChange={(e) => savedTaskHandler(e) } > </textarea> 
								
								<button className="saveTask" onClick={saveTaskHandler}  disabled={savedTask===""?true:false}  >Save</button></>:null
								} 
							
					</li>

					})}
				</ol>

			</div>

			{/* //Do not alter main div
		//Please do not alter the functional component as tests depend on the type of component. */}
		</div>
	);
}


export default App;



