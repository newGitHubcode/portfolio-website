import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="bg-gray-900 text-gray-400 body-font">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, My name is Fadil
                        <br className="hidden lg:inline-block"/> I'm a Developer & I make websites
                    </h1>

                    <p className="mb-8 leading-relaxed">
                        I'm a full-stack Developer, I specialize in building and making websites.
                        Some of my skills include: NextJs, React, Node, Express, MongoDB.
                    </p>

                    <div className="flex justify-center">
                        <a href="#contact" className="inline-flex tex-white bg-blue-500 border-0 p-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg" >
                            Contact me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
                        >
                            See My Projects
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Image
                        className="object-cover object-center rounded-full"
                        alt="hero"
                        src="https://dummyimage.com/300x300"
                    />
                </div>
            </div>
        </section>
    );
}