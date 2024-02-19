import React from 'react'
import { motion } from "framer-motion"


const Skill = ({ name, x, y }: { name: string, x: string, y: string }) => {
	return (
		<motion.div className='flex ğtems-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark'
			whileHover={{ scale: 1.05 }} initial={{ x: 0, y: 0 }} whileInView={{ x: x, y: y, transition: { duration: 1.5 } }} viewport={{ once: true }}>
			{name}
		</motion.div>
	)
}

const Skills = () => {
	return (
		<>
			<h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
			<div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark'>
				<motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark' whileHover={{ scale: 1.05 }}>
					Skills
				</motion.div>
				<Skill name="C++" x="-20vw" y="-4vw" />
				<Skill name="C" x="-6vw" y="-9vw" />
				<Skill name="SQL" x="3vw" y="-13vw" />
				<Skill name="NOSQL" x="22vw" y="-8vw" />
				<Skill name="Python" x="-7vw" y="-16vw" />
				<Skill name="C#" x="18vw" y="6vw" />
				<Skill name="HTML" x="15vw" y="18vw" />
				<Skill name="Java" x="0vw" y="7vw" />
				<Skill name="JavaScript" x="-20vw" y="-16vw" />
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