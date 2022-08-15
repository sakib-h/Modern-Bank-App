import React from "react";
import { card } from "../assets";
import Button from "./Button";
const CardDeal = () => {
	return (
		<section className="flex md:flex-row flex-col paddingY">
			<div className="flex-1 flexStart flex-col">
				<h2 className="heading2">
					Find a better card deal
					<br className="sm:block hidden" /> in few easy steps.
				</h2>
				<p className="paragraph max-w-[480px] mt-5">
					Arcu tortor, purus in mattis at sed integer faucibus.
					Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices
					ac, ametau.
				</p>
				<Button styles="mt-10" />
			</div>
			<div className="flex-1 flexCenter md:ml-10 ml-0 md:mt-0 mt-10 relative">
				<img src={card} alt="card" className="w-[100%] h-[100%]" />
			</div>
		</section>
	);
};

export default CardDeal;
