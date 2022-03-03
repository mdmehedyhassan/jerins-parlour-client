import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Login from './Pages/Login/Login/Login';
import Registered from './Pages/Login/Registered/Registered';
import Profile from './Pages/Profile/Profile';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Orders from './Pages/Orders/Orders/Orders';
import Services from './Pages/Services/Services/Services';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<Orders />} />
          <Route path="services" element={<Services />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="registered" element={<Registered />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
