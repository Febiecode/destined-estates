import React from 'react'
import { motion } from 'framer-motion';

const Leadership = () => {

  return (
    <div className="flex flex-col lg:flex-row">
      <div id="title-with-image" className="w-full lg:w-1/3 p-5 flex flex-col items-center">
        {/* image */}
        <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mb-4">
          <img
            src="/static/Logo.png"
            alt="Rufus"
            className="w-full h-full object-cover"
          />
        </div>
        {/* name */}
        <h2 className="text-2xl font-bold">Rufus Tenola Vinoth</h2>
        {/* position */}
        <p className="text-lg text-gray-500">Managing Director</p>
      </div>


      <div id="scrollable" className="w-full lg:w-2/3 flex flex-col items-center justify-center text-lg my-8 md:my-5">
      <motion.div
        className="scroll-div px-5 py-2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p>
          As the founder of Destined Estates (OPC) Private Limited, Rufus is a dominant force within
          the Chennai Luxury real estate community. Having done his college education in
          Switzerland and following it up with an employment in a multi-million-dollar golf club in
          New York, United States of America, Rufus has built his expertise in business from a
          western point of view working alongside Americans and people from all around the world,
          quickly mastering the art of buying, selling, and investing real estate.
        </p>
      </motion.div>
      <motion.div
        className="scroll-div px-5 py-2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p>
          Recognized as one of the most dynamic, high performing agents in the luxury home real
          estate market, Rufus Tenola Vinoth has over 12 + years of experience in the elite real estate
          sector. Having sold properties worth millions of rupees over a Carrier spanning more than
          a decade puts him in a league of his own.
        </p>
      </motion.div>
      <motion.div
        className="scroll-div px-5 py-2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <p>
          Rufus specializes in selling and marketing some of the finest and most iconic residential
          properties to his connections and network of high-net-worth individuals. His
          uncompromising professionalism and tenacious drive have yielded his unheard-of rapid
          rise in the luxury real estate industry.
        </p>
      </motion.div>
      <motion.div
        className="scroll-div px-5 py-2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <p>
          Rufus has implemented top notch professionalism in the luxury real estate field to develop
          his own team of seasoned professionals. In 2023, Rufus had expanded his more than a
          decade + years of experience into an elite real estate firm named Destined Estates (OPC)
          Private Limited. Today Destined Estates exists to serve the elite clientele from all around
          the world, to cater to their luxury property needs and wants. Rufus's passion for teaching
          others how to achieve success is realized through his team of highly coveted agents.
        </p>
      </motion.div>
    </div>
    </div>
  )
}

export default Leadership
