import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AuthProvider from "./hooks/AuthProvider";
import DashboardBody from "./pages/DashboardBody";
import PrivateRoute from "./hooks/PrivateRoute";
function App() {
  return (
    <div className="container-fluid">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<DashboardBody />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
