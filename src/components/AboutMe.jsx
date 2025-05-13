import { IoCodeSlash } from 'react-icons/io5';

const AboutMe = () => {
    return (
        <div id='about' className="container mx-auto min-h-screen py-12 flex flex-col md:flex-row-reverse gap-6 px-8 justify-between md:px-[60px] lg:px[230px] items-center
        ">

            <div data-aos="fade-left" className='text-white space-y-3'>
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>About <span className='text-[#405AFF]'>Me</span></h2>
                <h5 className='flex items-center gap-2 text-2xl font-semibold'>Front End Web Developer <IoCodeSlash />
                </h5>
                <p className='max-w-2xl text-lg text-gray-300'>
                    <span className='text-xl text-[#a7b2fc] font-semibold'>Hi, I&apos;m Rahat!</span> I&apos;m a MERN Stack Developer who loves creating web applications that make a difference. Programming challenges me to think critically, and I&apos;m always excited to learn new technologies. <br />
                    Besides coding, I enjoy traveling to new places and diving into books. Traveling broadens my perspective, while reading helps me stay inspired and continuously grow.</p>
            </div>
            <div data-aos="fade-right">
                <img className=' w-full max-w-xs md:max-w-sm border-[#405AFF] border-4 rounded-lg px-4 pt-4' src='https://i.ibb.co.com/b5Fchs0Y/profile-2-Photoroom.webp' alt="" />

            </div>

        </div>
    );
};

export default AboutMe;