import React from "react";
import { motion } from "framer-motion";
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import OfferIcon from '@mui/icons-material/LocalOffer';
import DoneIcon from '@mui/icons-material/Done';



const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

const transition = {
    duration: 0.5,
    ease: [0.25, 0.1, 0.25, 1],
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

export default function CompanyServices() {

    const isSmallScreen = useSmallScreen();


    return (
        <div className="min-h-screen bg-white text-gray-800">
            <div className="bg-gray-100 max-w-7xl mx-auto px-4 py-12 mt-5 flex flex-col items-center">
                <motion.h1
                    className="text-4xl font-bold text-center"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Buyer&#39;s guide
                </motion.h1>

                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    
                        
                    
                </motion.h1>



                <motion.p
                    className="w-full lg:w-3/5 text-purple-950 text-lg md:text-xl lg:text-2xl text-center font-playfair font-semibold mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    From developing your budget and to signing your name on the dotted line, learn more
                    about the home buying process.
                </motion.p>

                <div className="px-4 lg:px-24">
                    <motion.li
                        className="my-5 md:text-lg"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        Buying a home can be one of the most exciting experiences of your life. This can be true if
                        you&#39;ve purchased several homes or you&#39;re preparing to buy the first time. With the right
                        support system and the help of a trusted Destined professional, you can make the most
                        informed decisions.
                    </motion.li>
                    <motion.li
                        className="my-5 md:text-lg"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        Our Destined professional breaks down the steps of buying a home so you can start the
                        process feeling confident and prepared. From developing your budget to signing your name
                        on the dotted line, you&#39;ll find helpful tips right here.
                    </motion.li>


                </div>

                <div style={{ width: '100%' }} className="my-10">
                    <motion.p
                        className="my-5 text-purple-950 text-xl md:text-xl lg:text-2xl text-center font-playfair font-semibold"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        We are here to help every step of the way.
                    </motion.p>

                    {isSmallScreen ? (
                        // Display as an ordered list for small screens
                        <Timeline
                            sx={{
                                [`& .${timelineItemClasses.root}:before`]: {
                                    flex: 0,
                                    padding: 0,
                                },
                            }}
                        >
                            {/* Step 1: Define your goals */}
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent

                                    as={motion.div}
                                    variants={fadeIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={transition}
                                >
                                    <div >
                                        <Typography component="span" className="text-purple-950 !font-semibold text-lg md:text-xl lg:text-2xl">
                                            Define your goals
                                        </Typography>
                                        <Typography>Set clear objectives for the kind of property you want.</Typography>
                                    </div>
                                </TimelineContent>
                            </TimelineItem>

                            {/* Step 2: Pick a Destined agent */}
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent
                                    as={motion.div}
                                    variants={fadeIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={transition}
                                >
                                    <div>
                                        <Typography component="span" className="text-purple-950 !font-semibold text-lg md:text-xl lg:text-2xl">
                                            Pick a Destined agent
                                        </Typography>
                                        <Typography>Choose the right agent to guide you through the process.</Typography>
                                    </div>
                                </TimelineContent>

                            </TimelineItem>

                            {/* Step 3: Determine your financial standing */}
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent

                                    as={motion.div}
                                    variants={fadeIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={transition}
                                >
                                    <div>
                                        <Typography component="span" className="text-purple-950 !font-semibold text-lg md:text-xl lg:text-2xl">
                                            Determine your financial standing
                                        </Typography>
                                        <Typography>Review your finances to understand your buying power.</Typography>
                                    </div>
                                </TimelineContent>
                            </TimelineItem>

                            {/* Step 4: Make an offer */}
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent

                                    as={motion.div}
                                    variants={fadeIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={transition}
                                >
                                    <div>
                                        <Typography component="span" className="text-purple-950 !font-semibold text-lg md:text-xl lg:text-2xl">
                                            Make an offer
                                        </Typography>
                                        <Typography>Submit a strong and competitive offer for your desired home.</Typography>
                                    </div>
                                </TimelineContent>

                            </TimelineItem>

                            {/* Step 5: Close the deal */}
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot />
                                </TimelineSeparator>
                                <TimelineContent

                                    as={motion.div}
                                    variants={fadeIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={transition}
                                >
                                    <div>
                                        <Typography component="span" className="text-purple-950 !font-semibold text-lg md:text-xl lg:text-2xl">
                                            Close the deal on your home
                                        </Typography>
                                        <Typography>Finalize the purchase and step into your new home.</Typography>
                                    </div>
                                </TimelineContent>

                            </TimelineItem>
                        </Timeline>
                    ) : (
                        // Display the timeline for larger screens
                        <Timeline position="alternate">
                            <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    align="right"
                                    variant="body2"
                                    color="text.secondary"
                                    as={motion.div}
                                    variants={fadeIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={transition}
                                >
                                    Step 1
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector sx={{ height: '40px' }} />
                                    <TimelineDot>
                                        <HomeIcon />
                                    </TimelineDot>
                                    <TimelineConnector sx={{ height: '40px' }} />
                                </TimelineSeparator>
                                <TimelineContent
                                    sx={{ py: '12px', px: 2 }}
                                    className={`flex justify-start items-center`}
                                    as={motion.div}
                                    variants={fadeIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={transition}
                                >
                                    <Paper elevation={3} style={{ padding: '16px' }}>
                                        <Typography className="text-purple-950 font-semibold text-lg md:text-xl ">
                                            Define your goals
                                        </Typography>
                                        <Typography>Set clear objectives for the kind of property you want.</Typography>
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    align="right"
                                    variant="body2"
                                    color="text.secondary"
                                    as={motion.div}
                                    variants={fadeIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={transition}
                                >
                                    Step 2
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector sx={{ height: '40px' }} />
                                    <TimelineDot color="primary">
                                        <PersonIcon />
                                    </TimelineDot>
                                    <TimelineConnector sx={{ height: '40px' }} />
                                </TimelineSeparator>
                                <TimelineContent
                                    sx={{ py: '12px', px: 2 }}
                                    className={`flex justify-end items-center`}
                                    as={motion.div}
                                    variants={fadeIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={transition}
                                >
                                    <Paper elevation={3} style={{ padding: '16px' }}>
                                        <Typography className="text-purple-950 font-semibold text-lg md:text-xl ">
                                            Pick a Destined agent
                                        </Typography>
                                        <Typography>Choose the right agent to guide you through the process.</Typography>
                                    </Paper>

                                </TimelineContent>
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    align="right"
                                    variant="body2"
                                    color="text.secondary"
                                    as={motion.div}
                                    variants={fadeIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={transition}
                                >
                                    Step 3
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector sx={{ height: '40px' }} />
                                    <TimelineDot color="primary" variant="outlined">
                                        <MonetizationOnIcon />
                                    </TimelineDot>
                                    <TimelineConnector sx={{ bgcolor: 'secondary.main', height: '40px' }} />
                                </TimelineSeparator>
                                <TimelineContent
                                    sx={{ py: '12px', px: 2 }}
                                    className={`flex justify-start items-center`}
                                    as={motion.div}
                                    variants={fadeIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={transition}
                                >
                                    <Paper elevation={3} style={{ padding: '16px' }}>
                                        <Typography className="text-purple-950 font-semibold text-lg md:text-xl ">
                                            Determine your financial standing
                                        </Typography>
                                        <Typography>Review your finances to understand your buying power.</Typography>
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    align="right"
                                    variant="body2"
                                    color="text.secondary"
                                    as={motion.div}
                                    variants={fadeIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={transition}
                                >
                                    Step 4
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector sx={{ bgcolor: 'secondary.main', height: '40px' }} />
                                    <TimelineDot color="secondary">
                                        <OfferIcon />
                                    </TimelineDot>
                                    <TimelineConnector sx={{ height: '40px' }} />
                                </TimelineSeparator>
                                <TimelineContent
                                    sx={{ py: '12px', px: 2 }}
                                    className={`flex ${isSmallScreen ? 'justify-start' : 'justify-end'} items-center`}
                                    as={motion.div}
                                    variants={fadeIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={transition}
                                >
                                    <Paper elevation={3} style={{ padding: '16px' }}>
                                        <Typography className="text-purple-950 font-semibold text-lg md:text-xl ">
                                            Make an offer
                                        </Typography>
                                        <Typography>Submit a strong and competitive offer for your desired home.</Typography>
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    align="right"
                                    variant="body2"
                                    color="text.secondary"
                                    as={motion.div}
                                    variants={fadeIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={transition}
                                >
                                    Step 5
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector sx={{ height: '40px' }} />
                                    <TimelineDot color="secondary">
                                        <DoneIcon />
                                    </TimelineDot>
                                    <TimelineConnector sx={{ m: '20px 0' }} />
                                </TimelineSeparator>
                                <TimelineContent
                                    sx={{ py: '12px', px: 2 }}
                                    className={`flex justify-start items-center`}
                                    as={motion.div}
                                    variants={fadeIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={transition}
                                >
                                    <Paper elevation={3} style={{ padding: '16px' }}>
                                        <Typography className="text-purple-950 font-semibold text-lg md:text-xl ">
                                            Close the deal on your home
                                        </Typography>
                                        <Typography>Finalize the purchase and step into your new home.</Typography>
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    )}


                </div>


            </div>

            <div className="bg-gray-100 max-w-7xl mx-auto px-4 py-12 mt-5 flex flex-col items-center">
                <motion.h1
                    className="text-4xl font-bold text-center mb-8"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Seller&#39;s Guide
                </motion.h1>

                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    
                        
                    
                </motion.h1>

                <motion.p
                    className="w-full lg:w-3/5 text-purple-950 text-lg md:text-xl lg:text-2xl text-center font-playfair font-semibold mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    From determining your home&#39;s value to closing day, learn more about the home
                    selling process.
                </motion.p>

                {/* 2 paragraph */}

                <div style={{ width: '100%' }} className="my-10">
                    <motion.p
                        className="my-5 text-purple-950 text-xl md:text-xl lg:text-2xl text-center font-playfair font-semibold"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        We are here to help every step of the way.
                    </motion.p>

                    {isSmallScreen ? (
                        // Display as an ordered list for small screens
                        <Timeline
                            sx={{
                                [`& .${timelineItemClasses.root}:before`]: {
                                    flex: 0,
                                    padding: 0,
                                },
                            }}
                        >
                            {/* Step 1: Define your goals */}
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent

                                    as={motion.div}
                                    variants={fadeIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={transition}
                                >
                                    <div >
                                        <Typography component="span" className="text-purple-950 !font-semibold text-lg md:text-xl lg:text-2xl">
                                            Choose Your Destined Agent
                                        </Typography>
                                        <Typography>Partner with an expert agent to guide you through the entire process and get the best results.</Typography>
                                    </div>
                                </TimelineContent>
                            </TimelineItem>

                            {/* Step 2: Pick a Destined agent */}
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent
                                    as={motion.div}
                                    variants={fadeIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={transition}
                                >
                                    <div>
                                        <Typography component="span" className="text-purple-950 !font-semibold text-lg md:text-xl lg:text-2xl">
                                            Prepare Your Home for Sale
                                        </Typography>
                                        <Typography>Clean, declutter, and stage your home to make it attractive for potential buyers.</Typography>
                                    </div>
                                </TimelineContent>

                            </TimelineItem>

                            {/* Step 3: Determine your financial standing */}
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent

                                    as={motion.div}
                                    variants={fadeIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={transition}
                                >
                                    <div>
                                        <Typography component="span" className="text-purple-950 !font-semibold text-lg md:text-xl lg:text-2xl">
                                            Determine Your Home&#39;s Value
                                        </Typography>
                                        <Typography>Work with your agent to set a competitive price by comparing similar properties in your area.</Typography>
                                    </div>
                                </TimelineContent>
                            </TimelineItem>

                            {/* Step 4: Make an offer */}
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent

                                    as={motion.div}
                                    variants={fadeIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={transition}
                                >
                                    <div>
                                        <Typography component="span" className="text-purple-950 !font-semibold text-lg md:text-xl lg:text-2xl">
                                            Accept the Offer
                                        </Typography>
                                        <Typography>Review offers, negotiate if needed, and accept the one that aligns with your goals.</Typography>
                                    </div>
                                </TimelineContent>

                            </TimelineItem>

                            {/* Step 5: Close the deal */}
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot />
                                </TimelineSeparator>
                                <TimelineContent

                                    as={motion.div}
                                    variants={fadeIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={transition}
                                >
                                    <div>
                                        <Typography component="span" className="text-purple-950 !font-semibold text-lg md:text-xl lg:text-2xl">
                                            Close on Your Home
                                        </Typography>
                                        <Typography>Complete the closing process and officially transfer ownership to the buyer.</Typography>
                                    </div>
                                </TimelineContent>

                            </TimelineItem>
                        </Timeline>
                    ) : (
                        // Display the timeline for larger screens
                        <Timeline position="alternate">
                            <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    align="right"
                                    variant="body2"
                                    color="text.secondary"
                                    as={motion.div}
                                    variants={fadeIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={transition}
                                >
                                    Step 1
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector sx={{ height: '40px' }} />
                                    <TimelineDot>
                                        <PersonIcon />
                                    </TimelineDot>
                                    <TimelineConnector sx={{ height: '40px' }} />
                                </TimelineSeparator>
                                <TimelineContent
                                    sx={{ py: '12px', px: 2 }}
                                    className={`flex justify-start items-center`}
                                    as={motion.div}
                                    variants={fadeIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={transition}
                                >
                                    <Paper elevation={3} style={{ padding: '16px' }}>
                                        <Typography className="text-purple-950 font-semibold text-lg md:text-xl ">
                                            Choose Your Destined Agent
                                        </Typography>
                                        <Typography>Partner with an expert agent to guide you through the entire process and get the best results.</Typography>
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    align="right"
                                    variant="body2"
                                    color="text.secondary"
                                    as={motion.div}
                                    variants={fadeIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={transition}
                                >
                                    Step 2
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector sx={{ height: '40px' }} />
                                    <TimelineDot color="primary">
                                        <HomeIcon />
                                    </TimelineDot>
                                    <TimelineConnector sx={{ height: '40px' }} />
                                </TimelineSeparator>
                                <TimelineContent
                                    sx={{ py: '12px', px: 2 }}
                                    className={`flex justify-end items-center`}
                                    as={motion.div}
                                    variants={fadeIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={transition}
                                >
                                    <Paper elevation={3} style={{ padding: '16px' }}>
                                        <Typography className="text-purple-950 font-semibold text-lg md:text-xl ">
                                            Prepare Your Home for Sale
                                        </Typography>
                                        <Typography>Clean, declutter, and stage your home to make it attractive for potential buyers.</Typography>
                                    </Paper>

                                </TimelineContent>
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    align="right"
                                    variant="body2"
                                    color="text.secondary"
                                    as={motion.div}
                                    variants={fadeIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={transition}
                                >
                                    Step 3
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector sx={{ height: '40px' }} />
                                    <TimelineDot color="primary" variant="outlined">
                                        <MonetizationOnIcon />
                                    </TimelineDot>
                                    <TimelineConnector sx={{ bgcolor: 'secondary.main', height: '40px' }} />
                                </TimelineSeparator>
                                <TimelineContent
                                    sx={{ py: '12px', px: 2 }}
                                    className={`flex justify-start items-center`}
                                    as={motion.div}
                                    variants={fadeIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={transition}
                                >
                                    <Paper elevation={3} style={{ padding: '16px' }}>
                                        <Typography className="text-purple-950 font-semibold text-lg md:text-xl ">
                                            Determine Your Home&#39;s Value
                                        </Typography>
                                        <Typography>Work with your agent to set a competitive price by comparing similar properties in your area.</Typography>
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    align="right"
                                    variant="body2"
                                    color="text.secondary"
                                    as={motion.div}
                                    variants={fadeIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={transition}
                                >
                                    Step 4
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector sx={{ bgcolor: 'secondary.main', height: '40px' }} />
                                    <TimelineDot color="secondary">
                                        <OfferIcon />
                                    </TimelineDot>
                                    <TimelineConnector sx={{ height: '40px' }} />
                                </TimelineSeparator>
                                <TimelineContent
                                    sx={{ py: '12px', px: 2 }}
                                    className={`flex ${isSmallScreen ? 'justify-start' : 'justify-end'} items-center`}
                                    as={motion.div}
                                    variants={fadeIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={transition}
                                >
                                    <Paper elevation={3} style={{ padding: '16px' }}>
                                        <Typography className="text-purple-950 font-semibold text-lg md:text-xl ">
                                            Accept the Offer
                                        </Typography>
                                        <Typography>Review offers, negotiate if needed, and accept the one that aligns with your goals.</Typography>
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    align="right"
                                    variant="body2"
                                    color="text.secondary"
                                    as={motion.div}
                                    variants={fadeIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={transition}
                                >
                                    Step 5
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector sx={{ height: '40px' }} />
                                    <TimelineDot color="secondary">
                                        <DoneIcon />
                                    </TimelineDot>
                                    <TimelineConnector sx={{ m: '20px 0' }} />
                                </TimelineSeparator>
                                <TimelineContent
                                    sx={{ py: '12px', px: 2 }}
                                    className={`flex justify-start items-center`}
                                    as={motion.div}
                                    variants={fadeIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={transition}
                                >
                                    <Paper elevation={3} style={{ padding: '16px' }}>
                                        <Typography className="text-purple-950 font-semibold text-lg md:text-xl ">
                                            Close on Your Home
                                        </Typography>
                                        <Typography>Complete the closing process and officially transfer ownership to the buyer.</Typography>
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    )}


                </div>


            </div>

            <div className="bg-gray-100 max-w-7xl mx-auto px-4 lg:px-10 lg:mb-20  flex flex-col items-center">
                <motion.div
                    className="mb-10"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <h3 className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">Choose a Destined Agent</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        The best thing you can do to make the selling process as quick and as easy as possible is
                        to choose a Destined Professional &#8211; and our Destined Agents are here to help every step of
                        the way. We can offer cutting edge technology, comprehensive marketing strategies, and
                        can effectively and efficiently guide you through the real estate process. We understand
                        the nuances of the market and can work with you to determine a competitive and fair price
                        for your home.
                    </p>
                </motion.div>

                <motion.div
                    className="mb-10"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <h3 className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">Marketing your property</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Our Destined agents have access to advanced technology and marketing strategies, and
                        have the knowledge and expertise to help sell your home. A few highlights include:
                    </p>

                    <div className="ms-10 mt-5">
                        {/* Child motion.div elements for more headings and descriptions */}
                        <motion.div
                            className="mb-8"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                        >
                            <h4 className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-2">Online Listing for your home</h4>
                            <p className="text-base text-gray-500 leading-relaxed">
                                Online listings feature information specific to each property and the surrounding area, as
                                well as a property image. An invaluable marketing tool, the property images give potential
                                buyers an instant preview, which saves time and visually sparks interest.
                            </p>
                        </motion.div>

                        <motion.div
                            className="mb-8"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                        >
                            <h4 className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-2">Mobile Presence</h4>
                            <p className="text-base text-gray-500 leading-relaxed">
                                Prospective buyers will be able to access the same great search technology available on
                                our website while on the go&#33; Our website markets your property and our digital marketing
                                campaign will ensure your property reaches to the elite buyers that you so desire.
                            </p>
                        </motion.div>

                        <motion.div
                            className="mb-8"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                        >
                            <h4 className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-2">Advanced Marketing</h4>
                            <p className="text-base text-gray-500 leading-relaxed">
                                We have advanced marketing and digital strategies that can help drive more traffic to your
                                listing. The Destined network of agents is one of the greatest in the country and can be a

                                great resource for spreading the word about your property by word of mouth, online
                                marketing, and other advertising opportunities.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>








            </div>
        </div>
    );
}
