import Image from "next/image";

export default function Skills() {
  const skills = [
    { name: 'Python', years: 1.5, imageUrl: '/python.svg', alt: "Python Logo" },
    { name: 'JavaScript', years: 0.9, imageUrl: '/javascript.svg', alt: "JavaScript Logo" },
    { name: 'HTML', years: 1.2, imageUrl: '/html.svg', alt: "HTML Logo" },
    { name: 'Next.js', years: 0.5, imageUrl: '/next.png', alt: "Next.js Logo" },
    { name: 'React', years: 0.9, imageUrl: '/react.svg', alt: "React Logo" },
    { name: 'MongoDB', years: 0.6, imageUrl: '/mongo.png', alt: "MongoDB Logo" },
  ];
            
    return (
        <section id="skills" className="bg-black text-gray-400 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-12">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        My Skills
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Below are my skills and experience. My goal is to get 4 years for each skill
                    </p>
                </div>

                {/*skill icons row */}
                <div className="flex justify-center space-x-8 mb-12">
                   {skills.map((skill, index) => (
                     <Image key={index} src={skill.imageUrl} alt={skill.alt} height={50} width={50} className="h-12 w-12 object-contain"/>
                   ))}
                </div>

                 {/* Skill with progress bar */}
        <div className="max-w-4xl mx-auto">
          {skills.map((skill, index) => {
            const percentage = (skill.years / 4) * 100;
            return (
              <div key={index} className="flex items-center mb-6">
                
                {/* Skill Name */}
                <div className="w-1/4 text-left">
                  <h2 className="text-lg text-white">{skill.name}</h2>
                </div>

                {/* Progress Bar */}
                <div className="w-3/4">
                  <div className="relative w-full h-4 bg-gray-600 rounded">
                    <div className="absolute h-full bg-indigo-500 rounded" style={{ width: `${percentage}%` }}></div>
                    <p className="text-right text-sm mt-1 text-gray-400">{percentage.toFixed(0)}%</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
            </div>
        </section>
    );
}
