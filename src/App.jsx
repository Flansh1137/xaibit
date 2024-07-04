import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  console.log('current user', user);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg">
        {isAuthenticated && <h3 className="text-2xl font-bold mb-4">Hello {user.name}</h3>}
        {isAuthenticated ? (
          <button
            onClick={() => logout({ returnTo: window.location.origin })}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => loginWithRedirect()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login with Redirect
          </button>
        )}
      </div>
    </div>
  );
}

export default App;

