import React from 'react'

const Home = () => {
    return (
        <div>
            <div className="relative z-0">
                <Solutions />
            </div>


            <div className="relative z-0 bg-[#0f3557]">
                <div className='mx-auto max-w-7xl px-4 sm:px-9 xl:max-w-7xl xl:px-0 space-y-10 mt-20 lg:mt-25 leading-relaxed py-16'>
                    <h1 class="relative inline-block after:content-[''] after:block after:w-[50px] after:h-[4px] after:bg-[#ff8200] after:absolute after:left-0 after:bottom-0 after:translate-y-[20px] text-3xl font-playfair my-5 text-[#fff] font-medium">
                        Invested
                    </h1>
                    <div className="relative flex items-center justify-center w-full h-full">
                        <img
                            src="/static/Herobanner/home5.jpg"
                            className="w-[800px] h-[400px] object-cover"
                            alt="Asset Management"
                        />
                        <div className="absolute flex items-center justify-center">
                            <FaCirclePlay color='#ff8200' size={40} />
                        </div>
                    </div>
                </div>
            </div>


            <div>
                {/* left side */}
                <div className='flex flex-col'>
                    <h1>HIGHLIGHTS</h1>
                    {/* image 1 */}
                    <div>


                        <div className='flex'>
                            <img src="static/Highlights/image1.png" alt="image1" className='w-[500px] h-[300px]' />
                            <div className=''>
                                <h4>ARTICLE</h4>
                                <a href="/">Destined
                                    Estates Lines Up a 36-Year-Old Rising Star as Next CEO</a>
                            </div>
                        </div>

                    </div>
                    {/* image 2 and image 3 */}
                    <div className='flex flex-row'>
                        <div>
                            <img src="static/Highlights/image2.png" alt="image2" className='w-[500px] h-[300px] object-cover' />
                            <div className=''>
                                <h4>ARTICLE</h4>
                                <a href="/">Destined
                                    Estates Lines Up a 36-Year-Old Rising Star as Next CEO</a>
                            </div>

                        </div>

                        <div>
                            <img src="static/Highlights/image3.png" alt="image2" className='w-[500px] h-[300px] object-cover' />
                            <div className=''>
                                <h4>VIDEO</h4>
                                <a href="/">Bruce
                                    Flatt on CNBC at the Milken Institute Global Conference</a>
                            </div>

                        </div>

                    </div>
                </div>

                {/* right */}
                <div>
                    <h1>FEATURED NEWS</h1>

                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home