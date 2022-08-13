import React from "react";
import {
	Navbar,
	Billing,
	CardDeal,
	Business,
	Clients,
	CTA,
	Stats,
	Footer,
	Testimonials,
	Hero,
} from "./Components";
const App = () => {
	return (
		<div className="bg-primary w-full overflow-hidden">
			<div className="paddingX flexCenter">
				<div className="boxWidth">
					<Navbar />
				</div>
			</div>

			<div className="bg-primary flexStart">
				<div className="boxWidth">
					<Hero />
				</div>
			</div>

			<div className="bg-primary paddingX flexStart">
				<div className="boxWidth">
					<Stats />
					<Business />
					<Billing />
					<CardDeal />
					<Testimonials />
					<Clients />
					<CTA />
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default App;
