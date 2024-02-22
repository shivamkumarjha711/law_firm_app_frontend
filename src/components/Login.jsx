import React from 'react'
import { RxCrossCircled } from 'react-icons/rx'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white w-96 p-4 rounded shadow-lg">
              <div className='flex justify-between'>
            <div>
              <h4 className="text-3xl font-bold">Sign Up</h4>
              <div className="h-1 bg-green-600 rounded-full w-24 mt-2 mb-11"></div>
            </div>
              <div className='mt-2 mr-5 text-3xl'>
                <button onClick={() => navigate(-1)}><RxCrossCircled /></button>
              </div>
            </div>
            <form className="flex flex-col gap-6">
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

                <button className="bg-black p-3 rounded-md shadow-lg text-green-600 text-lg font-bold mt-2">
                Submit
                </button>
            </form>
        </div>
    </div>
  )
}

export default Login