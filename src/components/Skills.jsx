import skillsBG from '../assets/skillsBG.jpg';
import react from '../assets/skills/react-js.png';
import css from '../assets/skills/css.png';
import express from '../assets/skills/express-js.png';
import html from '../assets/skills/html.png';
import javascript from '../assets/skills/javascript.png';
import mongodb from '../assets/skills/mongodb.png';
import nodejs from '../assets/skills/nodejs.png';
import tailwindcss from '../assets/skills/tailwindcss.png';

const Skills = () => {
    return (
        <div className="bg-cover bg-center bg-no-repeat" style={{
            backgroundImage: `linear-gradient(rgba(33, 38, 67, 0.85), rgba(33, 38, 67, 0.85)), url(${skillsBG})`
        }}>
            <div className='container mx-auto md:py-16'>
                <h2 className='text-center text-white py-6 text-2xl md:text-4xl lg:text-5xl font-bold'> My Skills</h2>
                <div className='flex flex-wrap justify-center items-center pt-12 w-2/3 mx-auto gap-6'>
                    <div
                        data-aos="zoom-in"
                        data-aos-duration="3000"
                        className="rounded-xl w-24  flex flex-col py-2 items-center">
                        <img className='w-16' src={react} alt="" />
                        <progress className="progress progress-primary bg-gray-400 w-20" value="75" max="100"></progress>
                    </div>
                    <div
                        data-aos="zoom-out"
                        data-aos-duration="3000"
                        className="rounded-xl w-24  flex flex-col py-2 items-center">
                         <img className='w-16' src={css} alt="" />
                         <progress className="progress progress-primary bg-gray-400 w-20" value="85" max="100"></progress>
                    </div>
                    <div
                        data-aos="zoom-out"
                        data-aos-duration="3000"
                        className="rounded-xl w-24  flex flex-col py-2 items-center">
                         <img className='w-16' src={html} alt="" />
                         <progress className="progress progress-primary bg-gray-400 w-20" value="90" max="100"></progress>
                    </div>
                    <div
                        data-aos="zoom-in"
                        data-aos-duration="3000"
                        className="rounded-xl w-24  flex flex-col py-2 items-center">
                        <img className='w-16' src={tailwindcss} alt="" />
                        <progress className="progress progress-primary bg-gray-400 w-20" value="92" max="100"></progress>
                    </div>



                </div>
                <div className='flex flex-wrap justify-center items-center pt-6 pb-12 w-2/3 mx-auto gap-6'>
                    <div
                        data-aos="zoom-in"
                        data-aos-duration="3000"
                        className="rounded-xl w-24  flex flex-col py-2 items-center">
                        <img className='w-16' src={javascript} alt="" />
                        <progress className="progress progress-primary bg-gray-400 w-20" value="70" max="100"></progress>
                    </div>
                    <div
                        data-aos="zoom-out"
                        data-aos-duration="3000"
                        className="rounded-xl w-24  flex flex-col py-2 items-center">
                         <img className='w-16' src={nodejs} alt="" />
                         <progress className="progress progress-primary bg-gray-400 w-20" value="65" max="100"></progress>
                    </div>
                    <div
                        data-aos="zoom-out"
                        data-aos-duration="3000"
                        className="rounded-xl w-24  flex flex-col py-2 items-center">
                         <img className='w-16' src={mongodb} alt="" />
                         <progress className="progress progress-primary bg-gray-400 w-20" value="75" max="100"></progress>
                    </div>

                    <div
                        data-aos="zoom-in"
                        data-aos-duration="3000"
                        className="rounded-xl w-24  flex flex-col py-2 items-center">
                        <img className='w-16' src={express} alt="" />
                        <progress className="progress progress-primary bg-gray-400 w-20" value="60" max="100"></progress>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;