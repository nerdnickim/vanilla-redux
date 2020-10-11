import { createAction } from "@reduxjs/toolkit";
import { createStore } from "redux";

const ADD = "ADD",
	DELETE = "DELETE";

const addToDo = createAction("ADD"),
	deleteToDo = createAction("DELETE");

const reducer = (state = [], action) => {
	switch (action.type) {
		case ADD:
			return [{ text: action.payload, id: Date.now() }, ...state];
		case DELETE:
			return state.filter((todo) => todo.id !== action.payload);
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
