import React from 'react';

const ToDoList = (props) => {
	const list = props.toDolist.map((el, index) => {
		return <li
				key={index} 
			> 
				<span>{el.title}</span> 
				
				<button className="btn btn-remove" onClick={props.clickItem.bind(null, index, 'todo')}> √ </button>
				
				<button className="btn btn-delete" onClick={props.deleteItem.bind(null, index, 'todo')}> X </button>
				
			</li>
	});

	return(
		<div>
			<ul className="list toDo-list">
				{list}
			</ul>
		</div>
	)
}

export default ToDoList;