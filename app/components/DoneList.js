import React from 'react';

const DoneList = ({
	doneList,
	clickItem,
	deleteItem
}) => {
	const list = doneList.map((el, index) => {
		return <li
				key={index} 
			> 
				<span>{el.title}</span> 
				
				<button className="btn btn-remove" onClick={clickItem.bind(null, index, 'done')}> O </button>
				
				<button className="btn btn-delete" onClick={deleteItem.bind(null, index, 'done')}> X </button>
			</li>
	})

	return(
		<div>
			<ul className="list done-list">
				{list}
			</ul>
		</div>
	)
}

export default DoneList;