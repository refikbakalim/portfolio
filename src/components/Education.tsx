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
			<h2 className='font-bold text-8xl mb-32 w-full text-center'>
				Education
			</h2>

			<div ref={ref} className='w-[75%] mx-auto relative'>
				<motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top' />
				<ul className='w-full flex flex-col items-start justify-between ml-4'>
					<Details
						type="BSc In Computer Engineering"
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