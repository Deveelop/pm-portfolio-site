
import { ProjectsGallery } from "@/constant"
import Image from "next/image"
const Projects = () => {
  return (
    <section className=" bg-gray-100 text-gray-800 py-12">
        <div className=" container mx-auto text-center mb-12 px-6">
            <h1 className=" text-4xl font-bold">My Projects</h1>
            <p className=" mt-4 text-lg text-gray-600">Explore some of the projects I''ve worked on. Each showcases my expertise in delivering functional and visually appealing solution</p>

        </div>

        <div className=" container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
         
         {ProjectsGallery.map((projects) =>(
           <div key={projects.id} className=" bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
           <Image src={projects.image} alt={projects.title} width={400} height={250} className=" object-cover w-full h-52"/>
           <div className="p-6">
            <h3 className=" font-bold text-xl">{projects.title}</h3>
            <p className="text-gray-600 mt-2">{projects.description}</p>
            <div>
                <a href={projects.link} className=" block mt-4 text-blue-600 hover:underline">View Details</a>
            </div>
           </div>
        </div>

         ))}
        </div>

    </section>
  )
}

export default Projects