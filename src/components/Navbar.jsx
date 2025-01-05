import { FaDownload } from "react-icons/fa";
import logo from '../assets/logo1.png';
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {

    const navlist = <>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
    </>


    return (
        <div className="sticky top-0 z-50 bg-[#212643] w-full">
            <div className="navbar text-white container mx-auto px-4">
                <div className="navbar-start">
                    <img className="w-16" src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2 text-lg">
                        {navlist}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn bg-[#405AFF] text-white border-none hover:bg-[#405AFF] font-normal">
                        <a
                            target=""
                            download="resume.pdf"
                            href="https://docs.google.com/document/d/1VcMgyRsNVOv8mtfFs_2aLwh_Jhsf8OD8k_n5TU1NsAs/export?format=pdf"
                            className="flex gap-2 items-center"
                        >
                            Download Resume <FaDownload />
                        </a>
                    </button>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <IoMdMenu />
                            {/* https://docs.google.com/document/d/1VcMgyRsNVOv8mtfFs_2aLwh_Jhsf8OD8k_n5TU1NsAs/edit?usp=sharing */}

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