import { Outlet } from "react-router-dom";
import Footer from "../assets/Footer";

const MainLayout = () => {
    return (
        <div>
            <Outlet />
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default MainLayout;