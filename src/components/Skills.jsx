import { NavLink } from 'react-router-dom';
import { IoArrowBackSharp } from "react-icons/io5";

function Skills() {
    return (
        <div>
            <div className='mb-10'>
                <NavLink to="/others">
                    <IoArrowBackSharp className='text-4xl' />
                </NavLink>
                <h1 className='font-bold text-5xl text-center mt-5'>Technical Skills</h1>
            </div>
            <div className="flex flex-wrap justify-center items-center cursor-default">
                <div className="p-2 shadow-md hover:shadow-lg shadow-black hover:shadow-black rounded-lg w-full md:w-1/4 h-[270px] md:h-[270px] mr-10 mb-10">
                    <h1 className="font-bold text-xl mt-3">HIV & SRHR Advocacy</h1>
                    <ul>
                        <li className="text-center mb-3 mt-3">School-based sessions</li>
                        <li className="text-center mb-3">Youth clubs & camps</li>
                        <li className="text-center mb-3">Community dialogues</li>
                        <li className="text-center mb-3">Life Skills Based Education (LBSE)</li>
                    </ul>
                </div>
                <div className="p-2 shadow-md hover:shadow-lg shadow-black hover:shadow-black rounded-lg w-full md:w-1/4 h-[270px] md:h-[270px] mr-10 mb-10">
                    <h1 className="font-bold text-xl mt-3">Facilitation & Community Work</h1>
                    <ul>
                        <li className="text-center mb-3 mt-3">School-based sessions</li>
                        <li className="text-center mb-3">Youth clubs & camps</li>
                        <li className="text-center mb-3">Community dialogues</li>
                        <li className="text-center mb-3">Life Skills Based Education (LBSE)</li>
                    </ul>
                </div>
                <div className="p-2 shadow-md hover:shadow-lg shadow-black hover:shadow-black rounded-lg w-full md:w-1/4 h-[270px] md:h-[270px] mr-10 mb-10">
                    <h1 className="font-bold text-xl mt-3">Content Creation & Influencer Work</h1>
                    <ul>
                        <li className="text-center mb-3 mt-3">HIV education & awareness</li>
                        <li className="text-center mb-3">STI education</li>
                        <li className="text-center mb-3">Youth-friendly sexual health sessions</li>
                        <li className="text-center mb-3">Disclosure, stigma, and adherence talks</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skills;