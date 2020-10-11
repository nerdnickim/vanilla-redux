import {
	configureStore,
	createAction,
	createReducer,
	createSlice,
} from "@reduxjs/toolkit";

/*
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

const reducer = createReducer([], {
	[addToDo]: (state, action) => {
		state.push({ text: action.payload, id: Date.now() });
	},
	[deleteToDo]: (state, action) => state.filter((toDo) => toDo.id !== action.payload),
});
*/

const toDos = createSlice({
	name: "toDoReducers",
	initialState: [],
	reducers: {
		add: (state, action) => {
			state.push({ text: action.payload, id: Date.now() });
		},
		remove: (state, action) => state.filter((toDo) => toDo.id !== action.payload),
	},
});

export const { add, remove } = toDos.actions;

const store = configureStore({ reducer: toDos.reducer });

export default store;
