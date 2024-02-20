import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import homeImage from "../../public/images/developer-pic.png"
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import lightBulb from "../../public/svgs/lightbulb.svg"

export default function Home() {
	return (
		<>
			<Head>
				<title>Home Page</title>
				<meta
					name="description"
					content="Home Page"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="flex items-center text-dark w-full min-h-screen dark:text-light">
				<Layout className="pt-0 md:pt-16 sm:pt-8">
					<div className="flex items-center justify-between w-full lg:flex-col">
						<div className="w-1/2 md:w-full">
							<Image src={homeImage} alt="" className="w-full h-auto lg:hidden md:inline-block md:w-full" priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"></Image>
						</div>
						<div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
							<AnimatedText text="Ahmet Refik Bakalım" className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl" />
							<p className="my-4 text-base font-medium md:text-sm sm:text-xs">
								As a dedicated software engineer, I am committed to translating innovative ideas into robust software solutions that elevate user experiences and drive technological advancement. With a meticulous approach and a deep understanding of software architecture, I strive to deliver solutions that not only meet but exceed expectations. Explore my portfolio to delve into my latest projects, where my expertise in software engineering principles shines through in every line of code.
							</p>
							<div className="flex items-center self-start mt-2 lg:self-center">
								<Link href="/dummy_CV.pdf" target={"_blak"} className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg 
								font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base">
									Resume <LinkArrow className="w-6 ml-1" />
								</Link>
								<Link href="mailto:refikbakalim@gmail.com" target={"_blank"} className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base">Contact</Link>
							</div>
						</div>
					</div>
				</Layout>
				<div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
					<Image src={lightBulb} alt="" className="w-full h-auto" />
				</div>
			</main>
		</>
	);
}
