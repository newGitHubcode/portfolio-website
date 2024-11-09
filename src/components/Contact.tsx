import { FaGithub, FaDiscord, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
    return (
        <section id="contact" className="bg-black text-gray-400 body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
                        Contact Me
                    </h1>

                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Feel free to reach out with me through these platforms. I might be Online
                    </p>
                </div>

                <div className="flex justify-center space-x-8">
                    <Link 
                        href={"https://github.com/newgithubcode"}
                        className="text-gray-400 hover:text-white text-4xl"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        
                        <FaGithub />
                    </Link>

                    <Link 
                        href={"https://discord.com"}
                        className="text-gray-400 hover:text-white text-4xl"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        
                        <FaDiscord />
                    </Link>

                    <Link 
                        href={"mailto:qdasdsadsada@gmail.com"}
                        className="text-gray-400 hover:text-white text-4xl"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        
                        <FaEnvelope />
                    </Link>
                </div>
            </div>
        </section>
    );
}
