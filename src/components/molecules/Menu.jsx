'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SideBar from '../molecules/SideBar'
// import ThemeSwitch from '../atoms/ThemeSwitch'
import headerNavLinks from '@/content/headerNavLinks'
// import SectionContainer from '../SectionContainer'
import classNames from 'classnames';
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Menu = () => {
    // State to store open dropdowns
    const [openDropdowns, setOpenDropdowns] = useState({});
    const [scrolled, setScrolled] = useState(false);
    const pathName = usePathname();

    // Function to handle scroll event
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Function to handle hover (open or close the dropdown)
    const handleMouseEnter = (title) => {
        setOpenDropdowns(prev => ({ ...prev, [title]: true }));
    };

    const handleMouseLeave = (title) => {
        setOpenDropdowns(prev => ({ ...prev, [title]: false }));
    };

    return (
        <>
            <header
                className={classNames(
                    'z-40 py-1 fixed top-0 transition-all duration-500 w-full',
                    scrolled ? 'bg-white text-black shadow-lg' : 'bg-transparent text-white'
                )}
            >
                <div className="mx-auto flex max-w-screen-2xl items-center justify-between ">
                    {/* Left Side - Logo */}
                    <div className="pb-4 flex items-center">
                        <Link
                            href="/"
                            aria-label="Destined Estates"
                        >
                            <img src={'/static/Logo_1.png'} alt="LOGO" width={300}  />
                        </Link>
                        {/* 
                        className={classNames(
                                'horizontal-underline text-2xl font-extrabold',
                                {
                                    'horizontal-underline-active': pathName === '/',
                                    'text-black': scrolled,
                                    'text-white': !scrolled,
                                }
                            )}
                         */}
                    </div>

                    {/* Middle - Navigation Links and Sidebar */}
                    <div className="flex items-center text-base leading-5 lg:ms-20">
                        {/* Links visible on xl screens */}
                        <div className="hidden space-x-10 xl:flex">
                            {headerNavLinks.map(({ title, href, links }) => {
                                const active = pathName?.includes(href);
                                return (
                                    <div
                                        key={title}
                                        className="relative py-6"
                                        onMouseEnter={() => handleMouseEnter(title)}
                                        onMouseLeave={() => handleMouseLeave(title)}
                                    >
                                        <Link
                                            href={href}
                                            className={classNames(
                                                'horizontal-underline text-base pb-1',
                                                {
                                                    'horizontal-underline-active': active,
                                                    'text-black horizontal-underline-color': scrolled,
                                                    'text-white': !scrolled,
                                                }
                                            )}
                                            aria-label={title}
                                        >
                                            <span className="font-semibold tracking-wide">
                                                {title}
                                            </span>
                                        </Link>

                                        {/* Dropdown Menu */}
                                        {links.length > 0 && (
                                            <div
                                                className={`absolute -left-5 mt-6 w-48 bg-white shadow-lg py-2 z-10 ${openDropdowns[title] ? 'block' : 'hidden'
                                                    }`}
                                            >
                                                <div className="arrow-up">
                                                    {links.map(({ href, title }) => (
                                                        <Link
                                                            key={title}
                                                            href={href}
                                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#ff8200] transition duration-300"
                                                        >
                                                            {title}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Sidebar visible on screens smaller than xl */}
                        <div>
                            <SideBar />
                        </div>
                    </div>

                    {/* Right Side - Icons */}
                    <div className="space-x-6 items-center hidden xl:flex">
                        <MdEmail color={scrolled ? 'black' : 'white'} size={30} />
                        <FaLocationDot color={scrolled ? 'black' : 'white'} size={30} />
                    </div>
                </div>
            </header>


        </>
    )
}

export default Menu;
