import { NavLink } from 'react-router-dom';
import { IoArrowBackSharp } from "react-icons/io5";

function YouthClub() {
    return (
        <div>
            <div>
                <NavLink to="/projects">
                    <IoArrowBackSharp className='text-4xl' />
                </NavLink>
                <h1 className='font-bold text-5xl text-center mt-5'>Youth Club HIV & Life Skills Programs – Berea District</h1>
            </div>
            <div>

                <h4 className='font-bold text-xl mt-20 text-center'>Role: Facilitator</h4>
                <h4 className='font-bold text-xl mt-10 text-center'>Target Group: Adolescents and Youth (16–22 years)</h4>
                <p className='text-lg text-center mt-20'>
                    I have facilitated HIV and life skills education sessions for youth
                    clubs from Makola and Letsatseng villages during residential
                    camp programs. The sessions focused on HIV transmission and
                    prevention, treatment adherence, living positively with HIV,
                    disclosure, and addressing stigma and misinformation. The
                    facilitation approach emphasized interaction, peer learning, and
                    open discussion, allowing young people to ask questions freely
                    and challenge harmful myths.
                </p>
            </div>
        </div>
    );
};

export default YouthClub;