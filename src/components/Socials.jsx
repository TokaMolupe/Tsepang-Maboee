import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Socials() {
    return (
        <div className="flex mt-5">
            <ul className="flex gap-5">
                <li className="text-3xl hover:scale-110">
                    <a href="https://www.tiktok.com/@tsepang_maboee?lang=en-GB" target="_blank" rel="noopener noreferrer">
                        <FaTiktok className="text-4xl text-[#000000]" />
                    </a>
                </li>
                <li className="text-3xl hover:scale-110">
                    <a href="https://www.facebook.com/tsepang.maboee" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-4xl text-[#1877F2]" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Socials;