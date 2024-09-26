import { motion } from 'framer-motion'

export default function AssetsSolutions() {

    return (
        <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">

            <div className='max-w-6xl mb-10  flex flex-col lg:flex-row items-center'>
                <div className='lg:w-1/2 md:me-5 my-5 md:my-14'>
                    <img
                        src="/static/Assets/client.jpg"
                        alt="client"
                        className="shadow-md rounded-tr-[20%] rounded-bl-[20%]"
                        style={{ objectFit: "cover", width: "100%", height: "100%" }}
                    />
                </div>

                <motion.div
                    className='lg:w-1/2 lg:ms-10'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <h2 className="text-purple-950 text-3xl lg:text-5xl font-bold mb-4 text-left">Let us get you the Destined service that you desire.</h2>
                    <div className="border-b-4 border-black w-40 my-6"></div>
                    <p className="text-lg !leading-relaxed">
                        Our full suite of real estate services will transform your buying & selling experience. We Leverage our deep knowledge of the property sites and processes, with advanced sales strategies, and streamlined workflows to provide a predictable and comprehensive experience, every time you work with us.
                    </p>
                </motion.div>


            </div>

            <div className='max-w-6xl mb-10  flex flex-col lg:flex-row items-center'>
                <div className='lg:w-1/2 md:me-5 my-5 md:my-14'>
                    <img
                        src="/static/Assets/home7.jpg"
                        alt="home"
                        className="shadow-md rounded-tr-[20%] rounded-bl-[20%]"
                        style={{ objectFit: "cover", width: "100%", height: "100%" }}
                    />
                </div>

                <motion.div
                    className='lg:w-1/2 lg:ms-10'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <h2 className="text-purple-950 text-3xl lg:text-5xl font-bold mb-4 text-left">Buying and selling of Assests.</h2>
                    <div className="border-b-4 border-black w-40 my-6"></div>
                    <p className="text-lg !leading-relaxed">
                        We know your assets and the procedures better than anyone. Our client-oriented teams
                        provide you with best-in-class service. We provide full site analysis and inspection,
                        collocation with application of various marketing strategies in successfully selling the
                        asset as per market value, in the same time assuring the buyer for the best return on
                        Invesment.
                    </p>
                </motion.div>


            </div>

            <div className='max-w-6xl mb-10  flex flex-col lg:flex-row items-center'>
                <div className='lg:w-1/2 md:me-5 my-5 md:my-14'>
                    <img
                        src="/static/Assets/sell1.jpg"
                        alt="selling"
                        className="shadow-md rounded-tr-[20%] rounded-bl-[20%]"
                        style={{ objectFit: "cover", width: "100%", height: "100%" }}
                    />
                </div>


                <motion.div
                    className='lg:w-1/2 lg:ms-10'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <h2 className="text-purple-950 text-3xl lg:text-5xl font-bold mb-4 text-left">Navigating Complex challenges and increasing sales bandwidth</h2>
                    <div className="border-b-4 border-black w-40 my-6"></div>
                    <p className="text-lg !leading-relaxed">
                        It takes dedicated resources and specialized knowledge to accomplish a successful sale.
                        To which our team works tirelessly integrating complex coordination along with navigating
                        regulatory processes and obtaining precise market value for each and every property for a
                        smooth transition of sale. Even with resources in place, managing sale timelines,
                        coordinating with investors, sellers, landlords, and monitoring quality control of services
                        offered and adherence to ensuring masterful negotiation strategies requires a high level of
                        oversight and takes resources from our core business.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
