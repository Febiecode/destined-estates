import React from 'react'
import Menu from "@/components/molecules/Menu";

const RealEstatePresence = () => {
    return (
        <>
            <div className="relative">
                {/* Transparent Menu */}
                <div className="absolute top-0 left-0 w-full z-10">
                    <Menu />
                </div>

                {/* HeroBanner below Menu */}
                <div className="relative w-full h-[300px] overflow-hidden">
                    <div className="relative w-full flex transition-transform ease-in-out duration-1000" >

                        <div className="w-full flex-shrink-0">
                            <img src="/static/Herobanner/home4.jpg" alt="who we are" className="w-full h-[300px] object-cover" />
                        </div>

                    </div>

                    {/* Static content over slides */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white w-full px-4 lg:px-0">
                        <h1 className="text-5xl lg:text-5xl font-bold mb-4 text-center font-playfair pb-3">Real Estate Presence</h1>


                    </div>
                </div>
            </div>



            <div className=''>
                <div className='mx-auto max-w-7xl px-4 sm:px-9 xl:max-w-7xl xl:px-0 space-y-10 leading-relaxed py-16'>
                    <h1 class="relative inline-block after:content-[''] after:block after:w-[50px] after:h-[4px] after:bg-[#ff8200] after:absolute after:left-0 after:bottom-0 after:translate-y-[20px] text-3xl font-playfair my-5 text-[#0F3557] font-medium">
                        Real Estate Presence
                    </h1>

                    <div className='max-w-3xl xl:px-0 space-y-10'>
                        <p className='font-playfair text-[#0F3557] text-2xl'>
                            Well established mode of operandum in all parts of Chennai, enable us to readily intersect
                            where attractive opportunities emerge.
                        </p>
                    </div> 

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                        <div>
                            <h3 className='text-[#0F3557] font-opensans text-xl mb-3'>Local Insights</h3>
                            <p className='text-lg text-gray-500'>
                                Our on-the-ground presence in key locations around the city gives us knowledge of
                                local market conditions and trends, as well as access to proprietary deal flow.
                            </p>
                        </div>
                        <div>
                            <h3 className='text-[#0F3557] font-opensans text-xl mb-3'>Strategic Flexibility</h3>
                            <p className='text-lg text-gray-500'>
                                Quickly scaling up to put our Real estate ideas into action, allows us to allocate
                                luxury properties where it is otherwise scarce, acquire intellectual assets for
                                effective deal closures and leverage our operating expertise, enhancing the value of
                                our services.
                            </p>
                        </div>
                        <div>
                            <h3 className='text-[#0F3557] font-opensans text-xl mb-3'>Contributing to the local communities</h3>
                            <p className='text-lg text-gray-500'>
                                We are actively involved in the communities in which we operate—creating jobs,
                                contributing to local talents by ensuring white collar jobs.
                            </p>
                        </div>
                    </div>

                </div>

            </div>



        </>
    )
}

export default RealEstatePresence