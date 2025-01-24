import { useState, useEffect } from "react";
import NavBar from "../components/navbar";
import SearchBar from "../components/searchbar";
import Loader from "../components/loader";
import Modal from "../components/modal";
import ShowUserDetail from "./showuserdetail";
import UpdateUser from "./updateuser";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const deleteUserInDb = async(user)=>{
  const response = await axios.delete(
    `http://localhost:3000/student/${user.id}`
  ); 
  return response.status;
}

const DashBoard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [viewUser, setViewUser] = useState({});
  const [changeState, setChangeState] = useState(false);
  const [modalView, setModalView] = useState("");

  const viewDetail = (user) => {
    setViewUser(user);
    setShowModal(true);
    setModalView("view");
  };

  const mutation = useMutation({
    mutationFn : deleteUserInDb,
    onSuccess :()=>{
      setChangeState(true);
      alert("User Deleted !!");
    },
    onError : ()=>{
      setChangeState(true);
      alert("Error : User Not Deleted !!");
    }
  })

  const deleteUser = async (user) => {
    if (window.confirm(`Are you sure you want to delete ${user.name}`)) {
         mutation.mutate(user);
         setChangeState(true);
    } else {
      alert("Ok : No Action Performed !!");
    }
  };

  const updateUser = (user) => {
    setShowModal(true);
    setModalView("update");
    setViewUser(user);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/student");
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        alert("Error fetching users");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [changeState]);

  return (
    <>
      <section className="bg-gray-200 flex-col gap-4">
        <div>
          <NavBar />
          <SearchBar
            users={users}
            setUsers={setUsers}
            setLoading={setLoading}
            setChangeState={setChangeState}
          />
          {showModal ? (
            <Modal showModal={showModal} setShowModal={setShowModal}>
              {modalView === "view" ? (
                <ShowUserDetail viewUser={viewUser} />
              ) : modalView === "update" ? (
                <UpdateUser
                  viewUser={viewUser}
                  setChangeState={setChangeState}
                  setShowModal={setShowModal}
                />
              ) : (
                ""
              )}
            </Modal>
          ) : (
            ""
          )}
        </div>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div>
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Student Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Semester
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Branch
                      </th>
                      <th scope="col" className="px-6 py-3">
                        View Details
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  {users && users.length > 0 ? (
                    users.map((item, index) => (
                      <tbody key={index}>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {item.name}
                          </th>
                          <td className="px-6 py-4">{item.semester}</td>
                          <td className="px-6 py-4">{item.branch}</td>
                          <td className="px-6 py-4">
                            <button
                              className="bg-slate-600 hover:bg-slate-800 text-center text-white px-2 py-1 rounded-md"
                              onClick={() => {
                                viewDetail(item);
                              }}
                            >
                              View
                            </button>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex gap-4">
                              <button
                                onClick={() => {
                                  deleteUser(item);
                                }}
                              >
                                <img
                                  src="/delete.png"
                                  className="w-6 h-6 hover:shadow-md"
                                  alt="delete_image"
                                />
                              </button>
                              <button onClick={() => updateUser(item)}>
                                <img
                                  src="/update.png"
                                  className="w-6 h-6 hover:shadow-md"
                                  alt="update_image"
                                />
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    ))
                  ) : (
                    <span className="px-6">No users found.</span>
                  )}
                </table>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default DashBoard;
