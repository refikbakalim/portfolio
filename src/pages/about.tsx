import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import profilePic from "../../public/images/profile-pic.png"
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion"
import type { RefObject } from 'react'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'

const AnimatedNumbers = ({ value }: { value: number }) => {

	const ref = useRef(null) as RefObject<HTMLSpanElement>;
	const motionValue = useMotionValue(0);
	const springValue = useSpring(motionValue, { duration: 3000 });
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (isInView) {
			motionValue.set(value)
		}
	}, [isInView, value, motionValue])

	useEffect(() => {
		springValue.on("change", (latest) => {
			if (ref.current && latest.toFixed(0) <= value) {
				ref.current.textContent = latest.toFixed(0)
			}
		})
	}, [value, springValue])

	return <span ref={ref}></span>
}

const about = () => {
	return (
		<>
			<Head>
				<title>About Page</title>
				<meta
					name="description"
					content="About Refik Bakalim"
				/>
			</Head>
			<main className='flex w-full flex-col item-center justify-center dark:text-light'>
				<Layout className='pt-12'>
					<AnimatedText text="A Journey Through Software Development!" className='mb-16' />
					<div className='grid w-full grid-cols-8 gap-16 '>
						<div className='col-span-3 flex flex-col items-start justify-start '>
							<h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>About Me</h2>
							<p className='font-medium'>
								I&#39;m Ahmet Refik Bakalim, a passionate software developer based in Turkey.
								My journey into the world of technology began at METU Ankara, where I pursued my degree in Computer Science from 2016 to 2022.
								Since then, I&#39;ve immersed myself in various roles, each contributing to my growth and expertise in the field. Notably, my time as a Software Engineer at Xcitium saw me deeply involved in full-stack web development, alongside managing cloud deployments.
								I also played a pivotal role in building and maintaining payment infrastructure, leveraging the Stripe API.
							</p>
							<p className='font-medium my-4'>
								My skill set is diverse, covering languages like C++, C#, Java, Python, and more.
								I&#39;ve worked extensively with cloud services such as AWS and Google Cloud, and my expertise extends to areas like database management systems, machine learning, and natural language processing.
								This breadth of knowledge has allowed me to contribute meaningfully to a range of projects, from Discord bots to VR games.
								Collaboration is key in this field, and I take pride in my ability to work effectively within teams, fostering creativity and innovation.
							</p>

							<p className='font-medium'>
								Beyond technical proficiency, effective communication is vital.
								I&#39;m fluent in English and have a basic proficiency in Japanese, which has proven invaluable in navigating multicultural work environments.
								My commitment to continuous learning and pushing the boundaries of innovation drives me forward.
								As I continue to evolve in my career, I remain dedicated to leveraging my skills and experience to create impactful solutions that positively shape the digital landscape.
							</p>
						</div>

						<div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light'>
							<div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
							<Image src={profilePic} alt="Headshot of Refik Bakalim" className="w-full h-auto rounded-2xl" priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
						</div>
						<div className='col-span-2 flex flex-col items-end justify-between'>

							<div className='flex flex-col items-end justify-center'>
								<span className='inline-block text-7xl font-bold'>
									<AnimatedNumbers value={1} />+
								</span>
								<h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>
									years of experience
								</h2>
							</div>
						</div>
					</div>
					<Skills />
					<Experience />
					<Education />
				</Layout>
			</main>
		</>
	)
}

export default about