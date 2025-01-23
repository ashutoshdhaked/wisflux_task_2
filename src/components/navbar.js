import { useNavigate } from "react-router-dom";
const NavBar = ()=>{
   const Navigate = useNavigate();
   const logout = ()=>{
      localStorage.clear();
      Navigate('/');
   }

   const userName =  localStorage.getItem('name');
    return(
        <>
         <div className="bg-slate-300 shadow-sm flex justify-around items-center h-12" >
            <div>
               <span className="text-2xl">Dashboard</span>
            </div>
              <div className="text-blue-900">
                <span>Welcome  &nbsp; <i>{userName}</i></span>
              </div> 
              <div>
                <button className="text-white bg-slate-600 hover:bg-slate-800 py-1 px-4 rounded-lg"
                 onClick={logout}
                >Logout</button>
              </div>
         </div>
        </>
    )
}
export default NavBar;