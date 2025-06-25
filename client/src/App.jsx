import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Menubar from "./components/Menubar/Menubar";

import ManageCategory from "./pages/ManageCategory/ManageCategory";
import DashBoard from "./pages/DashBoard/DashBoard";
import Explore from "./pages/Explore/Explore";
import Users from "./pages/ManageUsers/ManageUsers";
import Items from "./pages/ManageItems/ManageItems";
import { Toaster } from "react-hot-toast";
import Login from "./pages/login/Login";
import OrderHistory from "./pages/OrderHistory/OrderHistory";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  const location = useLocation();

  const { auth } = useContext(AppContext);

  const LoginRoute = ({ element }) => {
    if (auth.token) {
      return <Navigate to="/dashboard" replace></Navigate>;
    }
    return element;
  };

  const ProtectedRoute = ({ element, allowedRoles }) => {
    if (!auth.token) {
      return <Navigate to="/login" replace></Navigate>;
    }

    if (allowedRoles && !allowedRoles.includes(auth.role)) {
      return <Navigate to="/dashboard" replace></Navigate>;
    }

    return element;
  };

  return (
    <div>
      {location.pathname !== "/login" && <Menubar />}
      <Toaster />

      <Routes>
        <Route
          path="/dashboard"
          element={<ProtectedRoute element={<DashBoard />} />}
        />
        <Route path="/" element={<ProtectedRoute element={<DashBoard />} />} />
        <Route
          path="/explore"
          element={<ProtectedRoute element={<Explore />} />}
        />

        {/* Admin Only Routes */}
        <Route
          path="/category"
          element={
            <ProtectedRoute
              element={<ManageCategory />}
              allowedRoles={["ROLE_ADMIN"]}
            />
          }
        />
        <Route
          path="/users"
          element={
            <ProtectedRoute element={<Users />} allowedRoles={["ROLE_ADMIN"]} />
          }
        />
        <Route
          path="/items"
          element={
            <ProtectedRoute element={<Items />} allowedRoles={["ROLE_ADMIN"]} />
          }
        />

        <Route path="/login" element={<LoginRoute element={<Login />} />} />
        <Route
          path="/orders"
          element={<ProtectedRoute element={<OrderHistory />} />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
