import React from 'react'

const Signup = () => {
  return (
    <div className="md:my-16 md:mx-24 flex flex-col justify-center items-center md:flex-row gap-4 md:gap-24">
        <div className="md:w-[55%]">
            <h4 className="text-3xl font-bold">Sign Up</h4>
            <div className="h-1 bg-green-600 rounded-full w-24 mt-2 mb-11"></div>
            <form className="flex flex-col gap-6">
                <input
                type="text"
                placeholder="Enter Your Name *"
                required
                className="py-3 px-4 placeholder:text-black bg-gray-200 w-full rounded-md shadow-md"
                />
                <input
                type="text"
                placeholder="Enter Your E-mail Id *"
                required
                className="py-3 px-4 placeholder:text-black bg-gray-200 w-full rounded-md shadow-md"
                />
                <input
                type="text"
                placeholder="Enter Your Password *"
                required
                className="py-3 px-4 placeholder:text-black bg-gray-200 w-full rounded-md shadow-md"
                />
                <input
                type="text"
                placeholder="Enter Your Confirm Password *"
                required
                className="py-3 px-4 placeholder:text-black bg-gray-200 w-full rounded-md shadow-md"
                />

                <button className="bg-black p-3 rounded-md shadow-lg text-green-600 text-lg font-bold mt-2">
                Submit
                </button>
            </form>
        </div>
    </div>
  )
}

export default Signup