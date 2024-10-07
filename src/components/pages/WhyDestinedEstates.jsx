'use client';
import React, { useEffect, useRef, useState } from "react";
import { ParallaxProvider, Parallax as ScrollParallax } from 'react-scroll-parallax';
import { Parallax } from 'react-parallax';

/**
 * TypewriterH3 Component
 * Props:
 * - text: The full text to display with typewriter effect
 * - className: Additional CSS classes for styling
 */
const TypewriterH3 = ({ text, className }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    const typingSpeed = 50; // milliseconds per character

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target); // Stop observing after it's visible
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of the element is visible
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    useEffect(() => {
        let timeout;
        if (isVisible && displayedText.length < text.length) {
            timeout = setTimeout(() => {
                setDisplayedText(text.slice(0, displayedText.length + 1));
            }, typingSpeed);
        }
        return () => clearTimeout(timeout);
    }, [isVisible, displayedText, text, typingSpeed]);

    return (
        <h3 ref={ref} className={className}>
            {displayedText}
            {isVisible && displayedText.length < text.length && (
                <span className="blinking-cursor">|</span>
            )}
        </h3>
    );
};

export default function WhyDestinedEstates() {
    return (
        <ParallaxProvider>
            <div className="w-full h-full overflow-hidden">
                {/* Section 1 */}
                <section className="relative py-16 bg-gray-100">
                    <div className="container mx-auto md:px-4 flex flex-col-reverse lg:flex-row items-center focus:text-[#4db6d4]">
                        <div className="lg:w-1/2 p-5">
                            <h2 className="text-[#4db6d4] text-3xl lg:text-4xl font-bold mb-4 text-left">Our Experience</h2>
                            <p className="text-lg md:text-lg lg:text-xl !leading-relaxed text-gray-600">
                                Back in 2012 a young entrepreneur named Rufus Tenola Vinoth his name sake residential real estate brokerage with a small Investment in a tiny office on the north side of Chennai. The rest is history. Destined Estates is helping buyers and sellers realize their dreams ever since.
                            </p>
                        </div>
                        <div className="w-full md:w-full lg:w-1/2 md:p-5 overflow-hidden">
                            <ScrollParallax speed={0}>
                                <Parallax
                                    bgImage="/static/Assets/home4.jpg"
                                    strength={200}
                                    bgImageStyle={{ objectFit: "cover", width: "100%", height: "130%" }}
                                >
                                    <div className="relative h-64 w-full md:h-96">
                                        {/* Blur effect div */}
                                        <div className="absolute bottom-0 left-0 w-full h-14 bg-white bg-opacity-50 backdrop-blur-md flex items-center justify-left px-5 md:px-0 md:justify-center">
                                            <TypewriterH3 
                                                text="Experience the difference" 
                                                className="text-[#4db6d4] text-xl md:text-3xl font-bold" 
                                            />
                                        </div>
                                    </div>
                                </Parallax>
                            </ScrollParallax>
                        </div>
                    </div>
                </section>

                {/* Section 2 */}
                <section className="relative py-16 bg-gray-200">
                    <div className="container mx-auto md:px-4 flex flex-col-reverse lg:flex-row-reverse items-center">
                        <div className="lg:w-1/2 p-5">
                            <h2 className="text-[#a36a43] text-3xl lg:text-4xl font-bold mb-4 text-left">Our Professionals</h2>
                            <p className="text-lg md:text-lg lg:text-xl !leading-relaxed text-gray-600">
                                We know a real estate brokerage is only as good as its agents, and Destined Estates has the industry's best and brightest, carrying the flag of exceptionalism in our markets and across the country. Wherever you've set your insights, we're there.
                            </p>
                        </div>
                        <div className="w-full md:w-full lg:w-1/2 md:p-5 overflow-hidden">
                            <ScrollParallax speed={0}>
                                <Parallax 
                                    bgImage="/static/Assets/professionals2.jpg" 
                                    strength={200} 
                                    bgImageStyle={{ objectFit: "cover", width: "100%", height: "130%" }}
                                >
                                    <div className="h-64 w-96 md:h-96">
                                        {/* Blur effect div */}
                                        <div className="absolute bottom-0 left-0 w-full h-14 bg-white bg-opacity-50 backdrop-blur-md flex items-center justify-left px-5 md:px-0 md:justify-center">
                                            <TypewriterH3 
                                                text="Meet Our Team" 
                                                className="text-[#a36a43] text-xl md:text-3xl font-bold" 
                                            />
                                        </div>
                                    </div>
                                </Parallax>
                            </ScrollParallax>
                        </div>
                    </div>
                </section>

                {/* Section 3 */}
                <section className="relative py-16 bg-gray-100">
                    <div className="container mx-auto md:px-4 flex flex-col-reverse lg:flex-row items-center">
                        <div className="lg:w-1/2 p-5">
                            <h2 className="text-[#a49e91] text-3xl lg:text-4xl font-bold mb-4 text-left">Our Promise</h2>
                            <p className="text-lg md:text-lg lg:text-xl !leading-relaxed text-gray-600">
                                Destined estate agents are backed by one of the real estate industry's most experienced and effective marketing teams, whose innovative campaigns and sophisticated advertising programs ensure the broadest exposure for our client's homes. For you, that means more buzz, bigger offers, and quicker closings.
                            </p>
                        </div>
                        <div className="w-full md:w-full lg:w-1/2 md:p-5 overflow-hidden">
                            <ScrollParallax speed={0}>
                                <Parallax 
                                    bgImage="/static/Assets/promise1.jpg" 
                                    strength={200} 
                                    bgImageStyle={{ objectFit: "cover", width: "100%", height: "120%" }}
                                >
                                    <div className="h-64 w-96 md:h-96">
                                        {/* Blur effect div */}
                                        <div className="absolute bottom-0 left-0 w-full h-14 bg-white bg-opacity-50 backdrop-blur-md flex items-center justify-left px-5 md:px-0 md:justify-center">
                                            <TypewriterH3 
                                                text="Our Promise To You" 
                                                className="text-[#a49e91] text-xl md:text-3xl font-bold" 
                                            />
                                        </div>
                                    </div>
                                </Parallax>
                            </ScrollParallax>
                        </div>
                    </div>
                </section>

                {/* Section 4 */}
                <section className="relative py-16 bg-gray-200">
                    <div className="container mx-auto md:px-4 flex flex-col-reverse lg:flex-row-reverse items-center">
                        <div className="lg:w-1/2 p-5">
                            <h2 className="text-[#53504b] text-3xl lg:text-4xl font-bold mb-4 text-left">Our Values</h2>
                            <p className="text-lg md:text-lg lg:text-xl !leading-relaxed text-gray-600">
                                From starting the conversation to sealing the deal, your Destined Estates agent is committed to earning and keeping your trust forever. We're part of anywhere, a true leader in residential luxury real estate.
                            </p>
                        </div>
                        <div className="w-full md:w-full lg:w-1/2 md:p-5 overflow-hidden">
                            <ScrollParallax speed={0}>
                                <Parallax 
                                    bgImage="/static/Assets/values.jpg" 
                                    strength={200} 
                                    bgImageStyle={{ objectFit: "cover", width: "100%", height: "130%" }}
                                >
                                    <div className="h-72 w-96 md:h-96">
                                        {/* Blur effect div */}
                                        <div className="absolute bottom-0 left-0 w-full h-14 bg-white bg-opacity-50 backdrop-blur-md flex items-center justify-left px-5 md:px-0 md:justify-center">
                                            <TypewriterH3 
                                                text="Committed to Value" 
                                                className="text-[#53504b] text-xl md:text-3xl font-bold" 
                                            />
                                        </div>
                                    </div>
                                </Parallax>
                            </ScrollParallax>
                        </div>
                    </div>
                </section>

                {/* Section 5 */}
                <section className="relative py-16 bg-gray-100">
                    <div className="container mx-auto md:px-4 flex flex-col-reverse lg:flex-row items-center">
                        <div className="lg:w-1/2 p-5">
                            <h2 className="text-[#70275a] text-3xl lg:text-4xl font-bold mb-4 text-left">The World We Serve</h2>
                            <p className="text-lg md:text-lg lg:text-xl !leading-relaxed text-gray-600">
                                Destined Estates stands taller than ever in its original markets of Chennai and the whole of Tamil Nadu. And the reach of our good name is growing fast, thanks to God and a true dream team of affiliates serving extraordinary urban, suburban, and resort destinations across the state.
                            </p>
                        </div>
                        <div className="w-full md:w-full lg:w-1/2 md:p-5 overflow-hidden">
                            <ScrollParallax speed={0}>
                                <Parallax 
                                    bgImage="/static/Assets/global1.jpg" 
                                    strength={200} 
                                    bgImageStyle={{ objectFit: "cover", width: "100%", height: "130%" }}
                                >
                                    <div className="h-64 w-96 md:h-96">
                                        {/* Blur effect div */}
                                        <div className="absolute bottom-0 left-0 w-full h-14 bg-white bg-opacity-50 backdrop-blur-md flex items-center justify-left px-5 md:px-0 md:justify-center">
                                            <TypewriterH3 
                                                text="Our Global Reach" 
                                                className="text-[#70275a] text-xl md:text-3xl font-bold" 
                                            />
                                        </div>
                                    </div>
                                </Parallax>
                            </ScrollParallax>
                        </div>
                    </div>
                </section>

                {/* Section 6 */}
                <section className="relative py-16 bg-gray-200">
                    <div className="container mx-auto md:px-4 flex flex-col-reverse lg:flex-row-reverse items-center">
                        <div className="lg:w-1/2 p-5">
                            <h2 className="text-[#dd344e] text-3xl lg:text-4xl font-bold mb-4 text-left">Sell Your Home With Destined Estates</h2>
                            <p className="text-lg md:text-lg lg:text-xl !leading-relaxed text-gray-600 ">
                                Whether you're ready to sell or just looking for answers, one of Destined Estates' experienced neighborhood real estate experts can help.
                            </p>
                        </div>
                        <div className="w-full md:w-full lg:w-1/2 md:p-5 overflow-hidden">
                            <ScrollParallax speed={0}>
                                <Parallax 
                                    bgImage="/static/Assets/sold1.jpg" 
                                    strength={200} 
                                    bgImageStyle={{ objectFit: "cover", width: "100%", height: "130%" }}
                                >
                                    <div className="h-64 w-96 md:h-96">
                                        {/* Blur effect div */}
                                        <div className="absolute bottom-0 left-0 w-full h-14 bg-white bg-opacity-50 backdrop-blur-md flex items-center justify-left px-5 md:px-0 md:justify-center">
                                            <TypewriterH3 
                                                text="Selling Made Simple" 
                                                className="text-[#dd344e] text-xl md:text-3xl font-bold" 
                                            />
                                        </div>
                                    </div>
                                </Parallax>
                            </ScrollParallax>
                        </div>
                    </div>
                </section>

                {/* Section 7 */}
                <section className="relative py-16 bg-gray-100">
                    <div className="container mx-auto md:px-4 flex flex-col-reverse lg:flex-row items-center">
                        <div className="lg:w-1/2 p-5">
                            <h2 className="text-[#503026] text-3xl lg:text-4xl font-bold mb-4 text-left">Streetwise and Market smart</h2>
                            <p className="text-lg md:text-lg lg:text-xl !leading-relaxed text-gray-600">
                                In your neighborhood and across the city, nobody understands the residential real estate scene like Destined Estates. Whether you're buying, renting, or selling, when you connect with a Destined Estates professional, you're working with the best in the business.
                            </p>
                        </div>
                        <div className="w-full md:w-full lg:w-1/2 md:p-5 overflow-hidden">
                            <ScrollParallax speed={0}>
                                <Parallax 
                                    bgImage="/static/Assets/local7.jpg" 
                                    strength={200} 
                                    bgImageStyle={{ objectFit: "cover", width: "100%", height: "130%" }}
                                >
                                    <div className="h-64 w-96 md:h-96">
                                        {/* Blur effect div */}
                                        <div className="absolute bottom-0 left-0 w-full h-14 bg-white bg-opacity-50 backdrop-blur-md flex items-center justify-left px-5 md:px-0 md:justify-center">
                                            <TypewriterH3 
                                                text="Local Expertise" 
                                                className="text-[#503026] text-xl md:text-3xl font-bold" 
                                            />
                                        </div>
                                    </div>
                                </Parallax>
                            </ScrollParallax>
                        </div>
                    </div>
                </section>

                {/* Section 8 */}
                <section className="relative py-16 bg-gray-200">
                    <div className="container mx-auto md:px-4 flex flex-col-reverse lg:flex-row-reverse items-center">
                        <div className="lg:w-1/2 p-5">
                            <h2 className="text-[#264a74] text-3xl lg:text-4xl font-bold mb-4 text-left">Our Name is a Name that Opens Doors</h2>
                            <p className="text-lg md:text-lg lg:text-xl !leading-relaxed text-gray-600">
                                Discover our international standards luxury real estate company and get to know one of the industry's most recognized and respected brand names. Our professionals specialize in market intelligence and client satisfaction.
                            </p>
                        </div>
                        <div className="w-full md:w-full lg:w-1/2 md:p-5 overflow-hidden">
                            <ScrollParallax speed={0}>
                                <Parallax 
                                    bgImage="/static/Assets/global2.jpg" 
                                    strength={200}
                                    bgImageStyle={{ objectFit: "cover", width: "100%", height: "130%" }}
                                >
                                    <div className="h-64 w-96 md:h-96">
                                        {/* Blur effect div */}
                                        <div className="absolute bottom-0 left-0 w-full h-14 bg-white bg-opacity-50 backdrop-blur-md flex items-center justify-left px-5 md:px-0 md:justify-center">
                                            <TypewriterH3 
                                                text="Opening Doors Globally" 
                                                className="text-[#264a74] text-xl md:text-3xl font-bold" 
                                            />
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
