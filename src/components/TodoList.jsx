import React from "react";
import TodoItem from "./TodoItem";
import "./todolist.css"

const TodoList = ({ todo, setTodo }) => {
	return (
		<div className="todolist">
			{todo.map((ele) => (
				<TodoItem task={ele} key={ele.id} />
			))}
		</div>
	);
};

export default TodoList;
