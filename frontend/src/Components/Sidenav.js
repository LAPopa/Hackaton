import React from "react";
import SidenavShop from "../Image/SidenavShop.jpg"
export default function Sidenav(){
    return(<div>
            <div className="w-60 h-full shadow-md px-1 absolute" style={{
                backgroundImage: `url(${SidenavShop})`
            }}>
                <ul className="relative">
                    <div className="flex justify-center">
                        <div className="mb-3 xl:w-96 py-10" >
                            <input
                                type="text"
                                className="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "
                                id="exampleFormControlInput1"
                                placeholder="Search products"
                            />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="mb-3 xl:w-96 py-12">
                            <select className="form-select appearance-none
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding bg-no-repeat
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                <option selected disabled hidden>Product type</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="mb-3 xl:w-96">
                            <select className="form-select appearance-none
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding bg-no-repeat
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                <option selected disabled hidden>Price</option>
                                <option value="1">Ascending</option>
                                <option value="2">Descending</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex space-x-2 justify-center py-20">
                        <button type="button"
                                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Clear filters
                        </button>
                    </div>
                </ul>
            </div>
        </div>
    )
}