import React from "react";

const Email = () => {
	return (
		<div className="relative">
			<img
				src="/assets/RemoteHireNow_Pitch_Deck__1_-removebg-preview 1.png"
				className="absolute left-0 h-96 -top-1/2"
				alt=""
			/>
			<div className="container !z-10 relative  py-24 px-10 md:px-6 lg:px-0 mx-auto">
				<div className=" flex flex-col sm:flex-row space-x-8 items-center justify-center">
					<div className="text-xl font-medium text-white">
						contact@remotehitrenow.com
					</div>
					<button className="px-8 py-3 text-black bg-red-600 rounded-full button">
						Contact us
					</button>
				</div>
			</div>
		</div>
	);
};

export default Email;
