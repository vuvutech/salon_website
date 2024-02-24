import React from 'react'

const Header = () => {
  return (
    <header className="">
    <div
        className='w-full bg-center  bg-cover h-[28rem] rounded-b-3xl'
        style={{ backgroundImage: "url('./johannesburg.jpg')" }}>
        <div className='flex items-center justify-start w-full h-full bg-gray-900/40 rounded-b-3xl'>
            <div className='text-left max-w-4xl lg:px-8 px-2 '>
                <h1 className='block text-2xl font-bold  sm:text-4xl lg:text-6xl text-white dark:text-white'>
                    Premier Hair Salon in{" "}
                    <span className='text-yellow-600'>
                        Johannesburg
                    </span>
                </h1>
                <div className='flex justify-start '>
                    <p className='mt-3 text-2xl text-white dark:text-gray-400'>
                        Since our launch in 2013{" "}
                        <span className='text-teal-600'>
                            Elsie Hair Salon
                        </span>{" "}
                        focus has been to provide a great range of
                        hair and beauty services in modern and
                        relaxed salon environments. With salon based
                        in Johannesburg Alberton, Elsie Hair Salon
                        offers a refreshing approach to hair and
                        beauty.
                    </p>
                </div>

                <div>
                <button className="btn btn-wide">
                    Book Your Experience
                </button>
                </div>
            </div>
        </div>
    </div>
</header>
  )
}

export default Header