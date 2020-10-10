import { createStore } from "redux";

const ADD = "ADD",
	DELETE = "DELETE";

const addToDo = (text) => {
		return {
			type: ADD,
			text,
		};
	},
	deleteToDo = (id) => {
		return {
			type: DELETE,
			id,
		};
	};

const reducer = (state = [], action) => {
	switch (action.type) {
		case ADD:
			return [{ text: action.text, id: Date.now() }, ...state];
		case DELETE:
			return state.filter((todo) => todo.id !== action.id);
		default:
			return state;
	}
};

export const actionCreators = {
	addToDo,
	deleteToDo,
};

const store = createStore(reducer);

export default store;
