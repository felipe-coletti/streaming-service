import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import ResetPassword from "../pages/ResetPassword";
import Serie from "../pages/Serie";
import Episode from "../pages/Episode";
import NotFound from "../pages/NotFound";
import Category from "../pages/Category";

const PagesRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/sign-up" element={<Signup/>}/>
                <Route path="/sign-in" element={<Signin/>}/>
                <Route path="/reset-password" element={<ResetPassword/>}/>
                <Route path="/categories/:id" element={<Category/>}/>
                <Route path="/series/:id" element={<Serie/>}/>
                <Route path="/series/:id/episode/:id" element={<Episode/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Router>
    )
}

export default PagesRoutes