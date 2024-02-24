import React from "react";

const Contact = () => {
	return (
		<div className='space-y-4'>
			<div className='w-auto  grid grid-cols-1 md:grid-cols-2 gap-4 my-4'>
      <div>
        <h2 className='text-3xl font-bold sm:text-4xl'>
						Address
					</h2>
					<ul className='space-y-3 mt-4'>
						<li className='flex items-start mt-5 lg:col-span-1 lg:mt-0'>
							<div className='flex-shrink-0'>
								<svg
									className='w-5 h-5 text-indigo-600'
									fill='currentColor'
									viewBox='0 0 20 20'>
									<path
										fillRule='evenodd'
										d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
										clipRule='evenodd'
									/>
								</svg>
							</div>
							<p className='ml-3 leading-5 text-gray-600'>
              28 Abel Moller St, Brackenhurst, Alberton, 1448, South Africa
							</p>
						</li>
						<li className='flex items-start mt-5 lg:col-span-1 lg:mt-0'>
							<div className='flex-shrink-0'>
								<svg
									className='w-5 h-5 text-indigo-600'
									fill='currentColor'
									viewBox='0 0 20 20'>
									<path
										fillRule='evenodd'
										d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
										clipRule='evenodd'
									/>
								</svg>
							</div>
							<p className='ml-3 leading-5 text-gray-600'>
              7 Deodar St, Mayberry Park, Alberton, 1481, South Africa
							</p>
						</li>
					</ul>
          
				</div>
				<div>
					<h2 className='text-3xl font-bold sm:text-4xl'>
						Operating Hours
					</h2>

					<p className='mt-4'>
          <ul className=' space-y-3 text-sm text-gray-700 dark:text-gray-200'>
							<li>Monday to Friday: 8am &#8212; 6pm</li>
							<li>Saturday 8am &#8212; 6pm</li>
							<li>Sunday 11am &#8212; 5pm</li>
						</ul>
					</p>
				</div>

				
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-4'>
				<div className='relative w-full h-96'>
					<iframe
						className='absolute top-0 left-0 w-full h-full'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.5312594685192!2d28.104173975418764!3d-26.309291577011887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9505dac3aabf73%3A0x2fb4a95bfb421287!2s28%20Abel%20Moller%20St%2C%20Brackenhurst%2C%20Alberton%2C%201448%2C%20South%20Africa!5e0!3m2!1sen!2sgh!4v1708695513353!5m2!1sen!2sgh'
						frameBorder='0'
						style={{ border: "0" }}
						allowFullScreen
						aria-hidden='false'
						tabIndex={0}></iframe>
				</div>
				<div className='relative w-full h-96'>
					<iframe
						className='absolute top-0 left-0 w-full h-full'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.2589230263807!2d28.1153767754191!3d-26.31811407700663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e951b2bfe541ae3%3A0xd2beecc6fb991f84!2s7%20Deodar%20St%2C%20Mayberry%20Park%2C%20Alberton%2C%201481%2C%20South%20Africa!5e0!3m2!1sen!2sgh!4v1708695729708!5m2!1sen!2sgh'
						frameBorder='0'
						style={{ border: "0" }}
						allowFullScreen
						aria-hidden='false'
						tabIndex={0}></iframe>
				</div>
			</div>
		</div>
	);
};

export default Contact;
