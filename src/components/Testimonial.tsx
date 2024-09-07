import Image from "next/image";

export default function Testemonial() {
    return (
        <section id="testimonials" className="bg-gray-900 text-gray-400 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
                        Testemonials
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        I don&apos;t have any testemonials yet, but this is how it might look like.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center -m-4">
                {/*Testemonial 1*/}
                    <div className="p-4 md:w-1/2 w-full">
                        <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                            <div className="inline-flex items-center">
                                <Image 
                                    alt="Testemonial"
                                    src="https://dummyimage.com/50x50"
                                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                                    width={50}
                                    height={50}
                                />

                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="title-font font-medium text-white">
                                        John Doe
                                    </span>

                                    <span className="text-gray-500 text-sm">
                                        CEO of Internet
                                    </span>
                                </span>
                            </div>

                            <p className="leading-relaxed mt-4">
                                &quot;This developer is good.&quot;
                            </p>
                        </div>
                    </div>

                    {/*Testemonial 2*/}
                     <div className="p-4 md:w-1/2 w-full">
                        <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                            <div className="inline-flex items-center">
                                <Image 
                                    alt="Testemonial"
                                    src="https://dummyimage.com/50x50"
                                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                                    width={50}
                                    height={50}
                                />

                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="title-font font-medium text-white">
                                        Jane Doe
                                    </span>

                                    <span className="text-gray-500 text-sm">
                                        CEO of Design
                                    </span>
                                </span>
                            </div>

                            <p className="leading-relaxed mt-4">
                                &quot;This website is Amazing, the creator must have put a lot of work into it&quot;
                            </p>
                        </div>
                    </div>

                    {/*Testemonial 3*/}
                     <div className="p-4 md:w-1/2 w-full">
                        <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                            <div className="inline-flex items-center">
                                <Image 
                                    alt="Testemonial"
                                    src="https://dummyimage.com/50x50"
                                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                                    width={50}
                                    height={50}
                                />

                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="title-font font-medium text-white">
                                        James
                                    </span>

                                    <span className="text-gray-500 text-sm">
                                        Client
                                    </span>
                                </span>
                            </div>

                            <p className="leading-relaxed mt-4">
                                &quot;The Developer is very good at his job&quot;
                            </p>
                        </div>
                    </div>

                    {/*Testemonial 4*/}
                     <div className="p-4 md:w-1/2 w-full">
                        <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                            <div className="inline-flex items-center">
                                <Image 
                                    alt="Testemonial"
                                    src="https://dummyimage.com/50x50"
                                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                                    width={50}
                                    height={50}
                                />

                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="title-font font-medium text-white">
                                        Bob
                                    </span>

                                    <span className="text-gray-500 text-sm">
                                        Mobile Industry
                                    </span>
                                </span>
                            </div>

                            <p className="leading-relaxed mt-4">
                                &quot;The website good.&quot;
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}