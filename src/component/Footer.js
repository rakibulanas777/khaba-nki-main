import React from "react";

const Footer = () => {
	return (
		<div>
			<div className="container py-14 px-10 md:px-6 lg:px-0 mx-auto">
				<footer className="footer p-10 text-base-content">
					<div>
						<span className="footer-title">Home</span>
						<a className="link link-hover">About us</a>
						<a className="link link-hover">What We do</a>
						<a className="link link-hover">Our work</a>
						<a className="link link-hover">Say hi</a>
					</div>
					<div>
						<span className="footer-title">Resources</span>
						<a className="link link-hover">Support</a>
					</div>
					<div>
						<span className="footer-title">Main links</span>
						<a className="link link-hover">For Companies</a>
						<a className="link link-hover">Looking for work</a>
					</div>
					<div>
						<span className="footer-title">
							Subscribe Remote hire Now’s Newsletter
						</span>
						<div className="form-control w-full sm:w-80">
							<label className="label mb-4">
								<span className="label-text">
									Subscribe to be the first one to know about updates. Enter
									your email
								</span>
							</label>
							<div className="relative">
								<input
									type="text"
									placeholder="username@site.com"
									className="input input-bordered w-full sm:pr-16"
								/>
								<button className="btn hidden sm:inline bg-white text-black sm:absolute top-0 right-0 rounded-l-none">
									Subscribe
								</button>
								<br />
								<button className="btn mt-3 sm:hidden bg-white text-black  rounded-l-none">
									Subscribe
								</button>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</div>
	);
};

export default Footer;
