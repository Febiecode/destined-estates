// pages/real-estate-presence.js
import { Player } from '@lottiefiles/react-lottie-player';
import home1 from '../../../public/home1.json';
import buyingSelling1 from '../../../public/buyingSelling1.json';
import sales from '../../../public/sales.json';

export default function AssetsSolutions() {

    return (
        <div className="min-h-screen bg-gray-100 p-6">

            <div className='mb-10 bg-white p-6 rounded-lg shadow-lg flex flex-col lg:flex-row items-center'>
                <div className='lg:w-2/5 md:me-5 my-14'>
                    {/* Lottie Animation */}
                    <Player
                        autoplay
                        loop
                        src={home1}
                        className="w-full max-w-md mx-auto mt-8"
                    />
                </div>

                <div className='lg:w-3/5'>
                    <h2 className="text-purple-950 text-3xl lg:text-4xl font-bold mb-4 text-left">Let us get you the Destined service that you desire.</h2>
                    <p className="text-lg md:text-lg lg:text-xl !leading-relaxed">
                        Our full suite of real estate services will transform your buying & selling experience. We Leverage our deep knowledge of the property sites and processes, with advanced sales strategies, and streamlined workflows to provide a predictable and comprehensive experience, every time you work with us.
                    </p>
                </div>


            </div>

            <div className='mb-10 bg-white p-6 rounded-lg shadow-lg flex flex-col-reverse lg:flex-row items-center'>

                
                <div className='lg:w-3/5 '>
                    <h2 className="text-purple-950 text-3xl lg:text-4xl font-bold mb-4  text-left">Buying and selling of Assests</h2>
                    <p className="text-lg md:text-lg lg:text-xl !leading-relaxed">
                        We know your assets and the procedures better than anyone. Our client-oriented teams provide you with best-in-class service. We provide full site analysis and inspection, collocation with application of various marketing strategies in successfully selling the asset as per market value, in the same time assuring the buyer for the best return on Invesment.
                    </p>
                </div>

                <div className='lg:w-2/5 mb-20 md:mb-10 md:me-5'>
                    {/* Lottie Animation */}
                    <Player
                        autoplay
                        loop
                        src={buyingSelling1}
                        className="w-full max-w-md mx-auto mb-10"
                    />
                </div>


            </div>

            <div className='mb-10 bg-white p-6 rounded-lg shadow-lg flex flex-col lg:flex-row items-center'>

                <div className='lg:w-2/5 md:me-5'>
                    {/* Lottie Animation */}
                    <Player
                        autoplay
                        loop
                        src={sales}
                        className="w-full max-w-md mx-auto mt-8"
                    />
                </div>
                <div className='lg:w-3/5'>
                    <h2 className="text-purple-950 text-3xl lg:text-4xl font-bold mb-4  text-left">Navigating Complex challenges and increasing sales bandwidth</h2>
                    <p className="text-lg md:text-lg lg:text-xl !leading-relaxed">
                        It takes dedicated resources and specialized knowledge to accomplish a successful sale. To which our team works tirelessly integrating complex coordination along with navigating regulatory processes and obtaining precise market value for each and every property for a smooth transition of sale. Even with resources in place, managing sale timelines, coordinating with investors, sellers, landlords, and monitoring quality control of services offered and adherence to ensuring masterful negotiation strategies requires a high level of oversight and takes resources from our core business.
                    </p>
                </div>


            </div>



        </div>
    );
}
