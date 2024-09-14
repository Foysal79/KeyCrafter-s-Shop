import Footer from "./Footer";
import Navbar from "./Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <h1 className="h-screen bg-[#e5e5e5]" >This is a Main layout pages</h1>
            <Footer />
        </div>
    );
};

export default MainLayout;