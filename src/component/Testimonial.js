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
		autoplay: true,
		speed: 10000,
		infinite: true,
		autoplaySpeed: 10000,
		cssEase: "linear",
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
											src="/assets/Ellipse 69.png"
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
											src="/assets/Ellipse 80.png"
											className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
										/>
										<span className=" pl-4">
											<span className="title-font font-medium text-white">
												Vsion Media
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
									“We can't recommend Remote Hire Now enough. Their seamless
									hiring process and top-notch virtual assistants have truly
									transformed our business. From day one, the virtual assistant
									we hired has been a valuable asset, allowing us to focus on
									strategic initiatives while knowing our day-to-day tasks are
									in capable hands.”
								</p>{" "}
								<div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
									<a className="inline-flex items-start">
										<img
											alt="testimonial"
											src="/assets/Ellipse 51.png"
											className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
										/>
										<span className=" pl-4">
											<span className="title-font font-medium text-white">
												Vsion Media
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
									“Remote Hire Now has been a game-changer for our startup. With
									their assistance, we were able to scale our operations rapidly
									without the need for a physical office or full-time employees.
									The virtual assistant they provided has become an integral
									part of our team, delivering exceptional support and
									contributing to our success.”
								</p>{" "}
								<div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
									<a className="inline-flex items-start">
										<img
											alt="testimonial"
											src="/assets/Ellipse 53.png"
											className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
										/>
										<span className=" pl-4">
											<span className="title-font font-medium text-white">
												Vsion Media
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
									“Remote Hire Now exceeded our expectations in every way. Their
									prompt and professional service made the virtual assistant
									hiring process effortless. The virtual assistant we hired has
									been an invaluable asset, taking care of administrative tasks
									flawlessly, allowing us to focus on strategic initiatives and
									growing our business.”
								</p>{" "}
								<div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
									<a className="inline-flex items-start">
										<img
											alt="testimonial"
											src="/assets/Ellipse 55.png"
											className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
										/>
										<span className=" pl-4">
											<span className="title-font font-medium text-white">
												Vsion Media
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
									“I can't imagine running my business without Remote Hire Now's
									virtual assistant services. Their commitment to finding the
									right fit for our unique requirements was impressive. The
									virtual assistant we hired has been a true partner, offering
									exceptional support and contributing to the efficiency and
									growth of our operations.”
								</p>{" "}
								<div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
									<a className="inline-flex items-start">
										<img
											alt="testimonial"
											src="/assets/Ellipse 57.png"
											className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
										/>
										<span className=" pl-4">
											<span className="title-font font-medium text-white">
												Vsion Media
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
