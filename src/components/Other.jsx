import { BiHomeHeart } from "react-icons/bi";
import { NavLink } from 'react-router-dom';

function Other() {
    return (
        <div>
            <div className="flex justify-center">
                <NavLink to="/">
                    <BiHomeHeart className="text-5xl" />
                </NavLink>
                <h1 className="font-bold text-center text-5xl mb-10 ml-10">Services / Awards / Skills</h1>
            </div>
            <div className="flex flex-wrap justify-center items-center cursor-default">
                <div className="p-2 shadow-md hover:shadow-lg shadow-black hover:shadow-black rounded-lg w-full md:w-1/4 h-[300px] md:h-[450px] mr-10 mb-10">
                    <h1 className="font-bold text-xl mt-3">Services offered</h1>
                    <ul>
                        <li className="text-center mb-3 mt-3">Facilitation & public speaking</li>
                        <li className="text-center mb-3">Youth workshops</li>
                        <li className="text-center mb-3">Community dialogues</li>
                        <li className="text-center mb-3">Campaign collaborations</li>
                        <li className="text-center mb-3">Content creation & brand partnerships</li>
                    </ul>
                </div>
                <div className="p-2 shadow-md hover:shadow-lg shadow-black hover:shadow-black rounded-lg w-full md:w-1/4 h-[300px] md:h-[450px] mr-10 mb-10">
                    <h1 className="font-bold text-xl mt-3">Technical skills</h1>
                    <ul>
                        <li className="text-center mb-3 mt-3">HIV & SRHR Advocacy</li>
                        <li className="text-center mb-3">Facilitation & Community Work</li>
                        <li className="text-center mb-3">Content Creation & Influencer Work</li>
                    </ul>
                    <button className="p-2 rounded-md bg-[#8b8178] text-white mt-5 hover:scale-110">
                        <NavLink to="/skills">
                            Read More
                        </NavLink>
                    </button>
                </div>
                <div className="p-2 shadow-md hover:shadow-lg shadow-black hover:shadow-black rounded-lg w-full md:w-1/4 h-[380px] md:h-[450px] mr-10 mb-10">
                    <h1 className="font-bold text-xl mt-3">Certificates and awards</h1>
                    <ul>
                        <li className="text-center mb-3 mt-3">Basotho Women Empowerment award</li>
                        <li className="text-center mb-3">Project Management (IAS)</li>
                        <li className="text-center mb-3">Principles of First AID (Disaster Ready))</li>
                        <li className="text-center mb-3">Certificate of Recognition by Touch Roots Africa</li>
                        <li className="text-center mb-3">Days for Girls International Ambassador of Women’s Health Course Certificate</li>
                        <li className="text-center">Trauma Sensitive by Train for Change</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default Other;