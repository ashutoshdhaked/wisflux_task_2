// import Modal from "../components/modal";
import NavBar from "../components/navbar";
import SearchBar from "../components/searchbar";

const DashBoard = () => {
  return (
    <>
      <section className="bg-gray-200 flex-col gap-4">
        <div>
          <NavBar />
          <SearchBar />
        </div>
        <div>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Student Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Semester
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Branch
                  </th>
                  <th scope="col" class="px-6 py-3">
                    View Details
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Ajay Kumar Sharma
                  </th>
                  <td class="px-6 py-4">4th</td>
                  <td class="px-6 py-4">Computer Science and Engineering</td>
                  <td class="px-6 py-4">
                    <button>view</button>
                  </td>
                  <td class="px-6 py-4">
                    <button>update</button>
                    <button>delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashBoard;
