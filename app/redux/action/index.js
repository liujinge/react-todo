import Type from './type'

export function addTodo(text) {
	return {
		type: Type.Add_Todo,
		text
	}
}