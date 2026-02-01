import { BiHomeHeart } from "react-icons/bi";
import { NavLink } from 'react-router-dom';

function Project() {
    return (
        <div>
            <div className="flex justify-center">
                <NavLink to="/">
                    <BiHomeHeart className="text-5xl" />
                </NavLink>
                <h1 className="font-bold text-center text-4xl mb-10 ml-10">Employement & Projects</h1>
            </div>
            <div className="flex flex-wrap justify-center items-center cursor-default">
                <div className="p-2 shadow-md hover:shadow-lg shadow-black hover:shadow-black rounded-lg w-full md:w-1/4 h-[270px] md:h-[270px] mr-10 mb-10">
                    <h1 className="font-bold text-xl mt-3">Touch Roots Africa</h1>
                    <h4 className="text-center mb-3 mt-3">Role: Programs Officer (Progressed from Community Facilitator & Community Coordinator)</h4>
                    <h4 className="text-center">Focus Areas: HIV, SRHR, Life Skills Based Education (LBSE), Youth Empowerment</h4>
                    <button className="p-2 rounded-md bg-[#8b8178] text-white mt-5 hover:scale-110">
                        <NavLink to="/touchrootsafrica">
                            Read More
                        </NavLink>
                    </button>
                </div>
                <div className="p-2 shadow-md hover:shadow-lg shadow-black hover:shadow-black rounded-lg w-full md:w-1/4 h-[270px] md:h-[270px] mr-10 mb-10">
                    <h1 className="font-bold text-xl mt-3">Youth Club HIV & Life Skills Programs – Berea District</h1>
                    <h4 className="text-center mb-3 mt-3">Role: Facilitator</h4>
                    <h4 className="text-center">Target Group: Adolescents and Youth (16–22 years)</h4>
                    <button className="p-2 rounded-md bg-[#8b8178] text-white mt-5 hover:scale-110">
                        <NavLink to="/youthclub">
                            Read More
                        </NavLink>
                    </button>
                </div>
                <div className="p-2 shadow-md hover:shadow-lg shadow-black hover:shadow-black rounded-lg w-full md:w-1/4 h-[270px] md:h-[270px] mr-10 mb-10">
                    <h1 className="font-bold text-xl mt-3">Community Health Advocacy – Lesotho Red Cross Society & Ministry of Health</h1>
                    <h4 className="text-center mb-3 mt-3">Role: Community Mobiliser & Advocate</h4>
                    <h4 className="text-center">Project: Community Health and Immunization Roadshow (Quthing District)</h4>
                    <button className="p-2 rounded-md bg-[#8b8178] text-white mt-5 hover:scale-110">
                        <NavLink to="/communityhealth">
                            Read More
                        </NavLink>
                    </button>
                </div>
                <div className="p-2 shadow-md hover:shadow-lg shadow-black hover:shadow-black rounded-lg w-full md:w-1/4 h-[270px] md:h-[270px] mr-10 mb-10">
                    <h1 className="font-bold text-xl mt-3">Jhpiego Lesotho</h1>
                    <h4 className="text-center mb-3 mt-3">Role: Community Health Advocate – PrEP Awareness & Uptake</h4>
                    <button className="p-2 rounded-md bg-[#8b8178] text-white mt-5 hover:scale-110">
                        <NavLink to="/jhpiego">
                            Read More
                        </NavLink>
                    </button>
                </div>
                <div className="p-2 shadow-md hover:shadow-lg shadow-black hover:shadow-black rounded-lg w-full md:w-1/4 h-[270px] md:h-[270px] mr-10 mb-10">
                    <h1 className="font-bold text-xl mt-3">National Drug Service Organization (NDSO)</h1>
                    <h4 className="text-center mb-3 mt-3">Role: Influencer & Health Advocate</h4>
                    <button className="p-2 rounded-md bg-[#8b8178] text-white mt-5 hover:scale-110">
                        <NavLink to="/drugservice">
                            Read More
                        </NavLink>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Project;