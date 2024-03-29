import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'>
			<Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
				<span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
				<div className='flex items-center lg:py-2'>
					<Link href="https://github.com/refikbakalim/portfolio" target={"_blank"} className='underline underline-offset-2'>Source Code</Link>
				</div>
				<Link href="https://www.freepik.com/free-vector/programming-concept-illustration_7118756.htm#query=developer&position=6&from_view=search&track=sph&uuid=39db472e-7ea6-415b-ae72-c7582b28ff5f" target={"_blank"} className="ml-4 text-sm font-medium capitalize underline">Image by storyset  on Freepik</Link>
			</Layout>
		</footer>
	)
}

export default Footer