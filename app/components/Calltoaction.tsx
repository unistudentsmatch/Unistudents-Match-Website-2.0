import React from "react";
import Image from "next/image";

const Calltoaction = () => {
	return (
		<>
			<section className="xl:px-40 py-2 m-5 mt-2 justify-center flex xl:mb-28">
				<div className="container grid grid-cols-1 gap-44 mb-24 h-96">
					<div className="overflow-hidden bg-unistudblue shad1 text-unistuddark background-image">
						<div className="md:px-10 md:py-10 m-14">
							<h2 className="font-bold text-unistudwhite mb-3 text-2xl xl:text-5xl md:text-5xl md:w-3/5 xl:w-4/5 w-full">Ready to get started? </h2>
							<p className="mt-5 xl:text-lg text-base xl:w-3/5 md:w-3/5 text-unistudwhite">Create an account, verify your account and start connecting with right matches based on who you&lsquo;re compatibile with.</p>

							<div className="md:flex mt-7 hidden">
								<Image
									src="/images/google.svg"
									alt=""
									width={160}
									height={160}
									className="me-5"
									priority
								/>
								<Image
									src="/images/apple.svg"
									alt=""
									width={150}
									height={150}
									className=""
								/>
							</div>
							<div className="md:hidden flex mt-7">
								<a
									href="#downloadApp"
									className="btn bg-unistudblue rounded-full px-10 text-sm font-semibold leading-6 text-white">
									Download App
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Calltoaction;
