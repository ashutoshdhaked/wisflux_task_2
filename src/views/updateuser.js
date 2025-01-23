import { useState } from "react";

const UpdateUser = ({ viewUser , setChangeState , setShowModal }) => {
  const [loading, setLoading] = useState(false);
  const [image, setimage] = useState(null);
  const [updateUser, setUpdateUser] = useState({
    name: viewUser.name,
    email: viewUser.email,
    dob: viewUser.dob,
    branch: viewUser.branch,
    semester: viewUser.semester,
    image: viewUser.image,
  });

  const handaleChange = (e) => {
    const { name, value } = e.target;
    setUpdateUser((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setimage(selectedFile);
  };

  const submit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const data = new FormData();
    data.append("file", image);
    data.append("user", JSON.stringify(updateUser));
    try {
      const response = await fetch(
        `http://localhost:3000/student/${viewUser.id}`,
        {
          method: "PUT",
          body: data,
        }
      );
      const res = await response.json();
      if (res) {
        alert("user successfully Updated !!");
        setLoading(false);
        setChangeState(true);
        setShowModal(false);
      } else {
        alert("Error : User is not updated !!");
        setLoading(false);
        setChangeState(true);
        setShowModal(false);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <section>
        <div className="px-10 mb-10">
          <div className="flex justify-center items-center gap-6">
            <figure class="max-w-lg">
              <img
                class="h-auto max-w-full rounded-lg"
                src={viewUser.image}
                alt="image description"
              />
            </figure>
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
          </div>
          <div>
            <hr></hr>
            <div className="flex-col justify-around items-center">
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
                  value={updateUser.name}
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
                  value={updateUser.email}
                  onChange={handaleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
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
                value={updateUser.dob}
                onChange={handaleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div className="flex justify-between items-center gap-6">
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
                  value={updateUser.branch}
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
                  value={updateUser.semester}
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
            </div>
          </div>
          <button
            type="submit"
            className=" text-white bg-slate-600 hover:bg-slate-800 text-center py-2 px-8 rounded-md w-full mt-4"
            disabled={loading}
            onClick={submit}
          >
            {loading ? "Updating...." : "Update User"}
          </button>
        </div>
      </section>
    </>
  );
};

export default UpdateUser;
