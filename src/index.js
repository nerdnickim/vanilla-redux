import { createStore } from "redux";

const form = document.querySelector("form"),
	input = form.querySelector("input"),
	ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO",
	DELETE_TODO = "DELETE_TODO";

const add_todo = (text) => {
	return {
		type: ADD_TODO,
		text,
	};
};

const delete_todo = (id) => {
	return {
		type: DELETE_TODO,
		id,
	};
};

const reducer = (state = [], action) => {
	switch (action.type) {
		case ADD_TODO:
			return [{ text: action.text, id: Date.now() }, ...state];
		case DELETE_TODO:
			return state.filter((toDo) => toDo.id !== action.id);
		default:
			return state;
	}
};

const store = createStore(reducer);

const deleteTodo = (e) => {
	const id = parseInt(e.target.parentNode.id);
	store.dispatch(delete_todo(id));
};

const paintAddList = () => {
	const toDos = store.getState();
	ul.innerHTML = "";

	toDos.forEach((toDo) => {
		const li = document.createElement("li");
		const btn = document.createElement("button");
		li.id = toDo.id;
		li.innerText = toDo.text;
		btn.innerText = "DEL";
		btn.addEventListener("click", deleteTodo);
		li.appendChild(btn);
		ul.appendChild(li);
	});
};

store.subscribe(paintAddList);

const submitHandle = (e) => {
	e.preventDefault();
	const toDo = input.value;
	input.value = "";
	store.dispatch(add_todo(toDo));
};

form.addEventListener("submit", submitHandle);
