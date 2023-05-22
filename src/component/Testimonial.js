import React from "react";

const Testimonial = () => {
	return (
		<div>
			<div className="container py-14 px-10 md:px-6 lg:px-0 mx-auto">
				<div className="text-start text-white font-medium text-2xl mb-4">
					What happy clients Say
				</div>

				<div className="flex flex-col md:flex-row relative z-10 flex-wrap -m-4">
					<div className="p-4 md:w-1/2 w-full">
						<div className="h-full flex flex-col justify-between testimonial p-8 rounded">
							<div>
								<img
									src="/assets/fontisto_quote-a-right.png"
									className="mb-2"
									alt=""
								/>
								<p className=" mb-8 text-xs">
									"RemoteHireNow has saved us thousands of dollars on hiring and
									growing my team quickly. I'd recommend them to any business
									looking to outsource."
								</p>
							</div>
							<a className="inline-flex items-center">
								<img
									alt="testimonial"
									src="/assets/Ellipse 5.png"
									className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
								/>
								<span className=" pl-4">
									<span className="title-font font-medium text-white">
										Torch Labs Software LLC
									</span>
								</span>
							</a>
						</div>
					</div>
					<div className="p-4 md:w-1/2 w-full">
						<div className="h-full testimonial p-8 rounded">
							<img
								src="/assets/fontisto_quote-a-right.png"
								className="mb-2"
								alt=""
							/>
							<p className=" mb-8 text-xs">
								“RemoteHireNow surpassed my expectations with their personalized
								attention and commitment to understanding our company's unique
								needs. Their professionalism throughout the hiring process was
								exceptional, and they provided a remarkable pool of qualified
								candidates. Thanks to their efforts, we successfully filled key
								positions and their ongoing support has been invaluable to our
								team's success.”
							</p>
							<a className="inline-flex items-center">
								<img
									alt="testimonial"
									src="/assets/Ellipse 5.png"
									className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
								/>
								<span className=" pl-4">
									<span className="title-font font-medium text-white">
										Torch Labs Software LLC
									</span>
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
