import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Blogs from './pages/Blogs'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './pages/Navbar'
import ForgotPassword from './pages/ForgotPassword'
import { AuthProvider } from "./providers/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="login" element={<Login />}/>
        <Route path="signup" element={<Signup />}/>
        <Route path="blogs" element={<Blogs />} />
        <Route path="forgot" element={<ForgotPassword />} />
        {/* <Route path="contact" element={<Contact />} /> */}
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
