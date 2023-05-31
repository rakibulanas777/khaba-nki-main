import React from "react";
import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";

const Testimonial = () => {
	var settings = {
		dots: true,
		infinite: false,
		speed: 500,
		arrows: false,
		slidesToShow: 2,
		slidesToScroll: 2,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div>
			<div className="container py-14 px-10 md:px-6 lg:px-0 mx-auto">
				<div className="text-start text-white font-medium text-2xl mb-4">
					What happy clients Say
				</div>

				<div className=" relative z-10">
					<Slider {...settings}>
						<div className="p-4">
							<div className="h-96 lg:h-72 flex flex-col justify-between testimonial p-8 rounded">
								<div>
									<img
										src="/assets/fontisto_quote-a-right.png"
										className="mb-2"
										alt=""
									/>
									<p className=" mb-8 text-xs">
										"RemoteHireNow has saved us thousands of dollars on hiring
										and growing my team quickly. I'd recommend them to any
										business looking to outsource."
									</p>
								</div>
								<div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
									<a className="inline-flex items-start">
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
									<div className="flex sm:justify-between items-center">
										<AiFillStar className="text-white" />
										<AiFillStar className="text-white" />
										<AiFillStar className="text-white" />
										<AiFillStar className="text-white" />
										<AiFillStar className="text-white" />
									</div>
								</div>
							</div>
						</div>
						<div className="p-4">
							<div className="h-96 lg:h-72 testimonial p-8 rounded">
								<img
									src="/assets/fontisto_quote-a-right.png"
									className="mb-2"
									alt=""
								/>
								<p className=" mb-8 text-xs">
									“RemoteHireNow surpassed my expectations with their
									personalized attention and commitment to understanding our
									company's unique needs. Their professionalism throughout the
									hiring process was exceptional, and they provided a remarkable
									pool of qualified candidates. Thanks to their efforts, we
									successfully filled key positions and their ongoing support
									has been invaluable to our team's success.”
								</p>{" "}
								<div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
									<a className="inline-flex items-start">
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
									<div className="flex sm:justify-between items-center">
										<AiFillStar className="text-white" />
										<AiFillStar className="text-white" />
										<AiFillStar className="text-white" />
										<AiFillStar className="text-white" />
										<AiFillStar className="text-white" />
									</div>
								</div>
							</div>
						</div>
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
