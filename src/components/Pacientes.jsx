import React from "react";
import { Link } from "react-scroll";

const Pacientes = ({ paciente, setPaciente, eliminarPaciente }) => {
	const { pets, proprietor, email, date, symptoms, id } = paciente;

	const eventEliminarPaciente = () => {
		const confirmar = confirm(
			"Are you sure you want to eliminate this patient ?"
		);

		if (confirmar) {
			eliminarPaciente(paciente.id);
		}
	};

	return (
		<>
			<div className="bg-slate-900 border-2 border-orange-900 p-3 rounded-lg shadow-md">
				<h3 className="text-lg font-semibold text-slate-100 mb-2">
					<i className="fa-solid fa-shield-dog text-lg text-slate-500"></i>{" "}
					Pets:
					<span className="ml-2 text-sm text-slate-300">{pets}</span>
				</h3>
				<h3 className="text-lg font-semibold text-slate-100 mb-2">
					<i className="fa-solid fa-person-half-dress text-lg text-slate-500"></i>{" "}
					Proprietor:
					<span className="ml-2 text-sm text-slate-300">{proprietor}</span>
				</h3>
				<h3 className="text-lg font-semibold text-slate-100 mb-2">
					<i className="fa-solid fa-envelope text-lg text-slate-500"></i>{" "}
					E-mail:
					<span className="ml-2 text-sm text-slate-300">{email}</span>
				</h3>
				<h3 className="text-lg font-semibold text-slate-100 mb-2">
					<i className="fa-solid fa-calendar-days text-lg text-slate-500"></i>{" "}
					Date:
					<span className="ml-2 text-sm text-slate-300">{date}</span>
				</h3>
				<h3 className="text-lg font-semibold text-slate-100">
					<i className="fa-solid fa-shield-heart text-lg text-slate-500"></i>{" "}
					Symptoms:
					<span className="ml-2 text-sm text-slate-300">{symptoms}</span>
				</h3>
				<div className="mt-6 mb-2 flex justify-between gap-1">
					<Link
						to="form"
						spy={true}
						smooth={true}
						offset={50}
						duration={500}
						onClick={() => setPaciente(paciente)}
						className="transition-colors bg-cyan-900 text-gray-400
						hover:bg-cyan-800 hover:text-gray-200 font-semibold text-sm py-1
						px-6 cursor-pointer rounded-md"
					>
						{" "}
						Edit
						<i className="fa-solid fa-pen-to-square text-xs ml-1"></i>
					</Link>
					<button
						onClick={eventEliminarPaciente}
						className="transition-colors bg-red-800 text-gray-400 hover:bg-red-700 hover:text-gray-200 font-semibold text-sm py-1 px-6 cursor-pointer rounded-md"
						typeof="button"
					>
						Delete
						<i className="fa-regular fa-trash-can text-xs ml-1"></i>
					</button>
				</div>
			</div>
		</>
	);
};

export default Pacientes;
