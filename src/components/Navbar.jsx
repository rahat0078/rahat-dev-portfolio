import { FaDownload } from "react-icons/fa";
import logo from '../assets/logo1.png';
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {

    const navlist = <>
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Services</a></li>
        <li><a>Skills</a></li>
        <li><a>Projects</a></li>
    </>


    return (
        <div className="sticky top-0 z-50 backdrop-blur-2xl w-full">
            <div className="navbar text-white container mx-auto p-4">
                <div className="navbar-start">
                    <img className="w-16" src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2 text-lg">
                        {navlist}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn bg-[#405AFF] text-white border-none hover:bg-[#405AFF] font-normal">Download Resume <FaDownload /></button>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <IoMdMenu />

                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content -ml-24 bg-slate-700 rounded-box z-[1] mt-3 w-36 p-2 shadow">
                            {navlist}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;