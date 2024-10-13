import Image from "next/image";

export default function Skills() {
  const skills = [
    { name: 'Python', years: 1, imageUrl: '/python.svg', alt: "Python Logo" },
    { name: 'JavaScript', years: 0.5, imageUrl: '/javascript.svg', alt: "JavaScript Logo" },
    { name: 'HTML', years: 1, imageUrl: '/html.svg', alt: "HTML Logo" },
    { name: 'Next.js', years: 0.5, imageUrl: '/next.svg', alt: "Next.js Logo" },
    { name: 'React', years: 0.5, imageUrl: '/react.svg', alt: "React Logo" },
    { name: 'MongoDB', years: 0.5, imageUrl: '/mongo.png', alt: "MongoDB Logo" },
  ];
            
    return (
        <section id="skills" className="bg-gray-900 text-gray-400 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-12">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        My Skills
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Below are my skills and experience i have gained over the years.
                    </p>
                </div>

                <div className="flex justify-center space-x-8 mb-12">
                   {skills.map((skill, index) => (
                     <Image key={index} src={skill.imageUrl} alt={skill.alt} height={50} width={50} className="h-12 w-12 object-contain"/>
                   ))}
                </div>
            </div>
        </section>
    );
}
