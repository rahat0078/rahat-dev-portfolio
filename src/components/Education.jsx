import { FaCode } from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { LuSchool } from "react-icons/lu";

const Education = () => {
    return (
        <div className="flex gap-4 flex-col px-4 lg:flex-row items-center lg:items-start justify-center mt-12">
            <div className="lg:border-r-2 lg:pr-4">
                <h6 className="text-white text-xl pb-8">Education</h6>
                <div data-aos="fade-right" data-aos-duration="500" className="card rounded-lg text-white w-full max-w-xl bg-[#489992] shadow-xl">
                    <div className="card-body">
                        <div className="flex justify-between items-center">
                        <h2 className="text-lg">Diploma in Engineering (2022-present)</h2>
                        <HiOutlineAcademicCap className="text-2xl ml-4" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-semibold">Kurigram Polytechnic Institute, Kurigram</h2>
                        <p className="text-lg">Computer Science & Technology (CST)</p>
                        <p className="text-gray-200">I am studying Computer Science & Technology at Kurigram Polytechnic Institute. I am now in my 5th semester, learning computer science and programming.</p>
                    </div>
                </div>

                <div data-aos="fade-right" data-aos-duration="1500" className="card mt-6 rounded-lg text-white w-full max-w-xl bg-[#5394c3] shadow-xl mb-12">
                    <div className="card-body">
                        <div className="flex justify-between items-center">
                        <h2 className="text-lg">Secondary School Certificate- SSC(2020-2022)</h2>
                        <LuSchool className="text-2xl ml-4" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-semibold">Rowmari CG Zaman Govt. High School , Rowmari, Kurigram</h2>
                        <p className="text-lg">Group: Science</p>
                        <p className="text-lg">Result: GPA 4.94 out of 5.00</p>
                        <p className="text-gray-200"> </p>
                    </div>
                </div>
            </div>

            <div>
                <h6 className="text-white text-xl pb-8 text-end">Courses</h6>
                <div data-aos="fade-left" data-aos-duration="500" className="card rounded-lg text-white w-full max-w-xl bg-[#9226E7] shadow-xl">
                    <div className="card-body">
                        <div className="flex justify-between items-center">
                        <h2 className="text-lg">Complete Web Development Course With Jhankar Mahbub</h2>
                        <FaCode className="text-2xl ml-4" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-semibold">Programming Hero</h2>
                        <p className="text-lg">Duration: 6 months (July 2024 - January 2025) </p>
                        <p className="text-gray-200">Enrolled in the Complete Web Development Course With Programming Hero. Learned MERN stack technology while developing a habit of exploring new technologies and improving time management skills.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;