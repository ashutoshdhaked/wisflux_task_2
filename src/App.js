 import SignIn from "./views/signin";
 import Register from "./views/register";
 import {Routes,Route} from 'react-router-dom';
import DashBoard from "./views/dashboard";
function App() {
  return (
    <div>
      <Routes>
       <Route path="/signin" element={<SignIn/>}></Route>
       <Route path="/register" element={<Register/>}></Route>
       <Route path="/dashboard" element={<DashBoard/>}></Route>
      </Routes>  
    </div>
  );
}

export default App;
