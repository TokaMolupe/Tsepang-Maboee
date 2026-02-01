import { NavLink } from 'react-router-dom';
import { IoArrowBackSharp } from "react-icons/io5";

function Jhpiego() {
    return (
        <div>
            <div>
                <NavLink to="/projects">
                    <IoArrowBackSharp className='text-4xl' />
                </NavLink>
                <h1 className='font-bold text-5xl text-center mt-5'>Jhpiego</h1>
            </div>
            <div>

                <h4 className='font-bold text-xl mt-20 text-center'>Role: Community Health Advocate – PrEP Awareness & Uptake</h4>
                <p className='text-lg text-center mt-20'>
                    I worked with Jhpiego Lesotho to support community-level awareness and
                    promotion of Pre-Exposure Prophylaxis (PrEP) as part of HIV prevention
                    efforts. The role focused on increasing understanding of PrEP among
                    adolescents and young people, addressing misconceptions, and encouraging
                    informed uptake as a prevention option. I provided general education on what
                    PrEP is, who it is for, how it works, and the importance of adherence for
                    effectiveness. Through community engagement and interactive discussions, I
                    helped normalize conversations around PrEP, reduce stigma associated with
                    its use, and support individuals in making informed decisions about their
                    sexual health. This work contributed to improved community knowledge on
                    HIV prevention options and strengthened demand creation for PrEP services.
                </p>
            </div>
        </div>
    );
};

export default Jhpiego;