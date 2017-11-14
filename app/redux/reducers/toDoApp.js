import { addTodo } from './../action';

//The initial state of this reducer (will be combined with the states of other reducers as your app grows)
const initialState = {
	doneList: [{
		title: '订单：131268371，配送地址：科技路创业广场 ',
		done: false
	}, {
		title: '订单：268371131，配送地址：南二环路西段108号',
		done: false
	}],
};

// a function that has two parameters, state (which is initialized as our initialState obj), and action
export default function toDoApp(state = initialState, action) {
	switch(action.type) {
		case addTodo:
			console.log('addTodo');
		default:
			return state;
	}
}