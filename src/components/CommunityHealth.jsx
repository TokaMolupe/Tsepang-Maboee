import { NavLink } from 'react-router-dom';
import { IoArrowBackSharp } from "react-icons/io5";

function CommunityHealth() {
    return (
        <div>
            <div>
                <NavLink to="/projects">
                    <IoArrowBackSharp className='text-4xl' />
                </NavLink>
                <h1 className='font-bold text-5xl text-center mt-5'>Community Health Advocacy – Lesotho Red Cross Society & Ministry of Health</h1>
            </div>
            <div>

                <h4 className='font-bold text-xl mt-20 text-center'>Role: Community Mobiliser & Advocate</h4>
                <h4 className='font-bold text-xl mt-10 text-center'>Project: Community Health and Immunization Roadshow (Quthing District)</h4>
                <p className='text-lg text-center mt-20'>
                    I participated in district-level community health roadshows aimed
                    at promoting immunization and essential health services.
                    Responsibilities included community engagement, health
                    information sharing, and supporting outreach activities. Through
                    this experience, I identified gaps in public awareness regarding
                    additional humanitarian services such as first aid training and
                    family tracing, contributing insights toward improved
                    communication strategies.
                </p>
            </div>
        </div>
    );
};

export default CommunityHealth;