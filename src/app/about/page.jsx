import React from 'react'

const About = () => {
    return (
        <>
            <section className="relative h-full z-0 lg:py-36 sm:pt-20 sm:pb-16 bg-[url('/images/bg.webp')] bg-cover bg-center bg-fixed bg-no-repeat">
                <div className="text-white lg:max-w-screen-xl sm:max-w-screen-sm mx-auto text-center">
                    <p className='bg-gray-600/30 text-white p-2 w-fit mx-auto text-sm'>About Us</p>
                    <h1 className="lg:text-4xl sm:text-2xl font-semibold my-4">Providing Best IT Solutions</h1>
                    <p className="lg:text-base sm:text-sm text-gray-400 leading-6 lg:px-44 sm:px-0">
                        UpTech guarantees the highest standards in coding and design practices. Seamlessly integrating stunning styles and elements, UpTech empowers you to effortlessly create a professional website that truly shines.
                    </p>
                </div>
            </section>

            <section className="relative lg:max-w-screen-xl sm:max-w-screen-sm rounded-3xl mx-auto h-ful py-16 my-10 z-0 bg-[url('/images/black_pattern.jpg')] bg-cover bg-fixed bg-no-repeat">
                <div className="text-white p-10 text-center">
                    <p className='bg-gray-600/40 p-2 w-fit mx-auto text-xs rounded-md'>Our Vision</p>
                    <h1 className="text-4xl font-semibold my-4">Trusted By Business</h1>
                    <p className="mb-6 text-gray-400 leading-6 w-9/12 mx-auto">
                        We aspire to create a digital landscape where technology seamlessly enhances productivity, connectivity, and sustainability, fostering a brighter, more efficient, and inclusive future for all.
                    </p>
                    <button className='px-3 py-2 text-sm rounded-md bg-blue-700 border hover:bg-transparent text-gray-200 border-blue-700'>Lets Work Together.</button>
                </div>
            </section>
        </>
    )
}

export default About