import { Outlet } from "react-router-dom";
import Footer from "./HomeLayout/Footer";
import Navbar from "./HomeLayout/Navbar";

const MainLayout = () => {
    return ( 
        <div >
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;