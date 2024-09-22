// pages/leadership.js

import Image from "next/image";

export default function Leadership() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-10 flex flex-col justify-center items-center">
          <Image src={"/static/Logo.png"} width={300} height={300} alt="Rufus Tenola Vinoth" className="rounded-full w-56 h-56 md:w-64 md:h-64"/>
          <h2 className="text-4xl mt-2 text-indigo-600">Rufus Tenola Vinoth</h2>
          <p className="text-lg text-gray-600 mt-4">Managing Director</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg space-y-5">
          <p className="text-gray-700 text-lg md:text-xl lg:text-2xl !leading-relaxed">
          As the founder of Destined Estates (OPC) Private Limited, Rufus is a dominant force within the Chennai Luxury real estate community. Having done his college education in Switzerland and following it up with an employment in a multi-million-dollar golf club in New York, United States of America, Rufus has built his expertise in business from a western point of view working alongside Americans and people from all around the world, quickly mastering the art of buying, selling, and investing real estate.
            {/* Add the rest of the content */}
          </p>
          <p className="mt-6 text-gray-700 text-lg md:text-xl lg:text-2xl !leading-relaxed">
          Recognized as one of the most dynamic, high performing agents in the luxury home real estate market, Rufus Tenola Vinoth has over 12 + years of experience in the elite real estate sector. Having sold properties worth millions of rupees over a Carrier spanning more than a decade puts him in a league of his own.
          </p>
          <p className="mt-6 text-gray-700 text-lg md:text-xl lg:text-2xl !leading-relaxed">
          Rufus specializes in selling and marketing some of the finest and most iconic residential properties to his connections and network of high-net-worth individuals. His uncompromising professionalism and tenacious drive have yielded his unheard-of rapid rise in the luxury real estate industry.
          </p>
          <p className="mt-6 text-gray-700 text-lg md:text-xl lg:text-2xl !leading-relaxed">
          Rufus has implemented top notch professionalism in the luxury real estate field to develop his own team of seasoned professionals. In 2023, Rufus had expanded his more than a decade + years of experience into an elite real estate firm named Destined Estates (OPC) Private Limited. Today Destined Estates exists to serve the elite clientele from all around the world, to cater to their luxury property needs and wants. Rufus&#39;s passion for teaching others how to achieve success is realized through his team of highly coveted agents.
          </p>
        </div>
      </div>
    </div>
  );
}
