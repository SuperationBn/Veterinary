import React from "react";
import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaPacientes from "./components/ListaPacientes";

function App() {
	const [pacientes, setPacientes] = useState([]);
	const [paciente, setPaciente] = useState({});

	const eliminarPaciente = id => {
		const eliminar = pacientes.filter(deleate => deleate.id !== id);

		return setPacientes(eliminar);
	};

	useEffect(() => {
		function storage() {
			const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
			setPacientes(pacientesLS);
			// setPaciente({});
		}
		storage();
	}, []);

	useEffect(() => {
		localStorage.setItem("pacientes", JSON.stringify(pacientes));
	}, [pacientes]);

	return (
		<div className="App">
			<Header />
			<main className="md:flex md:justify-center md:gap-6 lg:gap-10 p-3 md:p-1">
				<Formulario
					pacientes={pacientes}
					setPacientes={setPacientes}
					paciente={paciente}
					setPaciente={setPaciente}
				/>
				<ListaPacientes
					pacientes={pacientes}
					setPaciente={setPaciente}
					eliminarPaciente={eliminarPaciente}
				/>
			</main>
			<footer className="bg-orange-900 w-full h-[4rem] flex justify-center items-center shadow-lg opacity-90 mt-10 md:mt-1">
				<div className="text-center">
					<span className="text-slate-300 text-sm md:text-lg font-bold">
						This application uses "
						<i className="fa-solid fa-database mx-2 text-xs md:text-xl"></i>
						LocalStorage " you can save your patient{" "}
						<i className="fa-solid fa-boxes-stacked mx-2 text-xs md:text-xl"></i>
						data permanently in your browser.
					</span>
				</div>
			</footer>
		</div>
	);
}

export default App;
