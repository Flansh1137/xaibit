import React, { useState } from 'react';

function CounsellorLogin() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">Counsellor Login</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">User Name:</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password:</label>
            <div className="relative">
              <input
                type={passwordVisible ? 'text' : 'password'}
                className="w-full p-2 border border-gray-300 rounded pr-10"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-2 text-gray-600 hover:text-gray-800"
              >
                {passwordVisible ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CounsellorLogin;
