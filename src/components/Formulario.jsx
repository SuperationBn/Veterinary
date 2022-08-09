import React from "react";
import { useState, useEffect } from "react";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
	const [pets, setPest] = useState("");
	const [proprietor, setProprietor] = useState("");
	const [email, setEmail] = useState("");
	const [date, setDate] = useState("");
	const [symptoms, setSymptoms] = useState("");

	useEffect(() => {
		if (Object.keys(paciente).length > 0) {
			setPest(paciente.pets);
			setProprietor(paciente.proprietor);
			setEmail(paciente.email);
			setDate(paciente.date);
			setSymptoms(paciente.symptoms);
		}
	}, [paciente]);

	const createId = () => {
		const numR = Math.random().toString(36).substr(2);
		const date = Date.now().toString(36);
		return numR + date;
	};

	const dataFormBox = e => {
		e.preventDefault();

		const allDataOfImput = {
			pets,
			proprietor,
			email,
			date,
			symptoms,
			// id: createId(),
		};

		if ([pets, proprietor, email, date, symptoms].includes("")) {
			//
			document.querySelector("#errorMensaje").style.display = "block";

			setTimeout(() => {
				return (document.querySelector("#errorMensaje").style.display = "none");
			}, 3000);
			//
		}

		if (paciente.id) {
			allDataOfImput.id = paciente.id;
			const newListaPacientes = pacientes.map(pasienteSl =>
				pasienteSl.id === paciente.id ? allDataOfImput : pasienteSl
			);
			setPacientes(newListaPacientes);
			setPaciente({});
			//
		} else {
			allDataOfImput.id = createId();
			setPacientes([...pacientes, allDataOfImput]);
		}

		setPest("");
		setProprietor("");
		setEmail("");
		setDate("");
		setSymptoms("");
	};

	return (
		<>
			<section className="md:w-1/2 lg:w-1/3 mb-10 md:mb-8">
				<div className=" text-center mb-5">
					<h2 className="text-2xl md:text-3xl text-slate-300">
						Patient Follow-up
					</h2>
					<div>
						<h3 className="text-slate-400 font-semibold">
							Add patients and{" "}
							<span className="text-orange-700">manage them</span>
						</h3>
					</div>
				</div>
				<div id="form" className="relative bg-gray-800 rounded-lg shadow-md">
					<div
						id="errorMensaje"
						className="hidden absolute w-[90%] -top-4 left-1/2 -translate-x-1/2 bg-red-600 py-1 text-center rounded-3xl shadow-lg"
					>
						<span className="text-slate-300 font-bold">
							TODOS LOS CAMPOS SON REQUERIDOS
						</span>
					</div>
					<form onSubmit={dataFormBox} className="py-2 px-4">
						<div className="mb-3">
							<label
								htmlFor="pets"
								className="block text-lg text-slate-300 mb-1 ml-1 font-semibold"
							>
								Pets
								<i className="fa-solid fa-shield-dog ml-2 text-lg"></i>
							</label>
							<input
								className="w-full p-2 bg-slate-900 text-slate-50 border-2 border-slate-600 rounded-lg shadow-md outline-orange-700"
								type="text"
								name="pets"
								id="pets"
								placeholder="Pet's name..."
								value={pets}
								onChange={e => setPest(e.target.value)}
							/>
						</div>
						<div className="mb-3">
							<label
								htmlFor="proprietor"
								className="block text-lg text-slate-300 mb-1 ml-1 font-semibold"
							>
								Proprietor
								<i className="fa-solid fa-person-half-dress ml-2 text-lg"></i>
							</label>
							<input
								className="w-full p-2 bg-slate-900 text-slate-50 border-2 border-slate-600 rounded-lg shadow-md  outline-orange-700"
								type="text"
								name="proprietor"
								id="proprietor"
								placeholder="Owner's name..."
								value={proprietor}
								onChange={e => setProprietor(e.target.value)}
							/>
						</div>
						<div className="mb-3">
							<label
								htmlFor="email"
								className="block text-lg text-slate-300 mb-1 ml-1 font-semibold"
							>
								E-mail
								<i className="fa-solid fa-envelope ml-2 text-lg"></i>
							</label>
							<input
								className="w-full p-2 bg-slate-900 text-slate-50 border-2 border-slate-600 rounded-lg shadow-md  outline-orange-700"
								type="email"
								name="email"
								id="email"
								placeholder="Electronic choreography..."
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
						<div className="mb-3 relative">
							<label
								htmlFor="date"
								className="block text-lg text-slate-300 mb-1 ml-1 font-semibold"
							>
								Date
								<i className="fa-solid fa-calendar-days ml-2 text-lg"></i>
							</label>
							<input
								className="w-full p-2 bg-slate-900 text-slate-50 border-2 border-slate-600 rounded-lg shadow-md  outline-orange-700"
								type="date"
								name="date"
								id="date"
								value={date}
								onChange={e => setDate(e.target.value)}
							/>
						</div>
						<div className="mb-3">
							<label
								htmlFor="pets"
								className="block text-lg text-slate-300 mb-1 ml-1 font-semibold"
							>
								Symptoms
								<i className="fa-solid fa-shield-heart ml-2 text-lg"></i>
							</label>
							<textarea
								className="w-full p-2 bg-slate-900 text-slate-50 border-2 border-slate-600 rounded-lg shadow-md  outline-orange-700 resize-none"
								type="text"
								name="pets"
								id="pets"
								placeholder="Describe your pet's symptoms..."
								value={symptoms}
								onChange={e => setSymptoms(e.target.value)}
							></textarea>
						</div>
						<button
							className="transition-colors w-full p-2 cursor-pointer bg-orange-700 hover:bg-orange-600 rounded-lg text-slate-100 font-semibold shadow-md mb-3"
							type="submit"
						>
							<i className="fa-solid fa-plus text-sm mr-2"></i>
							ADD PATIENT
						</button>
					</form>
				</div>
			</section>
		</>
	);
};

export default Formulario;
