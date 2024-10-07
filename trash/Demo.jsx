import React from 'react'
import Menu from "@/components/molecules/Menu";

const WhoWeAre = () => {
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
                            <img src="/static/Herobanner/home2.jpg" alt="who we are" className="w-full h-[300px] object-cover" />
                        </div>

                    </div>

                    {/* Static content over slides */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white w-full px-4 lg:px-0">
                        <h1 className="text-5xl lg:text-5xl font-bold mb-4 text-center font-playfair pb-3">Who We Are</h1>


                    </div>
                </div>
            </div>

            <div className='mx-auto max-w-7xl px-4 sm:px-9 xl:max-w-7xl xl:px-0 space-y-10 mt-20 lg:mt-32'>
                <p className='font-playfair text-[#0F3557] text-2xl'>
                    Destined Estates is a leader in communications for Luxury Real Estate solutions that
                    support connectivity throughout the Globe with a single intent to deliver your
                    Destined Home in your Destined Hands.


                </p>
                <br />
                <p className='font-playfair text-[#0F3557] text-2xl'>
                    Destined estates is a leading real estate firm in India specializing in Luxury residential &
                    Commercial real estate. Our origin as operators of high-end real estate business, allows us
                    to leverage unique operational expertise to merge luxury properties as per client
                    satisfaction. We put our own professionalism to work alongside our clients in nearly every
                    transaction ensuring strong alignment of interests.</p>
            </div>

            <div className='bg-[#f2f5f8]'>
                <div className='mx-auto max-w-7xl px-4 sm:px-9 xl:max-w-7xl xl:px-0 space-y-10 mt-20 lg:mt-32 leading-relaxed py-16'>
                    <h1 class="relative inline-block after:content-[''] after:block after:w-[50px] after:h-[4px] after:bg-[#ff8200] after:absolute after:left-0 after:bottom-0 after:translate-y-[20px] text-3xl font-playfair my-5 text-[#0F3557] font-medium">
                        Leveraging the Destined Estates Property Ecosystem
                    </h1>

                    <p className='font-playfair text-[#0F3557] text-2xl max-w-4xl leading-relaxed'>
                        One of the keys to our success is the Destined Estates Property ecosystem. Our network of
                        sales professionals, field agents, and operating employees in our businesses around the
                        spectrum provide us valuable information and insights into the shape shifting world of
                        luxury Real estate, on where the world is going and how it&#39;s changing. This helps inform
                        our clients on the current market standards and add value to the business we own.
                    </p>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                        <div>
                            <h3 className='text-[#0F3557] font-opensans text-xl mb-3'>Gathering Operational Intelligence</h3>
                            <p className='text-lg text-gray-500'>
                                Our operations in strategic locations around the city of Chennai, provide us with
                                data and insights into trends and changes in the market. You can count on our
                                client centric teams to deliver an efficient and predictable experience. Our in-house
                                teams of sales managers and rental specialists support your journey with us from
                                start to finish.
                            </p>
                        </div>
                        <div>
                            <h3 className='text-[#0F3557] font-opensans text-xl mb-3'>Turning insights into action</h3>
                            <p className='text-lg text-gray-500'>
                                We leverage this intelligence to source, execute, manage and realize Properties for
                                the benefit of our clients and partners. With seasoned professionals on our side, we
                                have the expertise and scale to support even the most ambitious Customer goals.
                            </p>
                        </div>
                        <div>
                            <h3 className='text-[#0F3557] font-opensans text-xl mb-3'>Connecting with confidence</h3>
                            <p className='text-lg text-gray-500'>
                                The Destined Estates Ecosystem drives competitive advantages in sourcing,
                                executing, managing, and realizing Properties. With a focus of maximizing efficiency
                                and streamlining processes, we are committed to leveraging technology, such as
                                online real estate portals, digital marketing platforms, our site locater online makes
                                up for reliable real estate site information, so the clients can make informed
                                decisions about their investments, monetary coverage and capacity goals.
                            </p>
                        </div>
                    </div>

                </div>

            </div>




            {/* Section 4 */}
            <section className="relative py-16 bg-gray-200">
                    <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row-reverse items-center">
                        <div className="lg:w-1/2 p-5">
                            <h2 className="text-purple-950 text-3xl lg:text-4xl font-bold mb-4  text-left">Our Values</h2>
                            <p className="text-lg md:text-lg lg:text-xl !leading-relaxed">
                                From starting the conversation to sealing the deal, your Destined estates agent is committed to earning and keeping your trust forever. We&#39;re part of anywhere, A true leader in residential Luxury real estate.
                            </p>
                        </div>
                        <div className="md:w-full lg:w-1/2 p-5 overflow-hidden">
                            <ScrollParallax speed={-10}>
                                <Parallax bgImage="/static/Assets/values.jpg" strength={200} bgImageStyle={{ objectFit: "cover", width: "100%", height: "130%" }}>
                                    <div className="h-64 w-96 md:h-96">
                                        <div className="flex items-center justify-center h-full">
                                            <h3 className="text-gray-100 text-xl md:text-3xl font-bold">Committed to Value</h3>
                                        </div>
                                    </div>
                                </Parallax>
                            </ScrollParallax>
                        </div>
                    </div>
                </section>

                {/* Section 5 */}
                <section className="relative py-16 bg-gray-100">
                    <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center">
                        <div className="lg:w-1/2 p-5">
                            <h2 className="text-purple-950 text-3xl lg:text-4xl font-bold mb-4  text-left">The World We Serve</h2>
                            <p className="text-lg md:text-lg lg:text-xl !leading-relaxed">
                                Destined Estates stands taller than ever in its original markets of chennai and whole of Tamil nadu. And the reach of our good name is growing fast, thanks to God and a true dream team of affiliates serving extraordinary urban, suburban, and resort destinations across the state.
                            </p>
                        </div>
                        <div className="md:w-full lg:w-1/2 p-5 overflow-hidden">
                            <ScrollParallax speed={-5}>
                                <Parallax bgImage="/static/Assets/map.jpg" strength={200} bgImageStyle={{ objectFit: "cover", width: "100%", height: "130%" }}>
                                    <div className="h-64 w-96 md:h-96">
                                        <div className="flex items-center justify-center h-full">
                                            <h3 className="text-gray-100 text-xl md:text-3xl font-bold">Our Global Reach</h3>
                                        </div>
                                    </div>
                                </Parallax>

                            </ScrollParallax>
                        </div>
                    </div>
                </section>

                {/* Section 6 */}
                <section className="relative py-16 bg-gray-200">
                    <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row-reverse items-center">
                        <div className="lg:w-1/2 p-5">
                            <h2 className="text-purple-950 text-3xl lg:text-4xl font-bold mb-4  text-left">Sell Your Home With Destined Estates</h2>
                            <p className="text-lg md:text-lg lg:text-xl !leading-relaxed">
                                Whether you&#39;re ready to sell or just looking for answers, one of Destined estates experienced neighborhood real estate expert can help.
                            </p>
                        </div>
                        <div className="md:w-full lg:w-1/2 p-5 overflow-hidden">
                            <ScrollParallax speed={-10}>
                                <Parallax bgImage="/static/Assets/sell.jpg" strength={200} bgImageStyle={{ objectFit: "cover", width: "100%", height: "130%" }}>
                                    <div className="h-64 w-96 md:h-96">
                                        <div className="flex items-center justify-center h-full">
                                            <h3 className="text-gray-100 text-xl md:text-3xl font-bold">Selling Made Simple</h3>
                                        </div>
                                    </div>
                                </Parallax>
                            </ScrollParallax>
                        </div>
                    </div>
                </section>

                {/* Section 7 */}
                <section className="relative py-16 bg-gray-100">
                    <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center">
                        <div className="lg:w-1/2 p-5">
                            <h2 className="text-purple-950 text-3xl lg:text-4xl font-bold mb-4  text-left">Streetwise and Market smart</h2>
                            <p className="text-lg md:text-lg lg:text-xl !leading-relaxed">
                                In your neighborhood and across the city, nobody understands the residential real estate scene like Destined estates. Whether you&#39;re buying, renting or selling, when you connect with a Destined estates professional, you&#39;re working with the best in the business.
                            </p>
                        </div>
                        <div className="md:w-full lg:w-1/2 p-5 overflow-hidden">
                            <ScrollParallax speed={-10}>
                                <Parallax bgImage="/static/Assets/local.jpg" strength={200} bgImageStyle={{ objectFit: "cover", width: "100%", height: "130%" }}>
                                    <div className="h-64 w-96 md:h-96">
                                        <div className="flex items-center justify-center h-full">
                                            <h3 className="text-gray-100 text-xl md:text-3xl font-bold">Local Expertise</h3>
                                        </div>
                                    </div>
                                </Parallax>
                            </ScrollParallax>
                        </div>
                    </div>
                </section>


                {/* Section 8 */}
                <section className="relative py-16 bg-gray-200">
                    <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row-reverse items-center">
                        <div className="lg:w-1/2 p-5">
                            <h2 className="text-purple-950 text-3xl lg:text-4xl font-bold mb-4  text-left">Our Name is a Name that Opens Doors</h2>
                            <p className="text-lg md:text-lg lg:text-xl !leading-relaxed">
                                Discover our international standards Luxury real estate company and get to know, one of the industry&#39;s most recognized and respected brand names. Our Professionals specialize in market intelligence and client satisfaction.
                            </p>
                        </div>
                        <div className="md:w-full lg:w-1/2 p-5 overflow-hidden">
                            <ScrollParallax speed={-10}>
                                <Parallax bgImage="/static/Assets/building1.jpg" strength={200}>
                                    <div className="h-64 w-96 md:h-96">
                                        <div className="flex items-center justify-center h-full">
                                            <h3 className="text-gray-800 text-xl md:text-3xl font-bold">Opening Doors Globally</h3>
                                        </div>
                                    </div>
                                </Parallax>
                            </ScrollParallax>
                        </div>
                    </div>
                </section>



        </>
    )
}

export default WhoWeAre