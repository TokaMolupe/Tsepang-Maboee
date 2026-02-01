import { NavLink } from 'react-router-dom';
import { IoArrowBackSharp } from "react-icons/io5";

function TouchRootsAfrica() {
    return (
        <div>
            <div>
                <NavLink to="/projects">
                    <IoArrowBackSharp className='text-4xl' />
                </NavLink>
                <h1 className='font-bold text-5xl text-center mt-5'>Touch Roots Africa</h1>
            </div>
            <div>

                <h4 className='font-bold text-xl mt-20 text-center'>Role: Programs Officer (Progressed from Community Facilitator & Community Coordinator)</h4>
                <h4 className='font-bold text-xl mt-10 text-center'>Focus Areas: HIV, SRHR, Life Skills Based Education (LBSE), Youth Empowerment</h4>
                <p className='text-lg text-center mt-20'>
                    I currently serves as a Programs Officer at Touch Roots Africa, where we support the
                    planning, coordination, and implementation of HIV and SRHR programs targeting
                    adolescents and young people in both community and school-based settings.
                    I facilitate youth-friendly sessions on HIV prevention, treatment literacy, STI education,
                    stigma reduction, disclosure, and psychosocial resilience. We provide supervision and
                    support to community facilitators, including scheduling activities, coordinating program
                    delivery, and ensuring smooth implementation at community centers. A key component of
                    this work involves strengthening linkages between schools and nearby health facilities to
                    improve access to youth-friendly health services.
                </p>
            </div>
        </div>
    );
};

export default TouchRootsAfrica;