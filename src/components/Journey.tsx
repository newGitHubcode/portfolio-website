import Image from 'next/image'

export default function Journey() {
  const journeyData = [
    { date:'2021', text: 'Early 2021 i heard about coding and started getting into coding and i  learned Python for a few months it was very enjoyable for me and i made it a hobby.', imageUrl: "https://picsum.photos/seed/picsum/100/100" },
    { date: '2022', text:'a year later i learned the basic syntax and basics such as functions, OOP, problem solving. And i started making my first website and Learnt AI', imageUrl:"https://picsum.photos/100/100" },
    { date: '2023', text: 'For a year i mainly focused on school so i learned programming in my free time only', imageUrl:"https://picsum.photos/100/100" },
    { date: '2024', text:'Halfway on 2024 i got started learning Web Again and made a few websites. And i switched to Java Script and learned React & Nodejs', imageUrl:"https://picsum.photos/100/100" }
  ]

  return (
    <section id="journey" className="bg-black text-gray-400 body-font py-24">
     <div className="container mx-auto px-5">
       <div className="text-center mb-12">
         <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
           My Journey
         </h1>
         
         <p className="text-base leading-relaxed xl:w-2/4 lg:w-2/4 mx-auto">
           Here is the timeline of my Journey
         </p>
       </div>

       <div className="flex flex-col">
         {journeyData.map((item, index) => (
           <div key={index} className={`flex flex-col md:flex-row items-center justify-between mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
             <div className="md:w-1/2 p-5">
               <Image src={item.imageUrl} alt={item.text} className="rounded-lg shadow-lg w-1/2" width={150} height={100} />
             </div>

             <div className="md:w-1/2 p-5">
               <h2 className="text-2xl text-white font-medium mb-2" >{item.date}</h2>
               <p className="text-lg leading-relaxed">{item.text}</p>
             </div>
           </div>
         ))}
       </div>
     </div> 
    </section>
  )
}
