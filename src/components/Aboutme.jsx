import { BiHomeHeart } from "react-icons/bi";
import { Link } from 'react-router-dom';

function AboutMe() {
    return (
        <div>
            <div className="flex justify-center">
                <Link to="/">
                    <BiHomeHeart className="text-5xl" />
                </Link>
                <h1 className="font-bold text-center text-5xl ml-10">About Me</h1>
            </div>
            <div className="text-lg text-start">
                <p className="mb-10 mt-20 sm:text-center">
                    I am a passionate HIV activist, community facilitator, and youth advocate with
                    hands-on experience in HIV & SRHR education, life-skills facilitation, and
                    community engagement. Drawing from lived experience, I use storytelling both
                    offline and online to break stigma, challenge misinformation, and create safe,
                    relatable spaces for learning and dialogue - particularly for young people
                    engaging through digital platforms and social media.

                </p>
                <p className="mb-10">
                    Working alongside NGOs, schools, youth clubs, and community structures, I
                    have facilitated interactive sessions on HIV prevention and treatment, STIs,
                    healthy relationships, communication, disclosure, and resilience, while also
                    translating these topics into accessible, shareable social media content. My
                    approach emphasizes youth-friendly messaging that encourages participation,
                    critical thinking, and real-life application, using digital storytelling to move
                    beyond fear-based narratives toward empowerment.
                </p>
                <p>
                    Beyond facilitation, I am a content creator and influencer who actively leverages
                    social media platforms to amplify health messaging, promote social awareness,
                    and spark conversations at scale. I collaborate with brands and institutions in
                    meaningful, values-aligned ways to create engaging digital content that
                    educates, resonates, and drives positive social impact.
                </p>
            </div>
        </div>
    );
};

export default AboutMe;