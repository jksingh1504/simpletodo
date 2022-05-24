import React from "react";
import "./todo.css";
import TodoList from "./TodoList";

const Todo = () => {
	const [todo, setTodo] = React.useState([]);
	const [value, setValue] = React.useState("");

	return (
        <>
		<div className="todoinput">
			<input
				value={value}
				type="text"
				placeholder="write something"
				onChange={(e) => setValue(e.target.value)}
			/>
			<button
				onClick={() => {
					if (value === "") return;
					setTodo([...todo, { id: Date.now(), task: value }]);
					setValue("");
				}}
			>
				+
			</button>
		</div>
		<br /><br />
        <TodoList todo={todo} setTodo={setTodo}/>
        </>
	);
};

export default Todo;
