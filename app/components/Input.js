import React from 'react';

/*
 *  解构
	let props = {
		name: 'hector',
		age: 21
	}
	
	log = ({name,age}) => {
		console.log(name);
		console.log(age);
	}
	
	log(props);
*/

const Input = ({
	newToDo,
	onInputChange,
	onSubmit
}) => {
	return(
		<form className="form-group">
		    <input type="text" className="form-control new-input" id="listItemInput" placeholder="添加新订单" onChange={onInputChange} value={newToDo}/>
		    
		    <button className="btn btn-primary new-btn" onClick={onSubmit}> 新增订单 </button>
		</form>
	)
}

export default Input;