import Image from "next/legacy/image";
import React from "react";
import Navbar from "./Navbar";

const Banner = () => {
	return (
		<div className="relative h-screen lg:h-screen ">
			<Image
				src="/assets/Component 7.png"
				layout="fill"
				alt="banner"
				objectFit="cover"
			/>
			<div className="absolute md:top-1/4 top-1/2 -translate-y-1/2 z-10 md:-translate-y-1/4  left-1/2 -translate-x-1/2">
				<p className="text-3xl sm:text-4xl md:text-5xl leading-relaxed lg:text-7xl font-bold text-white">
					Outsourcing <br /> Agency
				</p>
			</div>
			<img
				src="/assets/RemoteHireNow_Pitch_Deck__1_-removebg-preview 2.png"
				alt=""
				className="absolute top-1/2 -translate-y-1/2  right-0 h-[550px] z-0"
			/>

			<img
				src="/assets/Group 1000000831.png"
				className="absolute top-1/2  left-10"
				alt=""
			/>
		</div>
	);
};

export default Banner;
