import React from "react";
import { features } from "../constants";
import Button from "./Button";
const Business = () => {
	const FeatureCard = () => {
		return <div></div>;
	};
	return (
		<section id="features" className="flex md:flex-row flex-col paddingY">
			<div className="flex-1 flexStart flex-col">
				<h2 className="heading2">
					You do the business, <br className="sm:block hidden " />
					we’ll handle the money.
				</h2>
				<p className="paragraph max-w-[470px] mt-5">
					With the right credit card, you can improve your financial
					life by building credit, earning rewards and saving money.
					But with hundreds of credit cards on the market.
				</p>
				<Button styles="mt-10" />
			</div>

			<div className="flex-1 flexCenter flex-col md:ml-10 ml-0 md:mt-0 mt-10 relative">
				{features.map((index, feature) => (
					<FeatureCard key={feature.id} {...feature} index={index} />
				))}
			</div>
		</section>
	);
};

export default Business;
