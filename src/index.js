import { createStore } from "redux";

const add = document.getElementById("add"),
	minus = document.getElementById("minus"),
	number = document.querySelector("span");

const countModifier = (count = 0) => {
	return count;
};

const countStore = createStore(countModifier);

console.log(countStore.getState());
