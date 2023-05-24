import Aos from "aos";
import React, { useEffect } from "react";

const Hero = () => {
	useEffect(() => {
		Aos.init();
		Aos.refresh();
	}, []);
	return (
		<div>
			<div className="container py-14 px-10 md:px-6 lg:px-0 mx-auto">
				<div className="grid grid-cols-1 mx-auto md:grid-cols-2 gap-8">
					<div
						className="flex flex-col items-center justify-between"
						data-aos="fade-up"
					>
						<div>
							<div className="text-4xl text-white font-semibold mb-6">
								High Quality, Cost Effective Services
							</div>
							<div className=" text-white  mb-8">
								Supercharge your business growth with our scalable virtual
								assistant hiring services. Eliminate legal hassles and paperwork
								burdens as we handle compliance matters seamlessly. Our tailored
								hiring process sources virtual assistants precisely matched to
								your requirements, providing exceptional results at a fraction
								of traditional employee costs. Unlock unparalleled efficiency
								and cost savings to propel your business forward.
							</div>
						</div>
						<button className="px-8 py-3 text-black bg-red-600 rounded-full button">
							Contact us
						</button>
					</div>
					<div className="p-5 cursor-pointer" data-aos="fade-down">
						<img src="/assets/Group 1000000845.png" alt="" className="w-full" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
