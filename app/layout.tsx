import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://unistudentsmatch.com"),
	title: {
		default: "Unistudents Match",
		template: "%s | Unistudents Match",
	},
	description: "Helping you connect with the right person in the Halal way",
	openGraph: {
		title: "Unistudents Match",
		description: "The first matchmaking service for Muslim university students and graduates.",
		url: "/",
		siteName: "Unistudents Match",
		images: ["/images/ch.jpg"],
		type: "website",
	},
	twitter: { card: "summary_large_image" },
	alternates: { canonical: "/" },
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
