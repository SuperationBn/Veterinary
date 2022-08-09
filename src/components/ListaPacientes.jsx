import React from "react";
import Pacientes from "./Pacientes";

const ListaPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
	return (
		<>
			<div className="md:w-1/2">
				<h2 className="text-center text-2xl md:text-3xl text-slate-300">
					Patient List
				</h2>
				<div className="w-full bg-slate-800 p-3 mt-5 md:mt-10 rounded-lg shadow-md flex flex-col gap-5 md:h-[34rem] md:overflow-y-auto">
					{pacientes && pacientes.length > 0 ? (
						<>
							{pacientes.map(pacienteData => {
								return (
									<Pacientes
										key={pacienteData.id}
										paciente={pacienteData}
										setPaciente={setPaciente}
										eliminarPaciente={eliminarPaciente}
									/>
								);
							})}
						</>
					) : (
						<>
							<div className="w-full h-full flex flex-col justify-center items-center">
								<i className="fa-solid fa-laptop-medical text-4xl md:text-6xl mb-2  text-orange-500"></i>
								<h3 className="text-slate-100 font-semibold text-lg md:text-center">
									there are no <span className="text-orange-500">patients</span>{" "}
									on your list yet, you must add them.
								</h3>
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default ListaPacientes;
