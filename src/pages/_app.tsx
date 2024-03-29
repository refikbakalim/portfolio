import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { Analytics } from '@vercel/analytics/react';

const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-mont",
});


export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();

	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main
				className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen text-black`}
			>
				<NavBar />
				<AnimatePresence mode="wait">
					<Component key={router.asPath} {...pageProps} />
					<Analytics />
				</AnimatePresence>
				<Footer />
			</main>
		</>
	);
}
