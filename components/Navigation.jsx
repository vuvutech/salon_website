// Navigation object
//-----------------------------------------------------------
export const links = [
	{ id: 1, href: "/", name: "Home", label: "home" },
	{ id: 2, href: "/about", name: "About", label: "about" },
	{ id: 2, href: "/services", name: "Services", label: "services" },
	{ id: 3, href: "/booking", name: "Booking", label: "booking" },
	{ id: 5, href: "/gift", name: "GiftCard", label: "gift" },
	{ id: 6, href: "/contact", name: "Contact", label: "contact" },
];

import Link from "next/link";
import React from "react";

const Navigation = () => {
	return (
		<header className='bg-white dark:bg-gray-900'>
			<div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
				<div className='flex h-16 items-center justify-between'>
					<div className='md:flex md:items-center md:gap-12'>
						<a
							className='block text-teal-600 dark:text-teal-600'
							href='#'>
							<span className='sr-only'>Home</span>
							Elsie Hair Salon
						</a>
					</div>

					<div className='hidden md:block'>
						<nav aria-label='Global'>
							<ul className='flex items-center gap-6 text-sm'>
								{links.map(
									(link) =>
										link.href !== "/booking" && (
											<li key={link.id}>
												<Link
													
													href={link.href}
													className='text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75'>
													{link.name}
												</Link>
											</li>
										)
								)}
							</ul>
						</nav>
					</div>

					<div className='flex items-center gap-4'>
						<div className='sm:flex sm:gap-4'>
							<label className='swap swap-rotate'>
								{/* this hidden checkbox controls the state */}
								<input
									type='checkbox'
									className='theme-controller'
									value='synthwave'
								/>

								{/* sun icon */}
								<svg
									className='swap-on fill-current w-5 h-5'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'>
									<path d='M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z' />
								</svg>

								{/* moon icon */}
								<svg
									className='swap-off fill-current w-5 h-5'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'>
									<path d='M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z' />
								</svg>
							</label>

							<div className='hidden sm:flex'>
								<Link
									className='rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75'
									href='/booking'>
									Bookings
								</Link>
							</div>
						</div>

						<div className='block md:hidden'>
							<button className='rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-5 w-5'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									strokeWidth={2}>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M4 6h16M4 12h16M4 18h16'
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navigation;
