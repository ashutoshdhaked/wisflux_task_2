import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';


const signInUser = async (user) => {
  const response = await axios.post("http://localhost:3000/admin/signin", user, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

const SignIn = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const mutation = useMutation({
    mutationFn: signInUser,  
    onSuccess: (data) => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('name', data.name);
        navigate("/dashboard");
      } else {
        alert("An error occurred. Please try again later.");
      }
    },
    onError: () => {
      alert("An error occurred. Please try again later.");
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const submit = (e) => {
    e.preventDefault();
    mutation.mutate(user); 
  };

  return (
    <section className="bg-gray-200">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow-md md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign In
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={submit}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={user.email}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={user.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>
              <div className='flex justify-between align-bottom'>
                <p className="text-blue-700 hover:text-blue-900 underline cursor-pointer">forgot password ? </p>
                <NavLink to="/register" className='text-slate-700 hover:text-slate-900 cursor-pointer bg-slate-100 py-1 px-2 rounded-sm'>
                  Register new user ?
                </NavLink>
              </div>
              <button
                type="submit"
                className="text-white bg-slate-600 hover:bg-slate-800 text-center py-2 px-8 rounded-md w-full"
                disabled={mutation.isLoading}
              >
                {mutation.isLoading ? 'Signing In...' : 'Sign In'}
              </button>
              {mutation.isError && (
                <div className="text-red-500 text-sm mt-2">
                  An error occurred. Please try again later.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
