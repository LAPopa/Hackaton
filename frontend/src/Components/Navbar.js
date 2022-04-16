import React from "react";
import LoginModal from "./LoginModal";
export default function Navbar() {

    const handleClick = () => {
        document.getElementById("burger-menu1").classList.toggle("hidden");
        document.getElementById("burger-menu2").classList.toggle("hidden");
    }
    return(
        <nav className="flex bg-white flex-wrap items-center justify-between p-4">
            <div className="lg:order-2 w-auto lg:w-1/5 lg:text-center">
                <a className="text-xl text-gray-800 font-semibold font-heading" href="/">
                    VillageHub
                </a>
            </div>
            <div className="block lg:hidden">
                <button
                    className="navbar-burger flex items-center py-2 px-3 text-green-500 rounded border border-green-500" onClick={handleClick}>
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>
                            Menu
                        </title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z">
                        </path>
                    </svg>
                </button>
            </div>
            <div className="navbar-menu hidden lg:order-1 lg:block w-full lg:w-2/5" id="burger-menu1">
                <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 hover:text-green-800" href="/">
                    Home
                </a>
                <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 hover:text-green-800" href="/activities">
                    Activities
                </a>
                <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 hover:text-green-800" href="/shop">
                    Shop
                </a>
            </div>
            <div className="navbar-menu hidden lg:order-3 lg:block w-full lg:w-2/5" id="burger-menu2">
                <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 hover:text-green-800" href="/register-page" >
                    Register
                </a>
                <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 hover:text-green-800">
                    <LoginModal/>
                </a>
                <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 hover:text-green-800" href="/contact">
                    Contact
                </a>
            </div>
        </nav>
    )
}