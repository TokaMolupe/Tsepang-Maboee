import { BiHomeHeart } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

function Contact() {
    const navigate = useNavigate();

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const data = new FormData(form);

        fetch("https://formspree.io/f/xbdkopqq", {
            method: "POST",
            body: data,
            headers: {
                Accept: "application/json",
            },
        }).then((response) => {
            if (response.ok) {
                setSubmitted(true);
                form.reset();
            } else {
                alert("Something went wrong. Try again.");
            }
        });
    };

    useEffect(() => {
        if (submitted) {
            const timer = setTimeout(() => {
                navigate("/");
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [submitted, navigate]);

    if (submitted) {
        return <Loading />;
    }

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <div className="flex justify-center">
                    <NavLink
                        to="/"
                    >
                        <BiHomeHeart
                            className="text-5xl" />
                    </NavLink>
                    <h1 className="mb-10 text-5xl font-bold text-center ml-10">Contact</h1>
                </div>
                <input
                    className="inputForm mb-10 w-full px-2 rounded-lg p-2 bg-[#CAC3BA] border-none focus:outline-none"
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Name:"
                /><br />

                <input
                    className="inputForm mb-10 w-full px-2 rounded-lg p-2 bg-[#CAC3BA] border-none focus:outline-none"
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Email:"
                /><br />

                <select
                    className="optionForm mb-10 w-full px-2 rounded-lg p-2 bg-[#CAC3BA] border-none focus:outline-none"
                    name="section"
                    required
                >
                    <option
                        value=""
                        disabled selected className="text-black">-- Please choose an option --
                    </option>
                    <option
                        value="Collaboration"
                        className="text-gray-700">Collaboration
                    </option>
                    <option
                        value="Job Opportunity"
                        className="text-gray-700">Sponsorship
                    </option>
                    <option
                        value="Freelance Work"
                        className="text-gray-700">Job Opportunity
                    </option>
                    <option
                        value="Question"
                        className="text-gray-700">Ask a Question
                    </option>
                    <option
                        value="Feedback"
                        className="text-gray-700">Leave Feedback
                    </option>
                    <option
                        value="Networking"
                        className="text-gray-700">Networking
                    </option>
                    <option
                        value="Other"
                        className="text-gray-700">Other
                    </option>
                </select><br />

                <textarea
                    className="textarea mb-10 w-full px-2 rounded-lg p-10 border-none bg-[#CAC3BA] focus:outline-none"
                    id="message"
                    name="message"
                    required
                    placeholder="Message:"
                ></textarea><br />

                <button className="formBtn mb-10 p-4 bg-[#cac3ba] hover:bg-[#b4aa9d] rounded-lg w-full border-none">Send</button>
            </form>
        </div>
    );
};

export default Contact;