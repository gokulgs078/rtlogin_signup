import React, { useState } from 'react';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-[#c4ccca] min-h-screen flex items-center justify-center">
      <div className="bg-[#ebf0ef] p-6 rounded-lg max-w-xl w-full text-center shadow-lg">
        <h1 className="text-2xl font-bold text-[#0a0a0a] mb-6">Sign Up</h1>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm text-gray-600 mb-1 text-start">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-[#06073f] rounded-md focus:outline-none focus:border-[#007BFF] text-gray-700"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-gray-600 mb-1 text-start">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-[#06073f] rounded-md focus:outline-none focus:border-[#007BFF] text-gray-700"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-gray-600 mb-1 text-start">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-[#06073f] rounded-md focus:outline-none focus:border-[#007BFF] text-gray-700"
            />
          </div>

          <div>
            <label htmlFor="confirmpassword" className="block text-sm text-gray-600 mb-1 text-start">Confirm Password</label>
            <input
              type="password"
              id="confirmpassword" 
              placeholder="Confirm your password"
              value={formData.confirmpassword} 
              onChange={handleChange} 
              className="w-full p-3 border border-[#06073f] rounded-md focus:outline-none focus:border-[#007BFF] text-gray-700"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#191a1a] text-white rounded-md text-lg hover:bg-[#0056b3] transition duration-300">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
