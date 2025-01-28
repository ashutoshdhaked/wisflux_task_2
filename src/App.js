import SignIn from "./views/signin";
import Register from "./views/register";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./views/dashboard";
import ProtectedRoute from "./protectedroute";
import PublicRoute from "./publicroute";
import axios from 'axios';

axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashBoard />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
