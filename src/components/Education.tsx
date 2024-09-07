import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Details from './Details'

const Education = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll(
		{
			target: ref,
			offset: ["start end", "center start"]
		}
	);

	return (
		<div className='my-64'>
			<h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl md:mb-16 xs:text-4xl'>
				Education
			</h2>

			<div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
				<motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-primaryDark md:w-[2px] md:left-[30px] xs:left-[20px] dark:shadow-3xl' />
				<ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
					<Details
						type="MSc in Applied Computer Science and Artificial Intelligence"
						time="Sep 2024 - Sep 2025"
						company="University of Bradford"
						companyLink="https://www.bradford.ac.uk/courses/pg/applied-computer-science-artificial-intelligence/"
						place="Bradford, UK"
						info='Machine Learning, Cloud AI, Big Data, Mobile Application Development'
					/>
					<Details
						type="BSc in Computer Engineering"
						time="2016-2022"
						company="Middle East Technical University (METU)"
						companyLink="https://ceng.metu.edu.tr/"
						place="Ankara, Turkey"
						info='Relevant computer engineering/science courses. Studied Machine Learning, Natural Language Proccessing, Computer Vision, Database Management Systems                  as technical electives.'
					/>
				</ul>
			</div>
		</div>
	)
}

export default Education