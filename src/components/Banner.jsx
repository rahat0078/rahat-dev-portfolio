import { Typewriter } from "react-simple-typewriter";
import { FaDownload, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Banner = () => {
    return (
        <div id="home" className="section-gap container mx-auto text-white flex flex-col sm:flex-row gap-4 justify-between items-center px-6 lg:px-4">
            <div className="space-y-2 md:space-y-3 lg:space-y-4 flex-1">
                <span className="text-xl md:text-2xl">Hello, I&apos;m</span>
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold"> Ruhul Amin Rahat</h1>
                <h3 className="title font-normal">
                    A Passionate{' '}
                    <span className="font-semibold text-[#555bff]">
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
                        <a target="_blank" href="https://www.linkedin.com/in/ruhul-amin-rahat17/"><FaLinkedin /></a>
                    </button>
                </div>
                <a
                    href="https://drive.google.com/file/d/1gRtGk9Wrsm-jR4-PYz3EruEbQ2iRX79x/view?usp=sharing"
                    target="_blank"
                    className="btn btn-outline px-4 py-2 rounded-md text-white border-[#405AFF] hover:bg-[#405AFF] font-normal"
                >
                     Resume <FaDownload />
                </a>
            </div>
            <div className="md:max-w-lg max-w-sm flex-1">
                <img className="border-4 border-[#555bff] rounded-full w-full" src="https://i.ibb.co.com/Y4z9dDbj/profile.webp" alt="" />
            </div>

        </div>
    );
};

export default Banner;