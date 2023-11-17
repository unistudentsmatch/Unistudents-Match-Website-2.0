"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const currentPath = usePathname();

	const links = [
		{ label: "Home", href: "/" },
		{ label: "About Us", href: "/about" },
		{ label: "FAQs", href: "/faq" },
		{ label: "Contact Us", href: "mailto:unistudentsmatch@gmail.com" },
	];

	return (
		<div className="p-10 sticky top-0 bg-slate-50 z-50">
			<header className="absolute inset-x-0 top-0">
				<nav
					className="flex items-center justify-between p-6 lg:px-8"
					aria-label="Global">
					<div className="flex lg:flex-1">
						<Link
							href="/"
							className="-m-1.5 p-1.5 xl:px-10">
							<Image
								className="h-10 w-auto"
								src="/images/lgg.png"
								alt=""
								width={100}
								height={100}
							/>
						</Link>
					</div>
					<div className="flex lg:hidden">
						<button
							type="button"
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
							onClick={() => setMobileMenuOpen(true)}>
							<span className="sr-only">Open main menu</span>
							<Bars3Icon
								className="h-6 w-6"
								aria-hidden="true"
							/>
						</button>
					</div>

					<div className="hidden lg:flex lg:gap-x-16">
						{links.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className={` ${link.href === currentPath ? "text-blue-700" : "text-zinc-800"} text-lg font-semibold leading-6 hover:text-blue-600 transition-colors`}>
								{link.label}
							</Link>
						))}
					</div>
					<div className="hidden lg:flex lg:flex-1 lg:justify-end xl:mr-10">
						<a
							href="#downloadApp"
							className="btn bg-unistudblue rounded-full px-10 text-sm font-semibold leading-6 text-white">
							Download App
						</a>
					</div>
				</nav>
				<Dialog
					as="div"
					className="lg:hidden"
					open={mobileMenuOpen}
					onClose={setMobileMenuOpen}>
					<div className="fixed inset-0 z-50" />
					<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-slate-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
						<div className="flex items-center justify-between">
							<Link
								href="#"
								className="-m-1.5 p-1.5">
								<span className="sr-only">Unistudents Match</span>
								<Image
									className="h-10 w-auto"
									src="/images/lgg.png"
									alt=""
									width={100}
									height={100}
								/>
							</Link>
							<button
								type="button"
								className="-m-2.5 rounded-md p-2.5 text-gray-700"
								onClick={() => setMobileMenuOpen(false)}>
								<span className="sr-only">Close menu</span>
								<XMarkIcon
									className="h-6 w-6"
									aria-hidden="true"
								/>
							</button>
						</div>
						<div className="mt-36 flex flex-col items-center justify-center text-center">
							<div className="-my-6 divide-y divide-gray-500/10">
								<div className="space-y-4 py-10 px-2">
									{links.map((link) => (
										<Link
											key={link.href}
											href={link.href}
											onClick={() => setMobileMenuOpen(false)}
											className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
											{link.label}
										</Link>
									))}
								</div>
								<div className="py-6">
									<a
										href="#downloadApp"
										onClick={() => setMobileMenuOpen(false)}
										className="btn bg-unistudblue rounded-full px-10 text-sm font-semibold leading-6 text-white">
										Download App
									</a>
								</div>
								<div>
									<Link
										href="/privacy"
										onClick={() => setMobileMenuOpen(false)}>
										Privacy Policy
									</Link>
								</div>
							</div>
						</div>
					</Dialog.Panel>
				</Dialog>

				<div
					className="modal backdrop-blur-3xl"
					id="downloadApp">
					<div className="modal-box">
						<h3 className="font-bold text-lg">Download Unistudents Match</h3>
						<p className="py-4">Click on the icons below to select your device</p>
						<div className="flex">
							<Image
								src="/images/google.svg"
								alt=""
								width={130}
								height={130}
								className="me-5"
								priority
							/>
							<Image
								src="/images/apple.svg"
								alt=""
								width={120}
								height={120}
								className=""
							/>
						</div>
						<div className="modal-action">
							<a
								href="#"
								className="btn">
								Close
							</a>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Navbar;
