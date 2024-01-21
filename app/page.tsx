import Image from "next/image";
import Link from "next/link";
import Faqs from "./components/Faqs";
import Calltoaction from "./components/Calltoaction";

export default function Home() {
	return (
		<>
			{/* hero section */}
			<section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3 mb-10">
				<div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
					<video
						className="min-w-full min-h-full absolute object-cover"
						src="https://res.cloudinary.com/dh6edo2ek/video/upload/f_auto:video,q_auto/kmurwp0ve4gsjhf96xq7"
						autoPlay
						muted
						loop></video>
				</div>
				<div className="video-content space-y-2 md:w-3/5 xl:w-8/12 w-screen">
					<h1 className="md:text-7xl xl:text-8xl font-bold text-4xl">
						Find your <span className="text-unistudwhite">perfect</span> university <span className="text-unistudwhite">partner</span>
					</h1>
					<h3 className="font-light md:text-2xl xl:text-3x md:pt-5 xl:pt-5 pt-1 w-4/5 md:w-10/12 xl:w-6/12 m-auto">Unistudents Match is designed to help you connect with the right person in a halal way.</h3>

					<div className="flex justify-center items-center">
						<div className="md:flex xl:flex block mt-5">
							<Link
								href="https://play.google.com/store/apps/details?id=com.unistudentsmatch.app.twa"
								target="_blank">
								<Image
									src="/images/google.svg"
									alt=""
									width={160}
									height={160}
									className="m-auto md:me-5 xl:me-5 mb-3 md:mb-1 xl:mb-1"
									priority
								/>
							</Link>
							<Link href="https://apps.apple.com/us/app/unistudents-match/id6474815697" target="_blank"><Image
								src="/images/apple.svg"
								alt=""
								width={150}
								height={150}
								className="m-auto"
							/></Link>
						</div>
					</div>
				</div>
			</section>
			{/* End of hero section */}

			{/* about section */}
			<section className="md:mt-24 xl:mt-32 mt-10  md:mb-24 xl:mb-44 mb-10 p-8">
				<div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
					<div className="xl:pl-32 md:px-10 px-3 hidden md:block xl:block">
						<Image
							src="/images/ch.jpg"
							alt=""
							width="0"
							height="0"
							sizes="100vw"
							className="shad w-full rounded-lg"
						/>
					</div>

					<div className="xl:pr-32 xl:py-5 ">
						<h1 className="font-bold md:text-3xl xl:text-3xl text-2xl text-black">
							The FIRST-EVER Matchmaking Service For <span className="text-unistudblue"> Muslim University Students  And Graduates</span>
						</h1>

						<div className="mt-7 mb-5 block md:hidden xl:hidden">
							<Image
								src="/images/ch.jpg"
								alt=""
								width="0"
								height="0"
								sizes="100vw"
								className="shad w-full rounded-lg"
							/>
						</div>

						<p className="mt-8 text-base xl:text-xl md:pr-10 font-light text-gray-500">We understand the challenges of finding that special someone to share life&apos;s journey with, especially when you&apos;re looking for a deep compatibility that aligns with your values as a practicing Muslim.</p>
						<p className="mt-5 text-base xl:text-xl md:pr-10 font-light text-gray-500">We also understand the importance of adhering to the principles of halal matchmaking, and Unistudents Match has been meticulously designed with these values in mind to ensure that your search for a compatible partner aligns seamlessly with your faith and beliefs.</p>
						<div className="flex items-center">
							<div className="md:flex xl:flex block mt-8">
								<Link href="https://apps.apple.com/us/app/unistudents-match/id6474815697" target="_blank"><Image
									src="/images/apple.svg"
									alt=""
									width={160}
									height={160}
									className="m-auto"
								/></Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* End of about section */}

			{/* features section */}
			<section className="xl:px-48 md:px-14 py-2 mt-14 justify-center flex">
				{/*<h1 className='text-3xl md:text-5xl w-64 md:w-6/12 md:leading-[3.7rem]'> What <span className='text-thegrtnxyellow'>can I do?</span> </h1>*/}

				<div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-5">
					<div className="overflow-hidden text-unistuddark rounded-lg">
						<div className="p-8 sm:p-9 md:p-10 xl:p-9">
							<h2 className="font-bold mb-3 mt-3 xl:text-3xl text-2xl">Purity </h2>
							<p className="mb-5 mt-5 text-md font-light">Unlike many other matrimonial websites, we pride ourselves on the unique features we have introduced to keep this website in accordance with Islamic beliefs.</p>
						</div>

						<div className="p-8 sm:p-9 md:p-10 xl:p-9">
							<h2 className="font-bold mb-3 mt-3xl:text-3xl text-2xl xl:mt-10">Privacy </h2>
							<p className="mb-5 mt-5 text-md font-light">We understand that privacy is important for you. Your personal data will remain private with us. You can even choose which members can see your photos.</p>
						</div>
					</div>

					<div className="overflow-hidden text-unistuddark rounded-lg">
						<div className="">
							<video
								className="rounded-xl"
								src="https://res.cloudinary.com/dh6edo2ek/video/upload/v1699839170/elojwjchxup1riocupeq.mp4"
								width="980"
								height="980"
								autoPlay
								muted
								loop></video>
						</div>
					</div>

					<div className="overflow-hidden text-unistuddark rounded-lg">
						<div className="p-8 sm:p-9 md:p-10 xl:p-9">
							<h2 className="font-bold mb-3 mt-3 xl:text-3xl text-2xl">Security </h2>
							<p className="mb-5 mt-5 text-md font-light">We care about your security and we use industry-leading technologies such as Business Validated Secure Sockets Layer (SSL) to keep your data safe.</p>
						</div>

						<div className="p-8 sm:p-9 md:p-10 xl:p-9">
							<h2 className="font-bold mb-3 mt-3 xl:mt-20 xl:text-3xl text-2xl">NO Foul Language </h2>
							<p className="mt-5 text-md font-light">We created Unistudents Match to help you connect with the right person in a halal way.</p>
						</div>
					</div>
				</div>
			</section>
			{/* End of featues section */}

			{/* FAQs section */}
			<Faqs />
			{/* End of FAQs section */}

			{/* Call to action section */}
			<Calltoaction />
			{/* End Call to action section */}
		</>
	);
}
