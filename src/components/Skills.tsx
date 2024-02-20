import React from 'react'
import { motion } from "framer-motion"


const Skill = ({ name, x, y }: { name: string, x: string, y: string }) => {
	return (
		<motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'
			whileHover={{ scale: 1.05 }} initial={{ x: 0, y: 0 }} whileInView={{ x: x, y: y, transition: { duration: 1.5 } }} viewport={{ once: true }}>
			{name}
		</motion.div>
	)
}

const Skills = () => {
	return (
		<>
			<h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32 '>Skills</h2>
			<div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
			lg:bg-circularLightLg lg:dark:bg-circularDarkLg 
			md:bg-circularLightMd md:dark:bg-circularDarkMd 
			sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>
				<motion.div className='rounded-full p-8 shadow-dark cursor-pointer bg-dark dark:bg-light lg:p-6 md:p-4 xs:p-2' whileHover={{ scale: 1.05 }}>
				</motion.div>
				<Skill name="C++" x="-20vw" y="-4vw" />
				<Skill name="C" x="-6vw" y="-9vw" />
				<Skill name="SQL" x="3vw" y="-13vw" />
				<Skill name="NOSQL" x="22vw" y="-8vw" />
				<Skill name="Python" x="-7vw" y="-16vw" />
				<Skill name="C#" x="18vw" y="6vw" />
				<Skill name="HTML" x="15vw" y="21vw" />
				<Skill name="Java" x="0vw" y="7vw" />
				<Skill name="JavaScript" x="-20vw" y="-20vw" />
				<Skill name="TypeScript" x="-30vw" y="-13vw" />
				<Skill name="Vue.js" x="15vw" y="-18vw" />
				<Skill name="React.js" x="-30vw" y="13vw" />
				<Skill name="CSS" x="-22vw" y="23vw" />
				<Skill name="Next.js" x="-16vw" y="17vw" />
				<Skill name="AWS" x="-12vw" y="6vw" />
				<Skill name="Google Cloud" x="30vw" y="2vw" />
				<Skill name="Docker" x="1vw" y="-24vw" />
				<Skill name="Unity" x="27vw" y="15vw" />
				<Skill name="Stripe API" x="2vw" y="17vw" />
				<Skill name="Kafka" x="-36vw" y="-2vw" />
				<Skill name="Grafana" x="-4vw" y="23vw" />
				<Skill name="Prometheus" x="-25vw" y="2vw" />
			</div>
		</>
	)
}

export default Skills