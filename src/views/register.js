import { useState } from "react";
import { NavLink } from "react-router-dom";


const Register = ()=>{
    const [user , setUser] = useState({
       fullname :'', 
       email : '',
       password :''
      });
      function handleInputChange(e){
       const { name, value } = e.target;
       setUser(prevState => ({
           ...prevState,
           [name]: value
       }));
     }

     const submit = (e)=>{
        e.preventDefault();
        console.log(user);
    }


    return(
        <>
          <section className="bg-gray-200 ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow-md  md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                New User Register
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={submit}>
              <div>
                  <label
                    htmlFor="fullname"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your fullName
                  </label>
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    value={user.fullname}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="your name"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
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
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={user.password}
                    onChange={handleInputChange} 
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required=""
                  />
                </div>
                 <div className="flex justify-end">
                 <NavLink  to="/signin" className='text-slate-700 hover:text-slate-900 cursor-pointer bg-slate-100 py-1 px-2 rounded-sm'>Already a user ?</NavLink> 
                 </div>
                <button
                 type="submit"
                 className=" text-white bg-slate-600 hover:bg-slate-800 text-center py-2 px-8 rounded-md w-full"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default Register;