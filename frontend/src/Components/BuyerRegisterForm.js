import React from "react";
import Poza4 from "../Image/icons8-organic-food-96.png"
export default function BuyerRegisterForm(){

    return(
        <div className="flex items-center justify-center bg-gray-100 hidden" id="buyerForm">
            <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
                <div className="flex justify-center">
                    <img className="w-20 h-20 text-blue-600" src={Poza4}/>
                </div>
                <h3 className="text-2xl font-bold text-center">Buy from us</h3>
                <form action="">
                    <div className="mt-4">
                        <div>
                            <label className="block" htmlFor="Name">Name</label>
                                <input type="text" placeholder="Name"
                                       className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"/>
                        </div>
                        <div className="mt-4">
                            <label className="block" htmlFor="email">Email</label>
                                <input type="text" placeholder="Email"
                                       className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"/>
                        </div>
                        <div className="mt-4">
                            <label className="block">Password</label>
                                <input type="password" placeholder="Password"
                                       className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"/>
                        </div>
                        <div className="mt-4">
                            <label className="block">Confirm Password</label>
                                <input type="password" placeholder="Password"
                                       className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"/>
                        </div>
                        <span className="text-xs text-red-400">Password must be same!</span>
                        <div className="flex">
                            <button
                                className="w-full px-6 py-2 mt-4 text-white bg-green-500 rounded-lg hover:bg-green-700">Create
                                Account
                            </button>
                        </div>

                    </div>
                </form>
                <div className="mt-6 text-grey-dark">
                    Already have an account?
                    <button className="text-green-600 hover:underline" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                        Log in
                    </button>
                </div>
            </div>
        </div>
    )
}