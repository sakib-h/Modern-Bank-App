import React from "react";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
const Hero = () => {
	return (
		<section id="home" className="flex flex-col md:flex-row paddingY">
			<div className="flex-1 flexStart flex-col px-6 sm:px-16 xl:px-0">
				<div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
					<img
						src={discount}
						alt="discount"
						className="w-[32px] h-[32px]"
					/>
					<p className="paragraph ml-2">
						<span className="text-white">20%</span> Discount For{" "}
						<span className="text-white"> 1 Month </span> Account
					</p>
				</div>

				<div className="flex flex-row justify-between items-center w-full">
					<h1 className="flex-1 font-poppins font-semibold text-[52px] ss:text-[72px] text-white leading-[75px] ss:leading-[100px]">
						The Next <br className="sm:block hidden" />{" "}
						<span className="text-gradient">Generation</span>{" "}
						Payment Method.
					</h1>
					<div className="ss:flex hidden mr-0 md:mr-4">
						<GetStarted />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
