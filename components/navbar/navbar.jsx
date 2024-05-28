"use client";
import React, { useState } from "react";
import Image from "next/image";
import LOGO from "../../assets/logo.png"
import Link from "next/link";


const Navbar = () => {
    const [isClick, setIsClick] = useState(false);
    const toggleNavbar = () => {
        setIsClick(!isClick);
    };

    const [logged, setLogged] = useState(window.localStorage.getItem('user') !== null);

    return (
        <nav className="font-bold bg-black text-white mx-auto fixed top-0 left-0 right-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Image src={LOGO} alt="logo" className=" w-16 " />
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center space-x-4">
                            <span href="#about" onClick={() => {
                                document.getElementById("about-go").scrollIntoView({ behavior: "smooth" });
                            }} className="text-neutral-300 hover:text-white hover:border-b-4 hover:border-cyan-500 p-2 rounded transition duration-200 ease-in-out">
                                About
                            </span>
                            <span href="#ships" onClick={() => {
                                document.getElementById("ships-go").scrollIntoView({ behavior: "smooth" });
                            }}  className="text-neutral-300 hover:text-white hover:border-b-4 hover:border-cyan-500 p-2 rounded transition duration-200 ease-in-out">
                                Ships
                            </span>
                            <span href="#maps" onClick={() => {
                                document.getElementById("maps-go").scrollIntoView({ behavior: "smooth" });
                            }} className="text-neutral-300 hover:text-white hover:border-b-4 hover:border-cyan-500 p-2 rounded transition duration-200 ease-in-out">
                                Maps
                            </span>
                            <Link href="#ranking"
                                onClick={() => {
                                    document.getElementById("ranking-go").scrollIntoView({ behavior: "smooth" });
                                }}
                            className="text-neutral-300 hover:text-white hover:border-b-4 hover:border-cyan-500 p-2 rounded transition duration-200 ease-in-out">
                                Ranking
                            </Link>
                            {
                                logged ? (
                                    <span className="text-cyan-500">{
                                        window.localStorage.getItem('user')
                                        }</span>) : (
                                        <Link href="/login" className="text-white hover:bg-cyan-500 rounded-lg transition duration-200 ease-in-out bg-cyan-800 p-2 pr-4 pl-4">
                                        Login
                                    </Link>
                                    )
                            }

                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            onClick={toggleNavbar}
                        >
                            {isClick ? (
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isClick && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="/" className="text-white hover:bg-cyan-500 rounded-lg p-2 block transition duration-200 ease-in-out">
                            Home
                        </a>
                        <a href="/" className="text-white hover:bg-cyan-500 rounded-lg p-2 block transition duration-200 ease-in-out">
                            About
                        </a>
                        <a href="/" className="text-white hover:bg-cyan-500 rounded-lg p-2 block transition duration-200 ease-in-out">
                            Piercing
                        </a>
                        <a href="/" className="text-white hover:bg-cyan-500 rounded-lg p-2 block transition duration-200 ease-in-out">
                            Contact
                        </a>
                        <a href="/" className="text-white hover:bg-cyan-500 rounded-lg p-2 block transition duration-200 ease-in-out">
                            Login
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
