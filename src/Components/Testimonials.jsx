import React from "react";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";
const Testimonials = () => {
	return (
		<section id="clients" className="paddingY flexCenter flex-col relative">
			<div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

			<div className="w-full flex justify-between items-center flex-col md:flex-row mb-6 sm:mb-16 relative z-[1]">
				<h1 className="heading2">
					What people are <br className="sm:block hidden" /> saying
					about us
				</h1>
				<div className="w-full md:mt-0 mt-6">
					<p className="paragraph text-left max-w-[450px]">
						Everything you need to accept card payments and grow
						your business anywhere on the planet.
					</p>
				</div>
			</div>

			<div className="flex flex-wrap justify-center sm:justify-start w-full feedback-container relative z-[1]">
				{feedback.map((card) => (
					<FeedbackCard key={card.id} {...card} />
				))}
			</div>
		</section>
	);
};

export default Testimonials;
