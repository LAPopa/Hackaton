import React from "react";
export default function Sidenav(){
    return(<>
            <div className="w-60 h-full px-1 absolute bg-gray-100">
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
            focus:text-gray-700 focus:border-green-500 focus:outline-none
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
          focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none" aria-label="Default select example">
                                <option selected disabled hidden>Product type</option>
                                <option value="1">Tea</option>
                                <option value="2">Soap</option>
                                <option value="3">Balsam</option>
                                <option value="4">Preserve</option>
                                <option value="5">Handicrafts</option>
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
          focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none" aria-label="Default select example">
                                <option selected disabled hidden>Price</option>
                                <option value="1">Ascending</option>
                                <option value="2">Descending</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex space-x-2 justify-center py-20">
                        <button type="button"
                                className="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Clear filters
                        </button>
                    </div>
                </ul>
            </div>
        </>
    )
}