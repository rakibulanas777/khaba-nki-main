import React from "react";

const Industries = () => {
	return (
		<div>
			<div className="container py-14 px-10 md:px-6 lg:px-0 mx-auto">
				<div className="text-start text-white font-medium text-2xl mb-4">
					Industries We Work In
				</div>
				<div className="text-start text-white font-medium text-md mb-8">
					Find the right solution no matter what you do
				</div>
				<div className="grid grid-cols-1 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
					<div className="text-xl shadow-lg hover:shadow-red-400 cursor-pointer transition-all duration-500 font-medium text-white py-4 px-6 card ">
						Amazon FBA
					</div>
					<div className="text-xl shadow-lg hover:shadow-red-400 cursor-pointer transition-all duration-500 font-medium text-white py-4 px-6 card ">
						Marketing & Advertising
					</div>
					<div className="text-xl shadow-lg hover:shadow-red-400 cursor-pointer transition-all duration-500 font-medium text-white py-4 px-6 card ">
						Software Development
					</div>
					<div className="text-xl shadow-lg hover:shadow-red-400 cursor-pointer transition-all duration-500 font-medium text-white py-4 px-6 card ">
						E-Commerce
					</div>
					<div className="text-xl shadow-lg hover:shadow-red-400 cursor-pointer transition-all duration-500 font-medium text-white py-4 px-6 card ">
						Coaching & Consulting
					</div>
					<div className="text-xl shadow-lg hover:shadow-red-400 cursor-pointer transition-all duration-500 font-medium text-white py-4 px-6 card ">
						Tax Services
					</div>
					<div className="text-xl shadow-lg hover:shadow-red-400 cursor-pointer transition-all duration-500 font-medium text-white py-4 px-6 card ">
						Sales & Business Development
					</div>
					<div className="text-xl shadow-lg hover:shadow-red-400 cursor-pointer transition-all duration-500 font-medium text-white py-4 px-6 card ">
						& Many More
					</div>
				</div>
			</div>
		</div>
	);
};

export default Industries;
