import Aos from "aos";
import React, { useEffect } from "react";

const Solution = () => {
	useEffect(() => {
		Aos.init();
		Aos.refresh();
	}, []);
	return (
		<div className="solution relative">
			<div className="pink-card absolute hidden lg:block left-0"></div>
			<div className="container mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-11 gap-8 mx-auto ">
					<div
						className=" py-14 lg:px-0 px-10 mx-auto text-center lg:col-span-4"
						data-aos="fade-up"
					>
						<img
							src="/assets/Group 1000000846.png"
							className="mx-auto text-center"
							alt=""
						/>
					</div>
					<div
						className=" px-10 lg:px-0 lg:col-span-7 pb-14 lg:py-14  mx-auto"
						data-aos="fade-down"
					>
						<div className="flex flex-col space-y-2 ">
							<div
								className="text-3xl font-bold text-white
                        "
							>
								Our Solution Approach
							</div>
							<div className="flex flex-col space-y-4">
								<div className="flex space-x-5" data-aos="zoom-in">
									<img src="/assets/Group.png" alt="" className="h-6" />
									<div>
										<div className=" font-semibold text-white mb-3">
											Scale With Ease
										</div>
										<div className=" text-sm text-gray-100">
											Supercharge your business growth and scale faster with our
											extensive talent pool of over 1000 ready-to-hire
											professionals, empowering you to meet your staffing needs
											in seconds.
										</div>
									</div>
								</div>
								<div className="flex space-x-5" data-aos="zoom-in">
									<img src="/assets/Group.png" alt="" className="h-6" />
									<div>
										<div className=" font-semibold text-white mb-3">
											Scale With Ease
										</div>
										<div className=" text-sm text-gray-100">
											Supercharge your business growth and scale faster with our
											extensive talent pool of over 1000 ready-to-hire
											professionals, empowering you to meet your staffing needs
											in seconds.
										</div>
									</div>
								</div>
								<div className="flex space-x-5" data-aos="zoom-in">
									<img src="/assets/Group.png" alt="" className="h-6" />
									<div>
										<div className=" font-semibold text-white mb-3">
											Scale With Ease
										</div>
										<div className=" text-sm text-gray-100">
											Supercharge your business growth and scale faster with our
											extensive talent pool of over 1000 ready-to-hire
											professionals, empowering you to meet your staffing needs
											in seconds.
										</div>
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
