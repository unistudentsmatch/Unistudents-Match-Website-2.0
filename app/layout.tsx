import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Unistudents Match",
	description: "Helping you connect with the right person in the Halal way",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="en"
			data-theme="winter">
			<body className={`${inter.className} bg-slate-50`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
