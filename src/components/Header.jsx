import React from "react";

const Header = () => {
	return (
		<header className="relative w-full py-14">
			<div className="text-center">
				<h1 className="text-3xl md:text-4xl text-slate-50 font-bold">
					Patient Follow-Ups,{" "}
					<span className="text-orange-500">Veterinary</span>
				</h1>
			</div>
			<div className="absolute top-2 md:top-4 right-5 ">
				<a
					className="link text-sm md:text-lg text-slate-300 hover:text-slate-50 flex flex-col items-center justify-center"
					href="https://github.com/SuperationBn/Veterinary"
					target={"_blank"}
				>
					{" "}
					<i className="fa-brands fa-github text-2xl md:text-4xl text-slate-300 hover:text-slate-50"></i>
					GitHub
				</a>
			</div>
		</header>
	);
};

export default Header;
