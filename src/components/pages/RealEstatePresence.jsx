// pages/real-estate-presence.js
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import insights from '../../../public/insights.json';
import marketing from '../../../public/marketing.json';
import local from '../../../public/local.json';

export default function RealEstatePresence() {
    const { scrollY } = useViewportScroll();

    // Parallax animations
    const y1 = useTransform(scrollY, [0, 300], [0, 50]);
    const y2 = useTransform(scrollY, [0, 300], [0, 100]);
    const y3 = useTransform(scrollY, [0, 300], [0, 150]);

    return (
        <div className="min-h-screen bg-gray-100 p-6">


            <div className='mb-16 mt-10 flex justify-center items-center'>
                <p className="text-center w-full md:4/5 xl:w-3/4 font-semibold text-purple-950 font-playfair text-lg md:text-xl lg:text-2xl">
                    Well established mode of operandum in all parts of Chennai, enable us to readily intersect where attractive opportunities emerge.
                </p>
            </div>




            <div className='mb-10 bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row justify-evenly items-center'>
                <div className='lg:w-2/5 md:w-1/3 md:me-5'>
                    {/* Lottie Animation */}
                    <Player
                        autoplay
                        loop
                        src={insights}
                        className="w-full max-w-md mx-auto mt-8"
                    />
                </div>

                <div className='lg:w-2/5 md:w-3/4 '>
                    <h2 className="text-purple-950 text-3xl lg:text-4xl font-bold mb-4  text-left">Local Insights</h2>
                    <p className="text-lg md:text-lg lg:text-xl !leading-relaxed">
                        Our on-the-ground presence in key locations around the city gives us knowledge of local market conditions and trends, as well as access to proprietary deal flow.
                    </p>
                </div>


            </div>

            <div className='mb-10 bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-evenly'>

                <div className='lg:w-2/5 md:w-1/3 md:me-5'>
                    {/* Lottie Animation */}
                    <Player
                        autoplay
                        loop
                        src={marketing}
                        className="w-full max-w-md mx-auto mt-8"
                    />
                </div>
                <div className='lg:w-2/5 md:w-3/4 '>
                    <h2 className="text-purple-950 text-2xl md:text-3xl lg:text-4xl font-bold mb-4  text-left">Strategic Flexibility</h2>
                    <p className="text-lg md:text-lg lg:text-xl !leading-relaxed">
                        Quickly scaling up to put our Real estate ideas into action, allows us to allocate luxury properties where it is otherwise scarce, acquire intellectual assets for effective deal closures and leverage our operating expertise, enhancing the value of our services.
                    </p>
                </div>


            </div>

            <div className='mb-10 bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row justify-evenly items-center'>

                <div className='lg:w-2/5 md:w-1/3 md:me-5'>
                    {/* Lottie Animation */}
                    <Player
                        autoplay
                        loop
                        src={local}
                        className="w-full max-w-md mx-auto mt-8"
                    />
                </div>
                <div className='lg:w-2/5 md:w-3/4'>
                    <h2 className="text-purple-950 text-xl md:text-2xl lg:text-3xl font-bold mb-4  text-left">Contributing to the local communities</h2>
                    <p className="text-lg md:text-lg lg:text-xl !leading-relaxed">
                        We are actively involved in the communities in which we operate—creating jobs, contributing to local talents by ensuring white collar jobs.
                    </p>
                </div>


            </div>



        </div>
    );
}
