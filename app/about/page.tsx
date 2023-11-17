import Image from "next/image";
import React from "react";
import Link from "next/link";
import Calltoaction from "../components/Calltoaction";

const About = () => {
	const abc = [
		{ number: "1", text: "Download the Unistudents Match App" },
		{ number: "2", text: "Create an account and setup your profile" },
		{ number: "3", text: "Start connecting with suggested match" },
	];

	return (
		<>
			<section className="h-screen mb-10">
				<section className="md:mt-20 xl:mt-20 mt-1 p-8">
					<div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
						<div className="xl:pl-32 md:px-10 px-3 hidden md:block xl:block">
							<Image
								src="/images/1.jpg"
								alt=""
								width="0"
								height="0"
								sizes="100vw"
								className="shad w-full rounded-lg"
							/>
						</div>

						<div className="xl:pr-32 xl:py-5 ">
							<h1 className="font-bold md:text-3xl xl:text-4xl text-3xl text-black">
								Developed with <span className="text-unistudblue"> undergraduates and graduates in mind</span>
							</h1>

							<div className="mt-7 mb-5 block md:hidden xl:hidden">
								<Image
									src="/images/1.jpg"
									alt=""
									width="0"
									height="0"
									sizes="100vw"
									className="shad w-full rounded-lg"
								/>
							</div>

							<p className="mt-8 text-base xl:text-xl md:pr-10 font-light text-gray-500">Tailored for both undergraduates and graduates, Unistudents Match has been developed with the unique needs of students at various academic levels in consideration.</p>
							<p className="mt-5 text-base xl:text-xl md:pr-10 font-light text-gray-500">Discover the significance of upholding halal matchmaking principles with Unistudents Match. Our platform is intricately crafted to prioritize these values, ensuring that your quest for a compatible partner effortlessly aligns with your faith and beliefs.</p>
							<div className="flex items-center">
								<div className="md:flex xl:flex block mt-8">
									<Image
										src="/images/apple.svg"
										alt=""
										width={160}
										height={160}
										className="m-auto"
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
			</section>

			<section className="mt-20 md:mb-24 xl:mb-44 mb-10 md:px-32">
				<div className="flex justify-center items-center m-auto px-7">
					<h1 className="text-5xl font-bold mb-14 text-black">
						Geting Started is <span className="text-unistudblue"> as easy as ABC</span>
					</h1>
				</div>

				<div className="md:flex gap-16 py-5 md:mt-10">
					{abc.map((steps) => (
						<div
							className="card w-96 bg-transparent mb-5 image-full px-7"
							key={steps.number}>
							<figure>
								<Image
									src="/images/pr.jpg"
									alt="Shoes"
									width={100}
									height={100}
									className="w-full"
								/>
							</figure>
							<div className="card-body">
								<h2 className="card-title text-white">{steps.number}</h2>
								<p className="p-10">{steps.text}</p>
							</div>
						</div>
					))}
				</div>
			</section>

			<Calltoaction />
		</>
	);
};

export default About;
