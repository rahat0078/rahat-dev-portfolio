import skillsBG from '../assets/skillsBG.jpg';
import react from '../assets/skills/react-js.png';
import css from '../assets/skills/css.png';
import express from '../assets/skills/express-js.png';
import html from '../assets/skills/html.png';
import javascript from '../assets/skills/javascript.png';
import mongodb from '../assets/skills/mongodb.png';
import nodejs from '../assets/skills/nodejs.png';
import tailwindcss from '../assets/skills/tailwindcss.png';
import firebase from '../assets/skills/firebase-2.png';
import jwt from '../assets/skills/jwt-token.png';
import { useState } from 'react';
import Education from './Education';

const Skills = () => {

    const [skills, setSkills] = useState(true)


    console.log(skills);





    return (
        <section className="bg-cover bg-center bg-no-repeat" style={{
            backgroundImage: `linear-gradient(rgba(33, 38, 67, 0.85), rgba(33, 38, 67, 0.85)), url(${skillsBG})`
        }}>
            <div className='container mx-auto section-gap'>
                <h2 className='text-center text-white pb-4 md:pb-6 title'> My Skills & Education</h2>

                <div role="tablist" className="tabs tabs-bordered w-48 mx-auto">
                    <a onClick={() => setSkills(true)} role="tab" className={`tab text-lg  ${skills ? "tab-active text-gray-100 " : "text-gray-500"}`}>Skills</a>
                    <a onClick={() => setSkills(false)} role="tab" className={`tab text-lg ${skills ? "text-gray-500" : "tab-active text-gray-100"}`}>Education</a>
                </div>


                {
                    skills ? <>
                        <div className='flex flex-wrap justify-center items-center pt-12 w-2/3 mx-auto gap-6'>
                            <div
                                data-aos="zoom-in"
                                data-aos-duration="3000"
                                className="rounded-xl w-24  flex flex-col py-2 items-center">
                                <img className='w-16' src={react} alt="" />
                                
                            </div>
                            <div
                                data-aos="zoom-out"
                                data-aos-duration="3000"
                                className="rounded-xl w-24  flex flex-col py-2 items-center">
                                <img className='w-16' src={css} alt="" />
                                
                            </div>
                            <div
                                data-aos="zoom-out"
                                data-aos-duration="3000"
                                className="rounded-xl w-24  flex flex-col py-2 items-center">
                                <img className='w-16' src={html} alt="" />
                                
                            </div>
                            <div
                                data-aos="zoom-in"
                                data-aos-duration="3000"
                                className="rounded-xl w-24  flex flex-col py-2 items-center">
                                <img className='w-16' src={tailwindcss} alt="" />
                                
                            </div>
                            <div
                                data-aos="zoom-in"
                                data-aos-duration="3000"
                                className="rounded-xl w-24  flex flex-col py-2 items-center">
                                <img className='w-16' src={firebase} alt="" />
                                
                            </div>



                        </div>
                        <div className='flex flex-wrap justify-center items-center pt-6 pb-12 w-2/3 mx-auto gap-6'>
                            <div
                                data-aos="zoom-in"
                                data-aos-duration="3000"
                                className="rounded-xl w-24  flex flex-col py-2 items-center">
                                <img className='w-16' src={javascript} alt="" />
                                
                            </div>
                            <div
                                data-aos="zoom-out"
                                data-aos-duration="3000"
                                className="rounded-xl w-24  flex flex-col py-2 items-center">
                                <img className='w-16' src={nodejs} alt="" />
                                
                            </div>
                            <div
                                data-aos="zoom-out"
                                data-aos-duration="3000"
                                className="rounded-xl w-24  flex flex-col py-2 items-center">
                                <img className='w-16' src={mongodb} alt="" />
                                
                            </div>

                            <div
                                data-aos="zoom-in"
                                data-aos-duration="3000"
                                className="rounded-xl w-24  flex flex-col py-2 items-center">
                                <img className='w-16' src={express} alt="" />
                                
                            </div>
                            <div
                                data-aos="zoom-in"
                                data-aos-duration="3000"
                                className="rounded-xl w-24  flex flex-col py-2 items-center">
                                <img className='w-16' src={jwt} alt="" />
                                
                            </div>
                        </div>
                    </>
                        : <Education/>
                }



            </div>
        </section>
    );
};

export default Skills;