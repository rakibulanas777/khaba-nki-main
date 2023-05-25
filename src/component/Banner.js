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
		<div className="relative h-screen lg:h-screen ">
			<Image
				src="/assets/Component 7.png"
				layout="fill"
				alt="banner"
				objectFit="cover"
			/>
			<Navbar />
			<div
				className="absolute md:top-1/4 top-1/2 -translate-y-1/2 z-10 md:-translate-y-1/4  left-1/4 -translate-x-1/2"
				data-aos="fade-down"
			>
				<p className="text-4xl sm:text-5xl md:text-6xl leading-relaxed lg:text-8xl font-bold text-white ">
					Outsourcing <br /> Agency
				</p>
			</div>
			<img
				src="/assets/RemoteHireNow_Pitch_Deck__1_-removebg-preview 2.png"
				alt=""
				className="absolute top-1/4 -translate-y-1/2   right-0 h-[550px] z-0"
			/>

			<img
				src="/assets/Group 1000000831.png"
				className="absolute bottom-24 h-16 left-1/4 -translate-x-1/2"
				alt=""
			/>
			<div className="absolute bottom-10 left-1/4 ">
				<div className="flex items-center justify-between flex-col">
					<div className="text-white ">
						Effortlessly scale your business with our streamlined virtual
						assistant hiring services. <br /> Experience exceptional results and
						savings with tailored assistants.
					</div>
					<button className="px-8 mt-8 py-3 mx-auto text-center text-black bg-red-600 rounded-full flex items-center space-x-3 button">
						<span>Get Started </span>

						<img src="/assets/bi_arrow-up-right.png" alt="" srcset="" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
