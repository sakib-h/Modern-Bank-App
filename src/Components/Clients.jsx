import React from "react";
import { clients } from "../constants";
const Clients = () => {
	return (
		<section className="flexCenter my-4 ">
			<div className="flexCenter flex-wrap w-full">
				{clients.map((client) => (
					<div
						key={client.id}
						className="flex-1 flexCenter min-w-[120px] sm:min-w-[192px] ">
						<img
							src={client.logo}
							alt="client"
							className="w-[100px] sm:w-[192px] object-contain cursor-pointer hover:brightness-[200%]"
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default Clients;
