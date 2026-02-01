import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import { AuroraText } from "./AuroraText";
import 'devextreme/dist/css/dx.light.css';
import GalleryWidget from '../components/GalleryWidget';

function Main() {
    return (
        <div>
            <Navbar />

            <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center items-center gap-8 md:gap-20 lg:gap-[300px] p-4">

                <div className="flex flex-col items-center sm:items-center md:items-center text-center sm:text-center md:text-left lg:text-left">
                    <h1 className="font-bold text-3xl text-center sm:text-4xl md:text-5xl lg:text-[60px] mb-4 sm:mb-6 md:mb-8 lg:mb-10">
                        <AuroraText
                            speed={2.0}
                            colors={["#FFD7BE", "#FFC5C5", "#A52A2A", "#FFD39B", "#B76E79", "#F5F5DC", "#FFC67D", "#C4A484", "#F2C3A9", "#F2D2BD"]}
                        >
                            Ts’epang Maboee
                        </AuroraText>
                    </h1>

                    <p className="mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-sm text-center sm:text-base md:text-lg lg:text-lg">
                        HIV Activist | Community Facilitator | Youth Advocate | Content Creator
                    </p>

                    <h1 className="italic text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-xs sm:text-sm md:text-base lg:text-base">
                        “Turning lived experience into impact, education, and change.”
                    </h1>

                    <button className="bg-[#8b8178] text-white py-3 px-4 sm:py-4 sm:px-6 w-40 sm:w-48 md:w-52 lg:w-56 rounded-md hover:scale-105 hover:ease-in transition">
                        <NavLink to="/contacts">
                            Contact Me
                        </NavLink>
                    </button>
                </div>

                <div className="mt-6 sm:mt-8 md:mt-0 w-full md:w-auto lg:w-auto">
                    <GalleryWidget />
                </div>
            </div>
        </div>
    );
}

export default Main;
