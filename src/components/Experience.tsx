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
						info="Actively participated in full-stack web development projects, overseeing deployment on cloud services such as AWS, Google Cloud Platform (GCP), and Kubernetes. Independently managed the integration and utilization of the Stripe API within projects, ensuring secure and efficient transaction processing."
						companyLink='https://www.xcitium.com/'
					/>
					<Details
						type='Software Engineer Intern' company='Eksim Holding'
						time='2021' place='Istanbul, Turkey'
						info="	Conducted research on database management systems while actively developing .NET Core Web APIs, exploring emerging trends in databases and applying the latest technologies in web development."
						companyLink='https://www.eksim.com.tr/en/home-page'
					/>
					<Details
						type='Software Engineer Intern' company='EYESOFT'
						time='2019' place='Ankara, Turkey'
						info="Developed VR games using Unity and C#, including a hands-on internship project focused on creating a simple VR game. Demonstrated proficiency in implementing realistic hand animations and interactive object manipulation within the Unity environment."
						companyLink='https://eyesoft.com.tr/index.php/en/anasayfa-english/'
					/>
				</ul>
			</div>
		</div>
	)
}

export default Experience