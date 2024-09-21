const Footer = () => {
    return (
        <footer className="bg-[#0f3557] text-white p-10">
            <div className="container max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Section */}
                <div>
                    <h2 className="text-xl font-semibold">Destined Estates</h2>
                    <div className="flex space-x-4 mt-4">
                        <a href="https://www.linkedin.com" aria-label="LinkedIn">
                            <img src={'/static/icons/linkedin.png'} alt="linkedin-log" width={20} height={20} />
                        </a>
                        <a href="https://www.somewhere.com" aria-label="twitter">
                        <img src={'/static/icons/x.png'} alt="twitter-log" width={20} height={20} />
                        </a>
                        <a href="https://www.youtube.com" aria-label="YouTube">
                        <img src={'/static/icons/youtube.png'} alt="youTube-log" width={25} height={25} />
                        </a>
                    </div>
                </div>

                {/* Center Section */}
                <div>
                    <h3 className="text-sm font-medium text-gray-500">ABOUT US</h3>
                    <ul className="mt-2 space-y-1 text-gray-300">
                        <li><a href="#" className="hover:text-[#ff8200] text-md font-semibold transition duration-300">Who We Are</a></li>
                        <li><a href="#" className="hover:text-[#ff8200] text-md font-semibold transition duration-300">Overview</a></li>
                        <li><a href="#" className="hover:text-[#ff8200] text-md font-semibold transition duration-300">Real&#8208;estate Presence</a></li>
                        <li><a href="#" className="hover:text-[#ff8200] text-md font-semibold transition duration-300">Leadership</a></li>
                    </ul>
                </div>

                {/* Right Section */}
                <div>
                    <h3 className="text-sm font-medium text-gray-500">OUR COMMITMENT</h3>
                    <ul className="mt-4 space-y-2 text-gray-300">
                        <li><a href="#" className="hover:text-[#ff8200] text-md font-semibold transition duration-300">Our Business Integration Structure</a></li>
                        <li><a href="#" className="hover:text-[#ff8200] text-md font-semibold transition duration-300">Services by the Company</a></li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom Links */}
            <div className="mt-8 border-t border-gray-500 pt-4">
                <div className="container mx-auto flex flex-col md:flex-row justify-between flex-wrap text-sm font-bold text-gray-300">

                    <a href="#" className="hover:text-[#ff8200] transition duration-300">Terms of Use</a>
                    <a href="#" className="hover:text-[#ff8200] transition duration-300">Accessibility Notice</a>
                    <a href="#" className="hover:text-[#ff8200] transition duration-300">Cookie Policy</a>
                    <a href="#" className="hover:text-[#ff8200] transition duration-300">Data Protection Policy & Privacy Notice</a>
                    <a href="#" className="hover:text-[#ff8200] transition duration-300">Web Fraud & Phishing Warning</a>
                    <a href="#" className="hover:text-[#ff8200] transition duration-300">Complaints Policy</a>
                    <p className="mt-4 md:mt-0">© 2024 Destined Estates</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
