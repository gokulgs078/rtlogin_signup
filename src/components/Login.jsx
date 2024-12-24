import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Login() {
    const [formData, setFormData] = useState({
      email: '',
      password: ''
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
          <h1 className="text-2xl font-bold-text-[#0a0a0a] mb-6 ">Login</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-600 mb-1 text-start"></label>
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
              <label htmlFor="password" className="block text-sm text-gray-600 mb-1 text-start"></label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border border-[#06073f] rounded-md focus:outline-none focus:border-[#007BFF] text-gray-700"
              />
              <span><Link to="#" className="text-blue-500 hover:underline flex justify-end pt-3">Forgot Password?</Link></span>

            </div>
            <div className="flex flex-col items-center space-y-2">
            <button
              type="submit"
              className="w-full py-3 bg-[#191a1a] text-white rounded-md text-lg hover:bg-[#0056b3] transition duration-300"
            >
              Login
            </button>
            <span>Don't have an account?<Link to="/signup" className="text-blue-500 hover:underline"> Signup</Link></span>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Login
