import Aos from "aos";
import React, { useEffect } from "react";

const Industries = () => {
	useEffect(() => {
		Aos.init();
		Aos.refresh();
	}, []);
	return (
		<div>
			<div className="container py-14 px-10 md:px-6 lg:px-0 mx-auto">
				<div className="text-start text-white font-medium text-2xl mb-4">
					Industries We Work In
				</div>
				<div className="text-start text-white  text-sm mb-8">
					Find the right solution no matter what you do
				</div>
				<div className="grid grid-cols-1 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
					<div
						className="text-xl font-bold shadow-lg text-center h-28 items-center hover:shadow-red-400 cursor-pointer transition-all duration-500 text-white py-4 px-6 card "
						data-aos="zoom-in"
					>
						Amazon FBA
					</div>
					<div
						className="text-xl h-28 text-center shadow-lg hover:shadow-red-400 cursor-pointer transition-all duration-500 font-bold text-white py-4 px-6 card "
						data-aos="zoom-in"
					>
						Marketing & <br /> Advertising
					</div>
					<div
						className="text-xl shadow-lg h-28 hover:shadow-red-400 cursor-pointer transition-all text-center duration-500 font-bold text-white py-4 px-6 card "
						data-aos="zoom-in"
					>
						Software <br /> Development
					</div>
					<div
						className="text-xl shadow-lg h-28 hover:shadow-red-400 cursor-pointer transition-all text-center duration-500 font-bold text-white py-4 px-6 card "
						data-aos="zoom-in"
					>
						E-Commerce
					</div>
					<div
						className="text-xl h-28 text-center shadow-lg hover:shadow-red-400 cursor-pointer transition-all duration-500 font-bold text-white py-4 px-6 card "
						data-aos="zoom-in"
					>
						Coaching & <br /> Consulting
					</div>
					<div
						className="text-xl text-center self-center !my-auto h-28 content-center  shadow-lg hover:shadow-red-400 cursor-pointer transition-all duration-500 font-bold text-white py-4 px-6 card "
						data-aos="zoom-in"
					>
						Tax Services
					</div>
					<div
						className="text-xl text-center shadow-lg hover:shadow-red-400 h-28 cursor-pointer transition-all duration-500 font-bold text-white py-4 px-6 card "
						data-aos="zoom-in"
					>
						Sales & Business <br /> Development
					</div>
					<div
						className="text-xl shadow-lg text-center hover:shadow-red-400 h-28 cursor-pointer transition-all duration-500 font-bold text-white py-4 px-6 card "
						data-aos="zoom-in"
					>
						& Many More
					</div>
				</div>
			</div>
		</div>
	);
};

export default Industries;
