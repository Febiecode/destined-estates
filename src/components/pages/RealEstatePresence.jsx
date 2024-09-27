import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const fadeIn = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0 },
};

const transition = {
    duration: 0.8,
    ease: [0.5, 0.1, 0.5, 1],
};

const useSmallScreen = () => {
    const [isSmallScreen, setIsSmallScreen] = React.useState(false);
    React.useEffect(() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth <= 600); // Customize breakpoint as needed
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return isSmallScreen;
};

export default function RealEstatePresence() {
    const isSmallScreen = useSmallScreen();
    return (
        <>
            {isSmallScreen ? (
                <div className="bg-[#4c0018]">
                    {/* Local Insights Section */}
                    <motion.div
                        className="relative min-h-screen flex flex-col md:flex-row justify-center items-center py-12 bg-[#4c0018] md:bg-white my-10"
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        transition={transition}
                    >
                        <div className="max-w-5xl w-full grid grid-cols-12 overflow-hidden z-10">
                            {/* Image Section */}
                            <div className="col-span-12 md:col-span-6 flex justify-center items-center">
                                <img
                                    src="/static/Assets/local2.jpg"
                                    alt="Living Room"
                                    className="shadow-md"
                                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                                />
                            </div>

                            {/* Text Section */}
                            <div className="col-span-12 md:col-span-6 p-4 lg:p-8 flex flex-col justify-center">
                                <h1 className="text-3xl font-bold text-white mb-6 leading-tight">
                                    Local Insights
                                </h1>
                                <div className="border-b-2 border-white w-24 mb-6"></div>
                                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                    Our on&#8211;the&#8211;ground presence in key locations around the city gives us knowledge of
                                    local market conditions and trends, as well as access to proprietary deal flow.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Strategic Flexibility Section */}
                    <motion.div
                        className="relative min-h-screen flex flex-col md:flex-row justify-center items-center py-12 bg-[#4c0018] md:bg-white"
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        transition={transition}
                    >
                        <div className="max-w-5xl w-full grid grid-cols-12 overflow-hidden z-10">
                            {/* Image Section */}
                            <div className="col-span-12 md:col-span-6 flex justify-center items-center">
                                <img
                                    src="/static/Assets/ideas.jpg"
                                    alt="Living Room"
                                    className="shadow-md"
                                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                                />
                            </div>

                            {/* Text Section */}
                            <div className="col-span-12 md:col-span-6 p-4 lg:p-8 flex flex-col justify-center">
                                <h1 className="text-3xl font-bold text-white mb-6 leading-tight">
                                    Strategic <br />Flexibility
                                </h1>
                                <div className="border-b-2 border-white w-24 mb-6"></div>
                                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                    Quickly scaling up to put our Real estate ideas into action, allows us to allocate
                                    luxury properties where it is otherwise scarce, acquire intellectual assets for
                                    effective deal closures and leverage our operating expertise, enhancing the value of
                                    our services.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contributing to the Local Communities Section */}
                    <motion.div
                        className="relative min-h-screen flex flex-col md:flex-row justify-center items-center py-12 bg-[#4c0018] md:bg-white my-10"
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        transition={transition}
                    >
                        <div className="max-w-5xl w-full grid grid-cols-12 overflow-hidden z-10">
                            {/* Image Section */}
                            <div className="col-span-12 md:col-span-6 flex justify-center items-center">
                                <img
                                    src="/static/Assets/professionals1.jpg"
                                    alt="Living Room"
                                    className="shadow-md"
                                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                                />
                            </div>

                            {/* Text Section */}
                            <div className="col-span-12 md:col-span-6 p-4 lg:p-8 flex flex-col justify-center">
                                <h1 className="text-3xl font-bold text-white mb-6 leading-tight">
                                    Contributing <br />to the <br />local communities
                                </h1>
                                <div className="border-b-2 border-white w-24 mb-6"></div>
                                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                    We are actively involved in the communities in which we operate&#8211;creating jobs,
                                    contributing to local talents by ensuring white collar jobs.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            ) : (
                <div>
                    {/* Local Insights Section */}
                    <motion.div
                        className="relative min-h-screen flex justify-center items-center py-12 bg-white my-10"
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        transition={transition}
                    >
                        <div className="max-w-7xl w-full grid grid-cols-12 overflow-hidden z-10">
                            <div className="col-span-12 md:col-span-6 flex justify-center items-center">
                                <img
                                    src="/static/Assets/local3.jpg"
                                    alt="Living Room"
                                    className="shadow-md"
                                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                                />
                            </div>

                            <div className="col-span-12 md:col-span-6 p-4 lg:p-8 flex flex-col justify-center ">
                                <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                                    Local Insights
                                </h1>
                                <div className="border-b-2 border-white w-24 mb-6"></div>
                                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                    Our on&#8211;the&#8211;ground presence in key locations around the city gives us knowledge of
                                    local market conditions and trends, as well as access to proprietary deal flow.
                                </p>
                            </div>
                        </div>

                        {/* Dual Color Background */}

                        <div className="absolute inset-0 grid grid-rows-[80%_20%] grid-cols-[35%_65%] h-full">
                            {/* First Row - Two Columns */}
                            <div className="bg-white"></div>
                            <div className="bg-[#4c0018]"></div>

                            {/* Second Row - Single Column Spanning Two Columns */}
                            <div className="bg-white col-span-2"></div>
                        </div>
                    </motion.div>

                    {/* Strategic Flexibility Section */}
                    <motion.div
                        className="relative min-h-screen flex justify-center items-center py-12 bg-white"
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        transition={transition}
                    >
                        <div className="max-w-7xl w-full grid grid-cols-12 overflow-hidden z-10">
                            <div className="col-span-12 md:col-span-6 p-4 lg:p-8 flex flex-col justify-center ">
                                <h1 className="text-white text-7xl font-bold mb-6 leading-tight">
                                    Strategic <br />Flexibility
                                </h1>
                                <div className="border-b-2 border-white w-24 mb-6"></div>
                                <p className="text-white text-lg mb-6 leading-relaxed">
                                    Quickly scaling up to put our Real estate ideas into action, allows us to allocate
                                    luxury properties where it is otherwise scarce, acquire intellectual assets for
                                    effective deal closures and leverage our operating expertise, enhancing the value of
                                    our services.
                                </p>
                            </div>
                            <div className="col-span-12 md:col-span-6 flex justify-center items-center">
                                <img
                                    src="/static/Assets/ideas.jpg"
                                    alt="Living Room"
                                    className="shadow-md"
                                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                                />
                            </div>
                        </div>

                        {/* Dual Color Background */}

                        <div className="absolute inset-0 grid grid-rows-[80%_20%] grid-cols-[65%_35%] h-full">
                            {/* First Row - Two Columns */}
                            <div className="bg-[#4c0018]"></div>
                            <div className="bg-white"></div>

                            {/* Second Row - Single Column Spanning Two Columns */}
                            <div className="bg-white col-span-2"></div>
                        </div>
                    </motion.div>

                    {/* Contributing to the Local Communities Section */}
                    <motion.div
                        className="relative min-h-screen flex justify-center items-center py-12 bg-white my-10"
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        transition={transition}
                    >
                        <div className="max-w-7xl w-full grid grid-cols-12 overflow-hidden z-10">
                            <div className="col-span-12 md:col-span-6 flex justify-center items-center">
                                <img
                                    src="/static/Assets/professionals1.jpg"
                                    alt="Living Room"
                                    className="shadow-md"
                                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                                />
                            </div>

                            <div className="col-span-12 md:col-span-6 p-4 lg:p-8 flex flex-col justify-center">
                                <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                                    Contributing <br />to the <br />local communities
                                </h1>
                                <div className="border-b-2 border-white w-24 mb-6"></div>
                                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                    We are actively involved in the communities in which we operate&#8211;creating jobs,
                                    contributing to local talents by ensuring white collar jobs.
                                </p>
                            </div>
                        </div>

                        {/* Dual Color Background */}

                        <div className="absolute inset-0 grid grid-rows-[80%_20%] grid-cols-[35%_65%] h-full">
                            {/* First Row - Two Columns */}
                            <div className="bg-white"></div>
                            <div className="bg-[#4c0018]"></div>

                            {/* Second Row - Single Column Spanning Two Columns */}
                            <div className="bg-white col-span-2"></div>
                        </div>
                    </motion.div>
                </div>

            )}
        </>
    );
}
