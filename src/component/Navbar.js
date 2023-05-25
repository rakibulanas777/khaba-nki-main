import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineCloseCircle } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";

function Navbar() {
	const [nav, setNav] = useState(false);
	const [color, setColor] = useState("transparent");
	const [textColor, setTextColor] = useState("white");
	const [active, setActive] = useState(0);
	console.log(nav);
	useEffect(() => {
		const changeColor = () => {
			if (window.scrollY >= 90) {
				setColor("transparent");
				setTextColor("#000000");
			} else {
				setColor("transparent");
				setTextColor("#000000");
			}
		};
		window.addEventListener("scroll", changeColor);
	}, []);

	return (
		<div className="  w-full z-30 relative ease-in duration-300 ">
			<div className="container mx-auto flex justify-between lg:justify-center  items-center px-10 lg:px-0 py-2 ">
				<Link
					href="/"
					className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
				>
					<img
						src="/assets/Jpeg-removebg-preview 1.png"
						alt=""
						className="h-20"
					/>
				</Link>
				<ul className="hidden  lg:flex lg:text-xl lg:justify-center mx-auto  lg:items-center font-semibold gap-3 md:space-x-4 !text-gray-900">
					{/* work */}
					<Link
						href="#aboutus"
						onClick={() => setActive(0)}
						className={
							active === 0
								? "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-purple-500"
								: "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-white"
						}
					>
						About us
					</Link>
					{/* login */}

					<Link
						href="#What"
						onClick={() => setActive(1)}
						className={
							active === 1
								? "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-purple-500"
								: "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-white"
						}
					>
						What We do
					</Link>
					<Link
						href="#Clients"
						onClick={() => setActive(2)}
						className={
							active === 2
								? "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-purple-500"
								: "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-white"
						}
					>
						Our Clients
					</Link>
					<Link
						href="#Contact"
						onClick={() => setActive(3)}
						className={
							active === 3
								? "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-purple-500"
								: "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-white"
						}
					>
						Contact
					</Link>
					<Link
						href="#job"
						onClick={() => setActive(4)}
						className={
							active === 4
								? "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-purple-500"
								: "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-white"
						}
					>
						Want a job?
					</Link>
				</ul>
				{/* Mobile Button */}
				<div className="block lg:hidden z-10">
					{nav ? (
						<AiOutlineClose
							className="text-white cursor-pointer"
							onClick={() => setNav(!nav)}
							size={26}
						/>
					) : (
						<HiMenu
							size={26}
							onClick={() => setNav(!nav)}
							className="text-white  cursor-pointer"
						/>
					)}
				</div>
				{/* Mobile Menu */}
				{nav && (
					<div
						className={
							"lg:hidden text-gray-900 absolute w-2/5 h-screen px-6 py-2 text-xl font-bold backdrop-blur-md bg-slate-900/70 top-0 duration-500 right-0 pt-16 "
						}
					>
						<ul className="flex flex-col space-y-5">
							<Link
								href="#aboutus"
								onClick={() => setActive(0)}
								className={
									active === 0
										? "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-purple-500"
										: "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-white"
								}
							>
								About us
							</Link>
							{/* login */}

							<Link
								href="#What"
								onClick={() => setActive(1)}
								className={
									active === 1
										? "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-purple-500"
										: "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-white"
								}
							>
								What We do
							</Link>
							<Link
								href="#Clients"
								onClick={() => setActive(2)}
								className={
									active === 2
										? "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-purple-500"
										: "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-white"
								}
							>
								Our Clients
							</Link>
							<Link
								href="#Contact"
								onClick={() => setActive(3)}
								className={
									active === 3
										? "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-purple-500"
										: "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-white"
								}
							>
								Contact
							</Link>
							<Link
								href="#job"
								onClick={() => setActive(4)}
								className={
									active === 4
										? "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-purple-500"
										: "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-white"
								}
							>
								Want a job?
							</Link>
						</ul>
					</div>
				)}
			</div>
		</div>
	);
}

export default Navbar;
