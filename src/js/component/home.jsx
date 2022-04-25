import React, { useState, useEffect } from "react";

//create your first component
const Home = () => {
	const [tarea, addTarea] = useState([]);
	const [input, setInput] = useState("");
	useEffect(() => console.log(tarea), [tarea]);
	function borrar(i) {
		let newArray = tarea.filter((valor, index) => {
			return index !== i;
		});
		addTarea(newArray);
	}
	const Pendientes = () => {
		let cantidad = tarea.length;
		if (cantidad == 0) {
			return <p>No tienes tareas pendientes, buen trabajo!</p>;
		} else {
			return (
				<p>
					Tienes <b>{cantidad}</b> tareas por hacer!
				</p>
			);
		}
	};

	const tareas = tarea.map((unaTarea, i) => {
		return (
			<li key={i} className="">
				<span>
					<button
						onClick={() => {
							borrar(i);
						}}>
						<i className="far fa-trash-alt" />
					</button>
				</span>
				{unaTarea}
			</li>
		);
	});
	function handleKeyPress(e) {
		if (e.key === "Enter") {
			addTarea([...tarea, input]);
			setInput("");
		}
	}

	return (
		<div className="container todo">
			<div className="row">
				<h1>ToDo List</h1>
			</div>
			<div className="row">
				<input
					type="text"
					placeholder="Agregar nueva tarea"
					onKeyPress={handleKeyPress}
					onChange={(e) => setInput(e.target.value)}
					value={input}
				/>
			</div>
			<div>
				<ul>{tareas}</ul>
			</div>
			<div className="pendientes">
				<Pendientes />
			</div>
		</div>
	);
};

export default Home;
