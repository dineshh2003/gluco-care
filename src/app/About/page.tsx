import React from 'react'
import Image from 'next/image'


const teamMembers = [
  {
    name: "Dinesh ",
    position: "Co Founder",
    image: "/profile.png",
    description: "",
  },
  {
    name: "Shridhar ",
    position: "Co Founder",
    image: "/profile.png",
    description: "",
  },
  {
    name: "Jeet",
    position: "Co Founder",
    image: "/profile.png",
    description: "",
  },
];


const AboutPage = () => {
  return (
    <div className="bg-b1 h-fit w-[92vw]  flex flex-col my-2 m-auto items-center text-white font-roboto ">
      <h1 className="text-gray-600 text-4xl font-bold my-8">About Our Project and Team</h1>
      <div className="h-[80vh] w-fit flex flex-row gap-4">
      <div className="flex flex-col items-center space-y-8 px-4 h-fit w-[50vw]">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center h-[23vh] rounded-xl bg-b2  p-6 md:p-8 w-[50vw] hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={500}
              height={500}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mb-4 md:mb-0 md:mr-8 hover:scale-105 transform transition-transform duration-300"
            />
            <div className="text-center md:text-left">
              <h2 className="text-gray-600 text-2xl font-bold">{member.name}</h2>
              <h3 className="text-gray-600 text-xl mb-2">{member.position}</h3>
              <p>{member.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="h-[78vh] w-[35vw] bg-b2 text-gray-600 rounded-xl text-xl flex flex-col items-center justify-center"> 
            <p className="m-5"> GLUCO-CARE is a Personal Health-Care Assistant Project which helps patient at every state with their diabetes , it not only predict your chances of diabetes but also helps to diagonise it too with the help of FINE-TUNED GEMINI MODEL specially for the diabetes paitent, and a special Feature of MAP based search functionalality to find the MEDICINES and BLOOD GROUP all over the INDIA with their contact info too  , this helps in saving a lot of time in Emergency condtions and also you can book your appointment with a doctor and can Video-Call them too with the implementaion of WEB-RTC over here, and is fully MERN STACK which mean you can get all these information in the real-time </p>
      </div>  
      </div>
    </div>
  )
}

export default AboutPage
