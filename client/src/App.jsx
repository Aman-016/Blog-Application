import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import SingIn from "./pages/SingIn";
import SignUp from "./pages/SignUp";
import Projects from "./pages/Projects";    
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from './components/PrivateRoute';


export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SingIn />} />
        <Route path="/signup" element={<SignUp />} />
         <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route path="/projects" element={<Projects />} />
      </Routes>
          <Footer />
    </BrowserRouter>
  );
}
