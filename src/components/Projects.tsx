import Image from "next/image";

export default function Projects() {
    return (
        <section id="projects" className="bg-black text-gray-400 body-font">
           <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-12">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        My Projects
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto ">
                        Here are some of the projects I have built in my journey of coding, Websites, Apps, etc.
                    </p>
                </div>

                <div className="flex flex-wrap -m-4">
                    {/*Project 1*/}
                    <div className="p-4 lg:w-1/2 w-full">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <Image 
                                className="object-cover object-center w-full h-48 rounded-lg"
                                src="/wedding_website.png"
                                alt="pr1"
                                height={700}
                                width={700}
                            />

                            <h2 className="text-lg text-white font-medium title-font mt-4 mb-2">
                                My first project
                            </h2>
                            
                            <p className="text-base mb-4">
                                This was my first project a Wedding website. It&apos;s a plain site using Html, Css & Js
                            </p>

                            <a href="https://newgithubcode.github.io/Wedding-Website" target="_blank" className="text-blue-400 hover:text-blue-300">
                                View project
                            </a>
                        </div>
                    </div>

                    {/*Project 2*/}
                    <div className="p-4 lg:w-1/2 w-full">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <Image 
                                className="object-cover object-center w-full h-48 rounded-lg"
                                src="/twitter.png"
                                alt="pr1"
                                height={700}
                                width={700}
                            />

                            <h2 className="text-lg text-white font-medium title-font mt-4 mb-2">
                                My Second project
                            </h2>
                            
                            <p className="text-base mb-4">
                                This is a twitter clone using Nextjs With realtime database using Supabase
                            </p>

                            <a href="https://twitter-three-gilt.vercel.app/" className="text-blue-400 hover:text-blue-300" target="_blank">
                                View project
                            </a>
                        </div>
                    </div>

                    {/*Project 3*/}
                    <div className="p-4 lg:w-1/2 w-full">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <Image 
                                className="object-cover object-center w-full h-48 rounded-lg"
                                src="https://via.placeholder.com/600x400"
                                alt="pr1"
                                height={600}
                                width={400}
                            />

                            <h2 className="text-lg text-white font-medium title-font mt-4 mb-2">
                                My Third project
                            </h2>
                            
                            <p className="text-base mb-4">
                                This was my Third project. It&apos;s a 
                            </p>

                            <a href="#" className="text-blue-400 hover:text-blue-300">
                                View project
                            </a>
                        </div>
                    </div>

                    {/*Project 4*/}
                    <div className="p-4 lg:w-1/2 w-full">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <Image 
                                className="object-cover object-center w-full h-48 rounded-lg"
                                src="https://via.placeholder.com/600x400"
                                alt="pr1"
                                height={600}
                                width={400}
                            />

                            <h2 className="text-lg text-white font-medium title-font mt-4 mb-2">
                                My Fourth project
                            </h2>
                            
                            <p className="text-base mb-4">
                                This was my Fourth project. It&apos;s a 
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
