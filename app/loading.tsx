import React from "react";

const Loading = () => {
	return (
		<div>
			<section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3 mb-10 animate-pulse">
				<div className="absolute top-0 left-0 w-full h-full overflow-hidden">
					<div className="min-w-full min-h-full absolute object-cover bg-gray-200"></div>
				</div>
				<div className="video-content space-y-2 md:w-3/5 xl:w-8/12 w-screen">
					<div className="md:text-7xl xl:text-8xl font-bold text-4xl h-16"></div>
					<div className="font-light md:text-2xl xl:text-3x md:pt-5 xl:pt-5 pt-1 w-4/5 md:w-10/12 xl:w-6/12 m-auto h-8"></div>
					<div className="flex justify-center items-center mt-5 h-16"></div>
				</div>
			</section>
		</div>
	);
};

export default Loading;
