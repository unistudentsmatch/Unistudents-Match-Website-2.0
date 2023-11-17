import Link from "next/link";
import React from "react";

const Error404 = () => {
	return (
		<>
			<section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3 mb-10">
				<div className="">
					<h1 className="text-black font-semibold text-2xl mb-4">Page Not Found</h1>
					<p className="text-gray-500 xl:w-4/6 w-4/5 m-auto">The URL you are attempting to access cannot be found. Please verify the URL and attempt to access it again. </p>
					<div className="mt-10">
						<Link
							href="/"
							className="btn bg-unistudblue rounded-full px-10 text-sm font-semibold leading-6 text-white">
							Go Back
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};

export default Error404;
