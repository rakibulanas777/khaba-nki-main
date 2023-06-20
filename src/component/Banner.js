import Image from "next/legacy/image";
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import AOS from "aos";
const Banner = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<div className="relative h-[800px] lg:h-[700px] xl:h-screen ">
			<Image
				src="/assets/Component 7.png"
				layout="fill"
				alt="banner"
				objectFit="cover"
			/>
			<Navbar />
			<div className="absolute lg:pb-10 md:top-1/2 top-1/2  -translate-y-1/2 z-10 md:-translate-y-1/2  left-1/2 2xl:left-1/2 -translate-x-1/2  2xl:-translate-x-1/2  ">
				<div
					className="text-5xl  text-center  sm:text-6xl md:text-7xl lg:text-8xl leading-relaxed xl:text-9xl font-bold text-white"
					data-aos="fade-down"
				>
					Outsourcing <br /> Agency
				</div>
			</div>
			<img
				src="/assets/RemoteHireNow_Pitch_Deck__1_-removebg-preview 2.png"
				alt=""
				className="absolute top-1/4 -translate-y-1/2   right-0 h-[500px] md:h-screen z-0"
			/>

			<img
				src="/assets/Group 1000000831.png"
				className="absolute bottom-24 h-20 left-1/4 -translate-x-1/2"
				alt=""
			/>
			<div className="absolute bottom-10 px-10 xl:px-0  text-center xl:left-1/2 xl:-translate-x-1/2 2xl:left-1/2  2xl:-translate-x-1/2">
				<div className="flex items-center justify-center flex-col">
					<div
						className="text-white text-center xl:text-justify lg:text-base text-sm sm:text-md xl:text-xl "
						data-aos="fade-up"
					>
						Effortlessly scale your business with our streamlined virtual
						assistant hiring services. Experience exceptional results and
						savings with tailored assistants.
					</div>
					<button className="px-8 mt-8 py-3 mx-auto text-center font-semibold text-black bg-red-600 rounded-full flex items-center space-x-3 button">
						<span>Get Started </span>

						<img src="/assets/bi_arrow-up-right.png" alt="" srcset="" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
