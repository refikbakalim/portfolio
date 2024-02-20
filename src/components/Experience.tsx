import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Details from './Details'

const Experience = () => {
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
				Experience
			</h2>

			<div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
				<motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark  origin-top  dark:bg-primaryDark dark:shadow-3xl' />
				<ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
					<Details
						type='Software Engineer' company='Xcitium R&D (a.k.a Nurd, Comodo)'
						time='2022-2023' place='Ankara, Turkey'
						info="Worked on full-stack web development and their deployments on cloud services. Also created and maintained payment infrastructure using Stripe API."
						companyLink='https://www.xcitium.com/'
					/>
					<Details
						type='Software Engineer Intern' company='Eksim Holding'
						time='2021' place='Ankara, Turkey'
						info="Worked on .NET Core web APIs"
						companyLink='https://www.eksim.com.tr/en/home-page'
					/>
					<Details
						type='Software Engineer Intern' company='EYESOFT'
						time='2019' place='Ankara, Turkey'
						info="Worked on creating VR games in UNITY environment with C#"
						companyLink='https://eyesoft.com.tr/index.php/en/anasayfa-english/'
					/>
				</ul>
			</div>
		</div>
	)
}

export default Experience