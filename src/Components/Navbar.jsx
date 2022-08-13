import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<nav className="w-full flex justify-between items-center py-6 navbar">
			<img
				src={logo}
				alt="hooBank"
				title="hooBank"
				className="w-[124px] h-[32px]"
			/>

			<ul className="list-none sm:flex justify-end items-center flex-1 hidden">
				{navLinks.map((nav, index) => (
					<li
						key={nav.id}
						className={`font-poppins font-normal cursor-pointer tex-[16px] text-white  ${
							index === navLinks.length - 1 ? "mr-0" : "mr-10"
						}`}>
						<a href={`#${nav.id}`} className="">
							{nav.title}
						</a>
					</li>
				))}
			</ul>

			<div className="flex flex-1 justify-end items-center sm:hidden">
				<img
					src={isOpen ? close : menu}
					alt="menu"
					title="menu"
					className="w-[28px] h-[28px] object-contain cursor-pointer"
					onClick={() => {
						setIsOpen((prev) => !prev);
					}}
				/>

				<div
					className={`${
						isOpen ? "flex" : "hidden"
					} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
					<ul className="list-none flex flex-col justify-end items-center flex-1 ">
						{navLinks.map((nav, index) => (
							<li
								key={nav.id}
								className={`font-poppins font-normal cursor-pointer tex-[16px] text-white  ${
									index === navLinks.length - 1
										? "mb-0"
										: "mb-4"
								}`}>
								<a href={`#${nav.id}`} className="">
									{nav.title}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
