import { Typewriter } from "react-simple-typewriter";
import profile from '../assets/profile.png'
import { FaDownload, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Banner = () => {
    return (
        <div id="home" className="container mx-auto py-16 text-white flex flex-col sm:flex-row gap-4 justify-between items-center px-6 lg:px-4">
            <div className="space-y-2 md:space-y-3 lg:space-y-4 flex-1">
                <span className="text-xl md:text-2xl">Hello, I&apos;m</span>
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold"> Ruhul Amin Rahat</h1>
                <h3 className="text-xl md:text-2xl lg:text-4xl">
                    A Passionate{' '}
                    <span className="font-bold text-[#555bff]">
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={['FrontEnd Web Developer', 'Web Designer', 'MERN Stack Developer',]}
                            loop={5}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={800}
                        />
                    </span>
                </h3>
                <p className="w-full md:w-3/4 text-start text-gray-300">I&apos;m Rahat, a Frontend-Focused MERN Stack Developer passionate about creating user-centric web applications and always curious to explore new technologies. Let’s build something amazing together!</p>

                <div className="flex gap-4">
                    <button className="text-4xl border-none text-[#0963F6]">
                        <a target="_blank" href="https://www.facebook.com/profile.php?id=100028041721537"><FaFacebook /></a>
                    </button>
                    <button className="text-4xl border-none text-white">
                        <a target="_blank" href="https://github.com/rahat0078"><FaGithub /></a>
                    </button>
                    <button className="text-4xl border-none text-[#0963F6]">
                        <a target="_blank" href="https://www.linkedin.com/"><FaLinkedin /></a>
                    </button>
                    <button className="text-4xl border-none text-[#E01EDB] ">
                        <FaInstagram />
                    </button>
                </div>
                <a
                    download="resume.pdf"
                    href="https://docs.google.com/document/d/1VcMgyRsNVOv8mtfFs_2aLwh_Jhsf8OD8k_n5TU1NsAs/export?format=pdf"
                    className="btn btn-outline text-white border-[#405AFF] hover:bg-[#405AFF] font-normal"
                >
                    Download Resume <FaDownload />
                </a>
            </div>
            <div className="lg:max-w-xl sm:max-w-lg max-w-sm flex-1">
                <img className="border-4 border-[#555bff] rounded-full w-full" src={profile} alt="" />
            </div>

        </div>
    );
};

export default Banner;