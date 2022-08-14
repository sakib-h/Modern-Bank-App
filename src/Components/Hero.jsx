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
						<span className="text-gradient">Generation</span>
					</h1>
					<div className="ss:flex hidden mr-0 md:mr-4">
						<GetStarted />
					</div>
				</div>

				<h1 className="flex-1 font-poppins font-semibold text-[52px] ss:text-[68px] text-white leading-[75px] ss:leading-[100px] w-full">
					Payment Method.
				</h1>
				<p className="paragraph max-w-[470] mt-5">
					Our team of experts uses a methodology to identify the
					credit cards most likely to fit your needs. We examine
					annual percentage rates, annual fees.
				</p>
			</div>
			<div className="flex-1 flexCenter my-10 md:my-0 relative">
				<img
					src={robot}
					alt="billing"
					className="w-[100%] h-[100%] relative z-[5]"
				/>
				<div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
				<div className="absolute z-[1] w-[80%] h-[80%] bottom-40 rounded-full white__gradient"></div>
				<div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>
			</div>

			<div className="ss:hidden flexCenter ">
				<GetStarted />
			</div>
		</section>
	);
};

export default Hero;
