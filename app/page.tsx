import Image from "next/image";

export default function Home() {
	return (
		<>
			<section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3 mb-10">
				<div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
					<video
						className="min-w-full min-h-full absolute object-cover"
						src="/videos/1.mp4"
						autoPlay
						muted
						loop></video>
				</div>
				<div className="video-content space-y-2 md:w-3/5 xl:w-8/12 w-screen">
					<h1 className="md:text-7xl xl:text-8xl font-bold text-4xl">
						Find your <span className="text-unistudwhite">perfect</span> university <span className="text-unistudwhite">partner</span>
					</h1>
					<h3 className="font-light md:text-2xl xl:text-3x md:pt-5 xl:pt-5 pt-1 w-3/5 md:w-10/12 xl:w-6/12 m-auto">Unistudents Match is designed to help you connect with the right person in a halal way.</h3>

					<div className="flex justify-center items-center">
						<div className="md:flex xl:flex block mt-5">
							<Image
								src="/images/google.svg"
								alt=""
								width={160}
								height={160}
								className="m-auto md:me-5 xl:me-5 mb-3"
								priority
							/>
							<Image
								src="/images/apple.svg"
								alt=""
								width={159}
								height={150}
								className="m-auto"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
