import { NavLink } from 'react-router-dom';
import { IoArrowBackSharp } from "react-icons/io5";

function DrugService() {
    return (
        <div>
            <div>
                <NavLink to="/projects">
                    <IoArrowBackSharp className='text-4xl' />
                </NavLink>
                <h1 className='font-bold text-5xl text-center mt-5'>National Drug Service Organization (NDSO)</h1>
            </div>
            <div>

                <h4 className='font-bold text-xl mt-20 text-center'>Role: Influencer & Health Advocate</h4>
                <p className='text-lg text-center mt-20'>
                    I partnered with the National Drug Service
                    Organization to support awareness around access
                    to medication and public health systems. Using
                    social media platforms, I communicated healthrelated information in a relatable and youthfriendly manner while maintaining authenticity and
                    public trust.
                </p>
            </div>
        </div>
    );
};

export default DrugService;