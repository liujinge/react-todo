import React from 'react';
import ToDoList from './ToDoList';
import DoneList from './DoneList'
import Input from './Input';

require('../less/todo.less');

class ToDoApp extends React.Component {
	componentWillMount() {
		this.setState({
			newToDo: '',

			toDoList: [{
				title: '订单：131268371，配送地址：科技路创业广场 ',
				done: false
			}, {
				title: '订单：268371131，配送地址：南二环路西段108号',
				done: false
			}, {
				title: '订单：371131268，配送地址：高新四路8号 ',
				done: false
			}],

			doneList: [{
				title: '订单：131268371，配送地址：科技路创业广场 ',
				done: false
			}, {
				title: '订单：268371131，配送地址：南二环路西段108号',
				done: false
			}],
		})
	};

	constructor(props) {
		super(props);
		this.onInputChange = this.onInputChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.clickItem = this.clickItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	};

	// 输入
	onInputChange(event) {
		this.setState({
			newToDo: event.target.value
		})
	};

	// 确认添加
	onSubmit(event) {
		event.preventDefault();

		if(!/^\s*$/g.test(this.state.newToDo)) {
			// 扩展操作符...，它通过遍历旧数组返回一个新数组，使旧的数组保持原样，这样我们就把事项添加到列表数组末尾
			this.setState((prevState) => ({
				toDoList: [...prevState.toDoList, {
					title: prevState.newToDo,
					done: false
				}],
				newToDo: ''
			}))
		}
	};

	// 划去事项
	clickItem(index, type) {
		if(type == 'todo') {
			this.setState((prevState) => ({
				toDoList: [
					...prevState.toDoList.slice(0, index),
					...prevState.toDoList.slice(index + 1)
				],
				doneList: [
					...prevState.doneList,
					Object.assign({}, prevState.toDoList[index], {
						done: !prevState.toDoList[index].done
					})
				]
			}))
		} else if(type == 'done') {
			this.setState((prevState) => ({
				doneList: [
					...prevState.doneList.slice(0, index),
					...prevState.doneList.slice(index + 1)
				],
				toDoList: [
					...prevState.toDoList,
					Object.assign({}, prevState.doneList[index], {
						done: !prevState.doneList[index].done
					})
				]
			}))
		}
	};

	// 删除事项
	deleteItem(index, type) {
		if(type == 'todo') {
			this.setState((prevState) => ({
				toDoList: [
					...prevState.toDoList.slice(0, index),
					...prevState.toDoList.slice(index + 1)
				]
			}))
		} else if(type == 'done') {
			this.setState((prevState) => ({
				doneList: [
					...prevState.doneList.slice(0, index),
					...prevState.doneList.slice(index + 1)
				]
			}))
		}

	};

	render() {
		return(
			<div className="row">
				<div className="panel-wrap">
					<div className="panel panel-default">
					<h1>熊猫物流</h1>
					
						<Input newToDo={this.state.newToDo} onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
						
						<div className="panel-body">
						
						    <h2>配送中</h2>
						    
						    <ToDoList toDolist={this.state.toDoList} clickItem={this.clickItem} deleteItem={this.deleteItem}/>
						    
						</div>
						
						<div className="panel-body">
						
						    <h2>已完成</h2>
						    
						    <DoneList doneList={this.state.doneList} clickItem={this.clickItem} deleteItem={this.deleteItem}/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ToDoApp;