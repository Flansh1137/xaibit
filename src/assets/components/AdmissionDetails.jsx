import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function AdmissionDetails() {
  const { user, logout } = useAuth0();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-3/4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Admission Details</h1>
          <button
            onClick={() => logout({ returnTo: window.location.origin })}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Logout
          </button>
        </div>
        {user && <p className="text-gray-700 mb-4">Welcome, {user.name}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input 
            type="text" 
            id="name" 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          />
        </div>
        
        <div className="flex justify-around mt-8">
          <div className="text-center">
            <div className="mb-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                New Registration
              </button>
            </div>
            
          </div>

          <div className="text-center">
            <div className="mb-4">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Main Program
              </button>
            </div>
            
          </div>

          <div className="text-center">
            <div className="mb-4">
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Data Analysis
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdmissionDetails;
