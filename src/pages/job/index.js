import Navbar from "@/component/Navbar";
import Image from "next/legacy/image";
import React from "react";

const Job = () => {
	return (
		<>
			<div className="relative h-[650px] lg:h-[650px]">
				<Image
					src="/assets/Group 1000000849.png"
					layout="fill"
					alt="banner"
					objectFit="cover"
				/>
				<Navbar />
				<div className="absolute md:top-1/2 top-1/2  -translate-y-1/2 z-10 md:-translate-y-1/2  left-1/2 2xl:left-1/2 -translate-x-1/2  2xl:-translate-x-1/2  ">
					<div
						className="text-3xl sm:text-4xl  text-center  md:text-5xl lg:text-6xl leading-relaxed mb-4 font-bold text-white"
						data-aos="fade-down"
					>
						Looking to get hired?
					</div>
					<button
						className="px-8 sm:px-8 mx-auto mt-8 py-3 font-bold text-black bg-red-600 rounded-full flex items-center button"
						data-aos="fade-down"
					>
						<span>Apply Now</span>

						<img
							src="/assets/bi_arrow-up-right.png"
							alt=""
							className="pl-4 hidden sm:inline-block"
							srcset=""
						/>
					</button>
				</div>
			</div>

			<div className="container py-14 px-10 md:px-6 lg:px-0 mx-auto" id="What">
				<div className="grid grid-cols-1 mx-auto md:grid-cols-2 gap-8">
					<div
						className="flex flex-col items-center  justify-between"
						data-aos="fade-up"
					>
						<div>
							<div className=" text-white text-justify md:text-xl lg:text-2xl leading-relaxed font-light pr-10 mb-8 md:mb-0">
								Ready to embark on a rewarding journey as a virtual assistant?
								Join our dynamic team and unlock exciting opportunities to
								showcase your skills and make a meaningful impact. As a trusted
								virtual assistant hiring company, we connect talented
								individuals like you with businesses in need of exceptional
								support. Apply now to be part of our network, collaborate with
								diverse clients, and take your virtual assistant career to new
								heights!
							</div>
						</div>
					</div>
					<div className="p-5 cursor-pointer " data-aos="fade-down">
						<img
							src="/assets/Group 1000000845.png"
							alt=""
							className="w-full lg:h-[600px] lg:w-auto"
						/>
					</div>
				</div>
			</div>
			<div className="footer-part">
				<div className="container py-14 px-10 md:px-6 lg:px-0 mx-auto">
					<div className="flex flex-col mb-14 space-y-10 lg:space-y-0 lg:flex-row items-center justify-between">
						<div className="footer-card relative py-14 px-10  rounded-2xl">
							<img
								src="/assets/element.png"
								alt=""
								className="absolute -left-10 -top-10 translate-x-5 hidden md:inline-block translate-y-5"
							/>
							<div className="flex space-y-3 flex-col">
								<div className="text-xl text-black font-semibold">
									Sign Up to Receive Product Updates and More
								</div>
								<a
									href="mailto:youremail@gmail.com"
									className="text-xl text-black font-semibold"
								>
									youremail@gmail.com
								</a>
								<div className="text-black bg-black h-1"></div>
							</div>
						</div>
						<div className="flex text-center sm:text-start items-center space-y-5 flex-col  sm:flex-row sm:space-y-0 sm:space-x-10">
							<div className="flex flex-col space-y-4">
								<span className="text-white font-bold ">Office</span>
								<a className="link link-hover">
									545, Street 11, Block F <br /> California, U.S.A
								</a>
							</div>
							<div className="flex flex-col space-y-4">
								<span className="text-white font-bold ">Contact</span>
								<a className="link link-hover">+92 302 300 3215</a>
								<a className="link link-hover">ouraddress@email.com</a>
							</div>
						</div>
					</div>

					<div className="flex space-y-4 text-center md:text-start flex-col md:flex-row md:space-y-0 justify-between items-center">
						<div className=" text-white pt-6 md:pt-0 order-3 md:order-1">
							2022. All Rights Reserved
						</div>
						<div className=" flex space-x-4 text-white  order-1 md:order-2">
							{" "}
							<a className="link link-hover">Terms & Conditions</a>
							<a className="link link-hover">Privacy</a>
						</div>
						<div className="flex space-x-4 mb-4 md:mb-0 items-center text-white  order-2 md:order-3">
							<a href="http://" target="_blank" rel="noopener noreferrer">
								<img src="/assets/Vector.png" alt="" />
							</a>
							<a href="http://" target="_blank" rel="noopener noreferrer">
								<img src="/assets/logo-facebook.png" alt="" />
							</a>
							<a href="http://" target="_blank" rel="noopener noreferrer">
								<img src="/assets/logo-github.png" alt="" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Job;
