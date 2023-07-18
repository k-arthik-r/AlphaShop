import React, { useState } from 'react';
import Second from './Second';

const App = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if userid is "karthik" and password is "admin1234"
    if (userId === 'karthik' && password === 'admin1234') {
      setPasswordError('');
      setSubmitted(true);
    } else {
      setPasswordError('Invalid credentials.');
    }
  };

  if (submitted) {
    return <Second />;
  }

  return (
    <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-green-500 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full mx-auto p-8 bg-white shadow-md rounded">
        <h1 className="text-3xl font-bold mb-6">Log in.</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block mb-2 font-semibold" htmlFor="userid">
              Username:
            </label>
            <input
              type="text"
              id="userid"
              name="userid"
              placeholder="Enter Username"
              className="border border-gray-300 rounded py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-300"
              value={userId}
              onChange={handleUserIdChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-semibold" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              className={`border ${
                passwordError ? 'border-red-500' : 'border-gray-300'
              } rounded py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-300`}
              value={password}
              onChange={handlePasswordChange}
              required
            />
            {passwordError && (
              <p className="text-red-500 mt-2">{passwordError}</p>
            )}
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Submit
            </button>
          </div>
          <div className="text-center mt-4">
            <a href="/forgot-password" className="text-blue-500 underline">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;