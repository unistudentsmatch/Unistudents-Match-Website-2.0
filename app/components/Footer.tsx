import Link from "next/link";
import Image from "next/image";
import React from "react";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
	return (
		<footer className="footer footer-center footer-horizontal p-10 bg-black text-white rounded-sm">
			<aside className="mt-10">
				<Image
					src="/images/lggg.png"
					alt="Unistudents Match"
					width="150"
					height="150"
					className="inline-block h-auto fill-current"
				/>
			</aside>

			<nav>
				<div className="grid grid-flow-col gap-4">
					<Link
						href="https://instagram.com/unistudentsmatch"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Unistudents Match on Instagram">
						<RiInstagramFill className="text-2xl" />
					</Link>
					<Link
						href="#"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Unistudents Match on social media">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							className="fill-current">
							<path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
						</svg>
					</Link>
				</div>
			</nav>

			<nav className="grid grid-flow-col gap-4 mt-5">
				<Link
					href="mailto:unistudentsmatch@gmail.com"
					className="link link-hover xl:text-xl">
					Contact
				</Link>
				<Link
					href="/privacy"
					className="link link-hover xl:text-xl">
					Privacy Policy
				</Link>
				<Link
					href="/terms-and-condition"
					className="link link-hover xl:text-xl">
					Terms &amp; Conditions
				</Link>
			</nav>

			<aside>
				<p className="mb-10 text-base-300">
					&copy; Unistudents Match - Developed by{" "}
					<Link
						href="https://hynitr.com"
						target="_blank"
						className="text-blue-600">
						Hynitr
					</Link>
				</p>
			</aside>
		</footer>
	);
};

export default Footer;
