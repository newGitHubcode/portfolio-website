import Image from "next/image";

export default function Skills() {
    return (
        <section id="skills" className="bg-gray-900 text-gray-400 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-12">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        My Skills
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Here are some of the technologies I regularly work with.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center -m-4">
                    {/* Next.js */}
                    <div className="p-4 lg:w-1/6 md:w-1/3 w-full flex flex-col items-center">
                        <div className="bg-gray-800 rounded-lg p-6 text-center">
                            <Image
                                src="/next.svg"
                                alt="Next.js"
                                className="w-16 h-16 mb-4 mx-auto"
                                height={50}
                                width={50}
                            />
                            <h2 className="text-lg text-white font-medium title-font">
                                Next.js
                            </h2>
                        </div>
                    </div>

                    {/* React */}
                    <div className="p-4 lg:w-1/6 md:w-1/3 w-full flex flex-col items-center">
                        <div className="bg-gray-800 rounded-lg p-6 text-center">
                            <Image
                                src="/react.svg"
                                alt="React"
                                className="w-16 h-16 mb-4 mx-auto"
                                height={50}
                                width={50}
                            />
                            <h2 className="text-lg text-white font-medium title-font">
                                React
                            </h2>
                        </div>
                    </div>

                    {/* Node.js */}
                    <div className="p-4 lg:w-1/6 md:w-1/3 w-full flex flex-col items-center">
                        <div className="bg-gray-800 rounded-lg p-6 text-center">
                            <Image
                                src="/node.svg"
                                alt="Node.js"
                                className="w-16 h-16 mb-4 mx-auto"
                                height={50}
                                width={50}
                            />
                            <h2 className="text-lg text-white font-medium title-font">
                                Node.js
                            </h2>
                        </div>
                    </div>

                    {/* Express */}
                    <div className="p-4 lg:w-1/6 md:w-1/3 w-full flex flex-col items-center">
                        <div className="bg-gray-800 rounded-lg p-6 text-center">
                            <Image
                                src="/express.svg"
                                alt="Express"
                                className="w-16 h-16 mb-4 mx-auto"
                                height={50}
                                width={50}
                            />
                            <h2 className="text-lg text-white font-medium title-font">
                                Express
                            </h2>
                        </div>
                    </div>

                    {/* MongoDB */}
                    <div className="p-4 lg:w-1/6 md:w-1/3 w-full flex flex-col items-center">
                        <div className="bg-gray-800 rounded-lg p-6 text-center">
                            <Image
                                src="/mongo.png"
                                alt="MongoDB"
                                className="w-16 h-16 mb-4 mx-auto"
                                height={50}
                                width={50}
                            />
                            <h2 className="text-lg text-white font-medium title-font">
                                MongoDB
                            </h2>
                        </div>
                    </div>

                    {/* Python */}
                    <div className="p-4 lg:w-1/6 md:w-1/3 w-full flex flex-col items-center">
                        <div className="bg-gray-800 rounded-lg p-6 text-center">
                            <Image
                                src="/python.svg"
                                alt="MongoDB"
                                className="w-16 h-16 mb-4 mx-auto"
                                height={50}
                                width={50}
                            />
                            <h2 className="text-lg text-white font-medium title-font">
                                Python
                            </h2>
                        </div>
                    </div>

                    {/* HTML */}
                    <div className="p-4 lg:w-1/6 md:w-1/3 w-full flex flex-col items-center">
                        <div className="bg-gray-800 rounded-lg p-6 text-center">
                            <Image
                                src="/html.svg"
                                alt="MongoDB"
                                className="w-16 h-16 mb-4 mx-auto"
                                height={50}
                                width={50}
                            />
                            <h2 className="text-lg text-white font-medium title-font">
                                Html
                            </h2>
                        </div>
                    </div>

                    {/* CSS */}
                    <div className="p-4 lg:w-1/6 md:w-1/3 w-full flex flex-col items-center">
                        <div className="bg-gray-800 rounded-lg p-6 text-center">
                            <Image
                                src="/css.svg"
                                alt="MongoDB"
                                className="w-16 h-16 mb-4 mx-auto"
                                height={50}
                                width={50}
                            />
                            <h2 className="text-lg text-white font-medium title-font">
                                Css
                            </h2>
                        </div>
                    </div>

                    {/* Javascript */}
                    <div className="p-4 lg:w-1/6 md:w-1/3 w-full flex flex-col items-center">
                        <div className="bg-gray-800 rounded-lg p-6 text-center">
                            <Image
                                src="/javascript.svg"
                                alt="MongoDB"
                                className="w-16 h-16 mb-4 mx-auto"
                                height={50}
                                width={50}
                            />
                            <h2 className="text-lg text-white font-medium title-font">
                                Javascript
                            </h2>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
