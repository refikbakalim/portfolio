import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import { GitHubIcon } from '@/components/Icons'
import portfolioImage from "../../public/project-images/portfolio.png"
import lynarxtsImage from "../../public/project-images/lynarxts.png"
import lynarxpyImage from "../../public/project-images/lynarxpy.svg"
import lynarxjsImage from "../../public/project-images/lynarxjs.jpg"
import rowmatchImage from "../../public/project-images/row-match.png"
import requestTrackerImage from "../../public/project-images/request-tracker.png"
import echoImage from "../../public/project-images/echo.png"
import apiMonitorImage from "../../public/project-images/api-monitor.jpg"
import { motion } from 'framer-motion'
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const LongProject = ({ type, title, summary, img, link, githubLink, priority = false }: { type: string, title: string, summary: string, img: StaticImageData, link?: string, githubLink: string, priority?: boolean }) => {
	return (
		<article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
			<div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
			<Link href={link || githubLink} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg border border-dark shadow-lg lg:w-full'>
				<FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} priority={priority} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
			</Link>
			<div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
				<span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
				<Link href={link || githubLink} target="_blank" className='hover:underline underline-offset-2'>
					<h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
				</Link>
				<p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
				<div className='mt-2 flex items-center'>
					<Link href={githubLink} target="_blank" className='w-10'><GitHubIcon /></Link>
					{link &&
						<Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'>Visit Project</Link>
					}
				</div>
			</div>
		</article>
	)
}

const Project = ({ type, title, img, summary, githubLink }: { type: string, title: string, img: StaticImageData, summary: string, githubLink: string }) => {
	return (
		<article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
			<div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
			<Link href={githubLink} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
				<FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} />
			</Link>
			<div className='w-full flex flex-col items-start justify-between mt-4'>
				<span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
				<Link href={githubLink} target="_blank" className='hover:underline underline-offset-2'>
					<h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl'>{title}</h2>
				</Link>
				<p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
				<div className='w-full mt-2 flex items-center justify-between'>
					<Link href={githubLink} target="_blank" className='w-10'><GitHubIcon /></Link>
				</div>
			</div>
		</article>
	)
}


const projects = () => {
	return (
		<>
			<Head>
				<title>Projects Page</title>
				<meta
					name="description"
					content="Projects of Refik Bakalim"
				/>
			</Head>
			<TransitionEffect />
			<main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
				<Layout className='pt-16'>
					<AnimatedText text="Exploring My Coding Journey" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
					<div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
						<div className='col-span-12'>
							<LongProject type="Website" title="Portfolio Website"
								summary="Welcome to my personal portfolio website, the very platform you're currently exploring! Crafted with cutting-edge technologies such as React.js, Next.js, and Tailwind CSS, and powered by the versatility of TypeScript, this website showcases my skills, experiences, and projects. "
								img={portfolioImage} link="https://portfolio-three-pi-48.vercel.app/" githubLink="https://github.com/refikbakalim/portfolio" priority={true}/>
						</div>

						<div className='col-span-12'>
							<LongProject type="Discord Bot" title="lynarx.ts"
								summary="Lynarx is a comprehensive example of a Discord music bot, fully equipped with features such as database integration, a web dashboard, and more. Developed using discord.js and discord-player, this bot boasts an array of functionalities that make it user-friendly and customizable. It encompasses best practices and covers various concepts of discord-player, ensuring a robust performance. Written in Typescript. 
Additionally, Lynarx is deployed on Amazon EC2 with automatic deployment capabilities, ensuring seamless updates and maintenance for a hassle-free user experience."
								img={lynarxtsImage} link="https://www.lynarx.xyz/" githubLink="https://github.com/refikbakalim/lynarx.ts" priority={true}/>
						</div>

						<div className='col-span-6 sm:col-span-12'>
							<Project type="Discord Bot" title="lynarx.js"
								summary="My second Discord bot written in JavaScript using discord.js. It has functional music features but its other commands are experiments to learn about discord.js and slash commands which where new at the time. Later I utilized these knowledge for my latest bot, lynarx.ts."
								img={lynarxjsImage} githubLink="https://github.com/refikbakalim/lynarx.js" />
						</div>

						<div className='col-span-6 sm:col-span-12'>
							<Project type="Discord Bot" title="lynarx.py"
								summary="My first Discord bot crafted in Python using discord.py. It has multiple commands for music and a few others. I later abandoned this and went for Javascript/discord.js as it was the official library."
								img={lynarxpyImage} githubLink="https://github.com/refikbakalim/lynarx" />
						</div>

						<div className='col-span-12'>
							<LongProject type="Game" title="Row Match"
								summary="Row Match: A captivating Match-3 inspired game developed in Unity using C#. Challenge yourself to strategically align rows of matching game items within limited moves."
								img={rowmatchImage} githubLink="https://github.com/refikbakalim/row-match" />
						</div>

						<div className='col-span-12'>
							<LongProject type="Tracker + Dashboard website" title="API Monitor"
								summary="API Monitor efficiently tracks multiple APIs, visualizing performance metrics through graphs, all conveniently dockerized for streamlined management. Easily send requests to endpoints and access metrics via Prometheus for real-time monitoring. For advanced visualization, seamlessly combine Grafana with Prometheus to create insightful dashboards showcasing error rates and response times, empowering thorough analysis and optimization."
								img={apiMonitorImage} githubLink="https://github.com/refikbakalim/api-monitor" />
						</div>

						<div className='col-span-12'>
							<LongProject type="Tracker + Dashboard website" title="Request Tracker"
								summary="An agile request tracking system with a live graph dashboard, Dockerized for seamless deployment. It logs response times and timestamps, transferring data via Kafka to MongoDB. The live dashboard displays dynamic line graphs, updating every 3 seconds, offering real-time insights into request performance."
								img={requestTrackerImage} githubLink="https://github.com/refikbakalim/request-tracker" />
						</div>

						<div className='col-span-12'>
							<LongProject type="Messaging Server + Client" title="Echo"
								summary="Echo is a straightforward chat application that seamlessly transmits messages from client to server and echoes them back. Developed with Python using the Flask framework for the server side, and HTML, CSS, and JavaScript (utilizing the jQuery library) for the client side."
								img={echoImage} githubLink="https://github.com/refikbakalim/echo" />
						</div>
					</div>
				</Layout>
			</main>
		</>
	)
}

export default projects