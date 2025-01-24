import { useState } from "react";
import Modal from "./modal";
import CreateUser from "../views/createuser";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchUsers = async (key, text) => {
  const response = await axios.get(`http://localhost:3000/student/filter/${key}/${text}`);
  return response.data;
};

const SearchBar = ({users,setUsers , setLoading,setChangeState}) => {

  const [search, setSearch] = useState({
    key: "name",
    text: "",
  });
 const [showModal , setShowModal] = useState(false); 

  const handaleChange = (e) => {
    const { name, value } = e.target;
    setSearch((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const {isError, refetch } = useQuery({
    queryKey: ["searchUsers", search.key, search.text],
    queryFn: () => fetchUsers(search.key, search.text),
    enabled: false,
  });
  
  const searchUser = async (e) => {
    setLoading(true);
    e.preventDefault();
    const result = await refetch();
    if (isError) {
      setUsers(users); 
      setLoading(false);
    } else {
      setUsers(result.data);
      setLoading(false); 
    }
  };

  return (
    <>
      <section className="bg-white shadow-lg py-4 flex justify-center items-center">
        <div className="w-1/3 mx-4">
          <button
          className="text-white bg-slate-700 hover:bg-slate-800 px-4 py-2 rounded-md"
          onClick={()=>{setShowModal(true)}}
            >
            Add Student
          </button>
           <Modal showModal={showModal} setShowModal={setShowModal}>
            <CreateUser setShowModal={setShowModal} setChangeState={setChangeState}/>
           </Modal>
        </div>

        <form className="max-w-lg mx-auto w-2/3" onSubmit={searchUser}>
          <div className="flex">
            <select
              id="filter"
              name="key"
              value={search.key}
              onChange={handaleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg block w-28 p-2.5"
            >
              <option value=" ">Filter By</option>
              <option value="name">Name</option>
              <option value="semester">Semester</option>
              <option value="branch">Branch</option>
            </select>
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                name="text"
                value={search.text}
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-slate-500 focus:border-slate-500"
                placeholder="name,branch,semester.."
                onChange={handaleChange}
                required
              />
              <button
                type="submit"
                className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-slate-700 rounded-e-lg border border-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default SearchBar;








// const [search, setSearch] = useState({
//   key: "name",
//   text: "",
// });

// const [showModal, setShowModal] = useState(false);



// const handleChange = (e) => {
//   const { name, value } = e.target;
//   setSearch((prevState) => ({
//     ...prevState,
//     [name]: value,
//   }));
// };

// const searchUser = (e) => {
//   e.preventDefault();
//   refetch(); 
// };