import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";
import { createStore } from "redux";

const addToDo = createAction("ADD"),
	deleteToDo = createAction("DELETE");

/*
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
*/

const reducer = createReducer([], {
	[addToDo]: (state, action) => {
		state.push({ text: action.payload, id: Date.now() });
	},
	[deleteToDo]: (state, action) => state.filter((toDo) => toDo.id !== action.payload),
});

export const actionCreators = {
	addToDo,
	deleteToDo,
};

const store = configureStore({ reducer });

export default store;
