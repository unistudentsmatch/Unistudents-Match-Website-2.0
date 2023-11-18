import React from "react";

const Loading = () => {
	return (
		<div>
			<section className="h-screen mb-10">
				<section className="mt-20 p-8 md:mt-20 xl:mt-20">
					<div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
						<div className="xl:pl-32 md:px-10 px-3 hidden md:block xl:block animate-pulse">
							<div className="w-full h-64 bg-gray-200 rounded-lg"></div>
						</div>
						<div className="xl:pr-32 xl:py-5">
							<div className="h-12 bg-gray-200 rounded w-3/4 animate-pulse"></div>
							<div className="mt-7 mb-5 block md:hidden xl:hidden animate-pulse">
								<div className="h-64 bg-gray-200 rounded-lg w-full"></div>
							</div>
							<div className="h-4 bg-gray-200 rounded w-full mt-8 animate-pulse md:h-5 xl:h-6"></div>
							<div className="h-4 bg-gray-200 rounded w-full mt-5 animate-pulse md:h-5 xl:h-6"></div>
							<div className="mt-8 animate-pulse">
								<div className="h-14 bg-gray-200 rounded md:w-1/6 xl:w-1/6 w-1/3"></div>
							</div>
						</div>
					</div>
				</section>
			</section>

			<section className="mt-20 mb-24 md:mb-24 xl:mb-44 md:px-32">
				<div className="flex justify-center items-center m-auto px-7">
					<div className="h-12 bg-gray-200 w-3/4 rounded animate-pulse"></div>
				</div>

				<div className="flex gap-16 py-5 mt-10">
					<div className="w-96 bg-transparent px-7 card mb-5 animate-pulse">
						<figure>
							<div className="h-32 bg-gray-200 w-full rounded"></div>
						</figure>
						<div className="card-body">
							<div className="card-title h-4 bg-gray-200 rounded w-1/6"></div>
							<div className="h-4 bg-gray-200 rounded w-full mt-10 p-10"></div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Loading;
