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
                        I don&apos;t have any testemonials yet.
                    </p>
                </div>
            </div>
        </section>
    );
}