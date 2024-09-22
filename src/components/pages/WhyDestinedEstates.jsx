'use client';
import React from "react";
import { ParallaxProvider, Parallax as ScrollParallax } from 'react-scroll-parallax';
import { Parallax } from 'react-parallax';

export default function WhyDestinedEstates() {
    return (
        <ParallaxProvider>
            <div className="w-full h-full overflow-hidden">
                {/* Section 1 */}
                <section className="relative py-16 bg-gray-100">
                    <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center">
                        <div className="lg:w-1/2 p-5">
                            <h2 className="text-purple-950 text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Experience</h2>
                            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl !leading-relaxed">
                                Back in 2012 a young entrepreneur named Rufus Tenola Vinoth his name sake residential real estate brokerage with a small Invesment in a tiny office on the north side of chennai. The rest is history. Destined Estates is helping buyers and sellers realize their dreams ever since.
                            </p>
                        </div>
                        <div className="md:w-full lg:w-1/2 p-5 overflow-hidden">
                            <ScrollParallax speed={-10}>
                                <Parallax bgImage="/static/Assets/experience.png" strength={200}>
                                    <div className="h-64 w-96 md:h-96">
                                        <div className="flex items-center justify-center h-full">
                                            <h3 className="text-gray-800 text-xl md:text-3xl font-bold">Experience the difference</h3>
                                        </div>
                                    </div>
                                </Parallax>
                            </ScrollParallax>
                        </div>
                    </div>
                </section>

                {/* Section 2 */}
                <section className="relative py-16 bg-gray-200">
                    <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row-reverse items-center">
                        <div className="lg:w-1/2 p-5">
                            <h2 className="text-purple-950 text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Professionals</h2>
                            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl !leading-relaxed">
                            We know a real estate brokerage is only as good as its agents, and Destined estates has the industry&#39;s best and brightest, carrying the flag of exceptionalism in our markets and across the country. Wherever you&#39;ve set your insights, we&#39;re there.
                            </p>
                        </div>
                        <div className="md:w-full lg:w-1/2 p-5 overflow-hidden">
                            <ScrollParallax speed={-10}>
                                <Parallax bgImage="/static/Assets/professionals.jpg" strength={200}>
                                    <div className="h-64 w-96 md:h-96">
                                        <div className="flex items-center justify-center h-full">
                                            <h3 className="text-gray-100 text-xl md:text-3xl font-bold">Meet Our Team</h3>
                                        </div>
                                    </div>
                                </Parallax>
                            </ScrollParallax>
                        </div>
                    </div>
                </section>

                {/* Section 3 */}
                <section className="relative py-16 bg-gray-100">
                    <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center">
                        <div className="lg:w-1/2 p-5">
                            <h2 className="text-purple-950 text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Promise</h2>
                            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl !leading-relaxed">
                            Destined estate agents are backed by one of the real estate industry&#39;s most experienced and effective marketing teams, whose innovative campaigns and sophisticated advertising programs ensure the broadest exposure for our client&#39;s homes. For you, that means more buzz, bigger offers, and quicker closings.
                            </p>
                        </div>
                        <div className="md:w-full lg:w-1/2 p-5 overflow-hidden">
                            <ScrollParallax speed={-10}>
                                <Parallax bgImage="/static/Assets/promise.jpg" strength={200}>
                                    <div className="h-64 w-96 md:h-96">
                                        <div className="flex items-center justify-center h-full">
                                            <h3 className="text-gray-100 text-xl md:text-3xl font-bold">Our Promise to You</h3>
                                        </div>
                                    </div>
                                </Parallax>
                            </ScrollParallax>
                        </div>
                    </div>
                </section>

                 {/* Section 4 */}
                 <section className="relative py-16 bg-gray-200">
                    <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row-reverse items-center">
                        <div className="lg:w-1/2 p-5">
                            <h2 className="text-purple-950 text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Values</h2>
                            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl !leading-relaxed">
                            From starting the conversation to sealing the deal, your Destined estates agent is committed to earning and keeping your trust forever. We&#39;re part of anywhere, A true leader in residential Luxury real estate.
                            </p>
                        </div>
                        <div className="md:w-full lg:w-1/2 p-5 overflow-hidden">
                            <ScrollParallax speed={-10}>
                                <Parallax bgImage="/static/Assets/values.jpg" strength={200}>
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
                            <h2 className="text-purple-950 text-3xl md:text-4xl lg:text-5xl font-bold mb-4">The World We Serve</h2>
                            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl !leading-relaxed">
                            Destined Estates stands taller than ever in its original markets of chennai and whole of Tamil nadu. And the reach of our good name is growing fast, thanks to God and a true dream team of affiliates serving extraordinary urban, suburban, and resort destinations across the state.
                            </p>
                        </div>
                        <div className="md:w-full lg:w-1/2 p-5 overflow-hidden">
                            <ScrollParallax speed={-10}>
                                <Parallax bgImage="/static/Assets/luxury-house.jpg" strength={200}>
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
                            <h2 className="text-purple-950 text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Sell Your Home With Destined Estates</h2>
                            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl !leading-relaxed">
                            Whether you&#39;re ready to sell or just looking for answers, one of Destined estates experienced neighborhood real estate expert can help.
                            </p>
                        </div>
                        <div className="md:w-full lg:w-1/2 p-5 overflow-hidden">
                            <ScrollParallax speed={-10}>
                                <Parallax bgImage="/static/Assets/sales.jpg" strength={200}>
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
                            <h2 className="text-purple-950 text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Streetwise and Market smart</h2>
                            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl !leading-relaxed">
                            In your neighborhood and across the city, nobody understands the residential real estate scene like Destined estates. Whether you&#39;re buying, renting or selling, when you connect with a Destined estates professional, you&#39;re working with the best in the business.
                            </p>
                        </div>
                        <div className="md:w-full lg:w-1/2 p-5 overflow-hidden">
                            <ScrollParallax speed={-10}>
                                <Parallax bgImage="/static/Assets/streetwise-marketwise.jpg" strength={200}>
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


                {/* Section 6 */}
                <section className="relative py-16 bg-gray-200">
                    <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row-reverse items-center">
                        <div className="lg:w-1/2 p-5">
                            <h2 className="text-purple-950 text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Name is a Name that Opens Doors</h2>
                            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl !leading-relaxed">
                            Discover our international standards Luxury real estate company and get to know, one of the industry&#39;s most recognized and respected brand names. Our Professionals specialize in market intelligence and client satisfaction.
                            </p>
                        </div>
                        <div className="md:w-full lg:w-1/2 p-5 overflow-hidden">
                            <ScrollParallax speed={-10}>
                                <Parallax bgImage="/static/Assets/open-door.jpg" strength={200}>
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

            </div>
        </ParallaxProvider>
    );
}
