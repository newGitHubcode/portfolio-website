export default function Projects() {
    return (
        <section id="projects" className="bg-gray-900 text-gray-400 body-font">
           <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-12">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        My Projects
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto ">
                        Here are some of the projects I have built in my journey of Web development.
                    </p>
                </div>

                <div className="flex flex-wrap -m-4">
                    {/*Project 1*/}
                    <div className="p-4 lg:w-1/2 w-full">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <img 
                                className="object-cover object-center w-full h-48 rounded-lg"
                                src="https://via.placeholder.com/600x400"
                                alt="pr1"
                            />

                            <h2 className="text-lg text-white font-medium title-font mt-4 mb-2">
                                My first project
                            </h2>
                            
                            <p className="text-base mb-4">
                                This was my first project. It's a plain site using Html, Css & Js
                            </p>

                            <a href="#" className="text-blue-400 hover:text-blue-300">
                                View project
                            </a>
                        </div>
                    </div>

                    {/*Project 2*/}
                    <div className="p-4 lg:w-1/2 w-full">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <img 
                                className="object-cover object-center w-full h-48 rounded-lg"
                                src="https://via.placeholder.com/600x400"
                                alt="pr1"
                            />

                            <h2 className="text-lg text-white font-medium title-font mt-4 mb-2">
                                My Second project
                            </h2>
                            
                            <p className="text-base mb-4">
                                This was my second project. It's a 
                            </p>

                            <a href="#" className="text-blue-400 hover:text-blue-300">
                                View project
                            </a>
                        </div>
                    </div>

                    {/*Project 3*/}
                    <div className="p-4 lg:w-1/2 w-full">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <img 
                                className="object-cover object-center w-full h-48 rounded-lg"
                                src="https://via.placeholder.com/600x400"
                                alt="pr1"
                            />

                            <h2 className="text-lg text-white font-medium title-font mt-4 mb-2">
                                My Third project
                            </h2>
                            
                            <p className="text-base mb-4">
                                This was my Third project. It's a 
                            </p>

                            <a href="#" className="text-blue-400 hover:text-blue-300">
                                View project
                            </a>
                        </div>
                    </div>

                    {/*Project 4*/}
                    <div className="p-4 lg:w-1/2 w-full">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <img 
                                className="object-cover object-center w-full h-48 rounded-lg"
                                src="https://via.placeholder.com/600x400"
                                alt="pr1"
                            />

                            <h2 className="text-lg text-white font-medium title-font mt-4 mb-2">
                                My Fourth project
                            </h2>
                            
                            <p className="text-base mb-4">
                                This was my Fourth project. It's a 
                            </p>

                            <a href="#" className="text-blue-400 hover:text-blue-300">
                                View project
                            </a>
                        </div>
                    </div>
                </div>
           </div>
        </section>
    );
}