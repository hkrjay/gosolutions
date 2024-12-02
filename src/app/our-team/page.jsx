'use client'

import React from 'react'
import { TeamCard } from '../components/teamcard'
import { teamData } from '../dummyData'

const OurTeam = () => {
    return (
        <>
            <section className="relative h-full z-0 lg:py-28 sm:pt-20 sm:pb-16 bg-[url('/images/services_bg.webp')] bg-cover bg-center bg-fixed bg-no-repeat">
                <div className="absolute inset-0 bg-black/40 -z-10"></div>
                <div className="text-white lg:max-w-screen-xl sm:max-w-screen-sm md:max-w-screen-md mx-auto text-center">
                    <p className='bg-gray-600/40 p-2 w-fit mx-auto text-sm'>Our Team</p>
                    <h1 className="lg:text-4xl sm:text-2xl font-semibold my-4">Meet Our Team</h1>
                    <p className="text-base text-gray-100 leading-6 lg:px-44">
                        Together, we are dedicated to delivering innovative solutions and exceeding expectations. From visionaries to problem-solvers, our team works collaboratively to create meaningful impact and bring ideas to life.                    </p>
                </div>
            </section>
            <section className='py-20 bg-gray-50'>
                <div className='lg:max-w-screen-xl sm:max-w-screen-sm mx-auto'>
                    <h1 className="text-4xl font-semibold my-4 text-center mb-7">Meet Our Team</h1>
                    <div className='grid lg:grid-cols-4 sm:grid-cols-1 lg:gap-x-10 sm:gap-x-0 gap-y-10'>
                        {teamData.map(data => (
                            <TeamCard key={data.id} data={data} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurTeam