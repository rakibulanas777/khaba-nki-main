import Aos from "aos";
import React, { useEffect } from "react";

const Solution = () => {
	useEffect(() => {
		Aos.init();
		Aos.refresh();
	}, []);
	return (
		<div className="solution">
			<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 mx-auto ">
				<div
					className="pink-card  py-14 px-10 container mx-auto"
					data-aos="fade-up"
				>
					<img src="/assets/Group 1000000846.png" alt="" />
				</div>
				<div className=" pb-14 lg:py-14 container mx-auto" data-aos="fade-down">
					<div className="flex flex-col space-y-3">
						<div
							className="text-4xl font-bold text-white
                        "
						>
							Our Solution Approach
						</div>
						<div className="flex flex-col space-y-6">
							<div className="flex space-x-5" data-aos="zoom-in">
								<img src="/assets/Group.png" alt="" className="h-6" />
								<div>
									<div className="text-xl font-semibold text-white mb-3">
										Scale With Ease
									</div>
									<div className="  text-gray-100">
										Supercharge your business growth and scale faster with our
										extensive talent pool of over 1000 ready-to-hire
										professionals, empowering you to meet your staffing needs in
										seconds.
									</div>
								</div>
							</div>
							<div className="flex space-x-5" data-aos="zoom-in">
								<img src="/assets/Group.png" alt="" className="h-6" />
								<div>
									<div className="text-xl font-semibold text-white mb-3">
										Scale With Ease
									</div>
									<div className="  text-gray-100">
										Supercharge your business growth and scale faster with our
										extensive talent pool of over 1000 ready-to-hire
										professionals, empowering you to meet your staffing needs in
										seconds.
									</div>
								</div>
							</div>
							<div className="flex space-x-5" data-aos="zoom-in">
								<img src="/assets/Group.png" alt="" className="h-6" />
								<div>
									<div className="text-xl font-semibold text-white mb-3">
										Scale With Ease
									</div>
									<div className="  text-gray-100">
										Supercharge your business growth and scale faster with our
										extensive talent pool of over 1000 ready-to-hire
										professionals, empowering you to meet your staffing needs in
										seconds.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Solution;
