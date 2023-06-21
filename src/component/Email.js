import Aos from "aos";
import React, { useEffect } from "react";

const Email = () => {
	useEffect(() => {
		Aos.init();
		Aos.refresh();
	}, []);
	return (
		<div className="relative">
			<img
				src="/assets/RemoteHireNow_Pitch_Deck__1_-removebg-preview 1.png"
				className="absolute left-0 h-96 -top-1/2 "
				data-aos="zoom-in"
				alt=""
			/>
			<div className="container !z-10 relative  py-24 px-10 md:px-6 lg:px-0 mx-auto">
				<div
					className=" flex flex-col sm:flex-row space-y-4 sm:space-y-0 space-x-8 items-center justify-center"
					data-aos="zoom-in"
				>
					<div className="text-xl font-medium text-white">
						contact@remotehitrenow.com
					</div>
					<button className="px-8  py-3 mx-auto text-center text-black bg-red-600 rounded-full flex items-center space-x-3 button">
						<span>Get Started </span>

						<img src="/assets/bi_arrow-up-right.png" alt="" srcset="" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Email;
