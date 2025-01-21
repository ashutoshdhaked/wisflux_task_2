import { useState } from "react";

const CreateUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    dob: "",
    branch: "",
    semester: null,
  });
  const [image, setimage] = useState(null);
  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setimage(selectedFile);
  };

  const handaleChange = (e) => {
    const { name, value } = e.target;
    setUser((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", image);
    data.append("user", user);
    // const option = {
    //   method: "POST",
    //   body: data,
    // };
   console.log('data : '+  data);
   console.log({user , image});
   

   

  };

  return (
    <>
      <section className="bg-gray-200">
        <div className="flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow-md  md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Add New User
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={submit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Student Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={user.name}
                    onChange={handaleChange}
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
                    Student Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={user.email}
                    onChange={handaleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="dob"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Student Date Of Birth
                  </label>
                  <input
                    type="date"
                    name="dob"
                    id="dob"
                    value={user.dob}
                    onChange={handaleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>

               <div>
               <label
                    htmlFor="branch"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Student Branch
                  </label>
               <select
                  id="branch"
                  name="branch"
                  value={user.branch}
                  onChange={handaleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                >
                  <option value="">Select Branch</option>
                  <option value="Computer Science And Engineering">CSE</option>
                  <option value="Civil Engineering">CE</option>
                  <option value="Mechanical Engineering">ME</option>
                  <option value=" Electronics & Communication Engineering">
                    ECE
                  </option>
                  <option value="Automobile Engineering">AE</option>
                  <option value="Artificial Intelligence">AI</option>
                </select>
               </div>

              <div>

              <label
                    htmlFor="semester"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Student Semester
                  </label>
              <select
                  id="semester"
                  name="semester"
                  value={user.semester}
                  onChange={handaleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                >
                  <option value={null}>Select Semester</option>
                  <option value={1}>1st</option>
                  <option value={2}>2nd</option>
                  <option value={3}>3rd</option>
                  <option value={4}>4th</option>
                  <option value={5}>5th</option>
                  <option value={6}>6th</option>
                  <option value={7}>7th</option>
                  <option value={8}>8th</option>
                </select>
              </div>

                <div>
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900"
                    htmlFor="file_input"
                  >
                    Choose Student picture :
                  </label>
                  <input
                    className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-foreground file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    id="file_input"
                    name="image"
                    type="file"
                    onChange={handleImageChange}
                  />
                </div>
                <button
                  type="submit"
                  className=" text-white bg-slate-600 hover:bg-slate-800 text-center py-2 px-8 rounded-md w-full"
                >
                  Create User
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateUser;
