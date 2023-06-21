import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Aos from "aos";
import "aos/dist/aos";
const Clients = () => {
	useEffect(() => {
		Aos.init();
		Aos.refresh();
	}, []);
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		speed: 4000,
		autoplaySpeed: 4000,
		cssEase: "linear",
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
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
			<div
				className="container py-14 px-10 md:px-6 lg:px-0 mx-auto"
				id="Clients"
			>
				<div className="text-center text-white font-medium text-2xl mb-8">
					Our Clients
				</div>
				<div className=" px-10">
					<Slider
						{...settings}
						className=" flex items-center justify-center gap-8  "
					>
						<div className="logo cursor-pointer px-4" data-aos="zoom-in">
							<img
								src="/assets/image 1.png"
								className="items-center mx-auto content-center self-center"
								alt="logo"
							/>
						</div>
						<div
							className="logo cursor-pointer border-0 px-4"
							data-aos="zoom-in"
						>
							<img
								src="/assets/Vsion Logo 1.png"
								className="h-20 mx-auto self-center content-center items-center"
								alt="logo "
							/>
						</div>
						<div className="logo cursor-pointer px-4" data-aos="zoom-in">
							<img
								src="/assets/site_logo-10 1.png"
								alt="logo"
								className="items-center self-center content-center mx-auto"
							/>
						</div>
						<div className="logo cursor-pointer px-4" data-aos="zoom-in">
							<img
								src="/assets/Group 1000000836.png"
								className="items-center self-center content-center mx-auto"
								alt="logo"
							/>
						</div>
						<div className="logo cursor-pointer px-4" data-aos="zoom-in">
							<img
								src="/assets/logo 1.png"
								className="items-center self-center content-center mx-auto"
								alt="logo"
							/>
						</div>
						<div className="logo cursor-pointer px-4" data-aos="zoom-in">
							<img
								src="/assets/Group 1000000838.png"
								className=" h-20 mx-auto self-center content-center items-center"
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
