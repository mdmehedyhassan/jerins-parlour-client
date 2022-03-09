import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Login from './Pages/Login/Login/Login';
import Registered from './Pages/Login/Registered/Registered';
import Profile from './Pages/Profile/Profile';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Orders from './Pages/Orders/Orders/Orders';
import ServicesDetails from './Pages/ServicesDetails/ServicesDetails';
import ContactUs from './Pages/ContactUs/ContactUs';
import AdminPrivateRoute from './Pages/PrivateRoute/AdminPrivateRoute';
import Admin from './Pages/Admin/Admin/Admin';
import LoginPrivateRoute from './Pages/PrivateRoute/LoginPrivateRoute';
import AOS from 'aos';

AOS.init();

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="profile" element={<Profile />} />
          <Route path="orders/*" element={<Orders />} />
          <Route path="services" element={<ServicesDetails />} />
        </Route>
        <Route element={<AdminPrivateRoute />}>
          <Route path="admin/*" element={<Admin />} />
        </Route>
        <Route element={<LoginPrivateRoute />}>
          <Route path="login" element={<Login />} />
          <Route path="registered" element={<Registered />} />
        </Route>
        <Route path="contact" element={<ContactUs />} />
        {/* <Route path="login" element={<Login />} />
        <Route path="registered" element={<Registered />} /> */}
      </Routes>
    </AuthProvider>
  );
}

export default App;
