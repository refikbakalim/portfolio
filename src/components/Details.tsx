import React, { useRef } from 'react'
import ListIcon from './ListIcon'
import { motion } from 'framer-motion'

const Details = ({ type, time, place, info, company, companyLink }: { type: string, time: string, place: string, info: string, company: string, companyLink: string }) => {
	const ref = useRef(null);
	return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]'>
		<ListIcon reference={ref} />
		<motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}>
			<h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
				{type}&nbsp;
				<a href={companyLink} target='_blank' className='text-primary capitalize dark:text-primaryDark'>@{company}</a>
			</h3>
			<span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
				{time} | {place}
			</span>
			<p className='font-medium w-full md:text-sm'>
				{info}
			</p>
		</motion.div>
	</li>
}

export default Details