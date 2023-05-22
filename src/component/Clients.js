import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Clients = () => {
	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
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
				<div className="text-center w-full mb-3 lg:mb-0 lg:w-96 mx-auto">
					Effortlessly scale your business with our streamlined virtual
					assistant hiring services. Experience exceptional results and savings
					with tailored assistants.
				</div>
				<div className="text-center text-white font-medium text-2xl mb-8">
					Our Clients
				</div>
				<div className=" ">
					<Slider
						{...settings}
						className=" flex px-10 justify-center gap-8 items-center space-x-10 "
					>
						<div className="logo cursor-pointer border-0 px-4">
							<img
								src="/assets/Vsion Logo 1.png"
								className="h-24"
								alt="logo "
							/>
						</div>
						<div className="logo cursor-pointer px-4">
							<img src="/assets/site_logo-10 1.png" alt="logo" />
						</div>
						<div className="logo cursor-pointer px-4">
							<img src="/assets/Group 1000000836.png" alt="logo" />
						</div>
						<div className="logo cursor-pointer px-4">
							<img src="/assets/logo 1.png" alt="logo" />
						</div>
						<div className="logo cursor-pointer px-4">
							<img
								src="/assets/Group 1000000838.png"
								className="h-24"
								alt="logo"
							/>
						</div>
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default Clients;
