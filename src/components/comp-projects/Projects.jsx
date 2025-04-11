import projectList from './Projects.json'
import { animate } from "animejs"
function Projects() {
    const handleMouseEnter = (e) => {
        animate(e.currentTarget,{
            translateY: -15,
        })
    }
    const handleMouseLeave = (e) => {
        animate(e.currentTarget,{
            translateY: 0
        })
    }
    return (
        <section className="bg-gradient-to-b from-blue-950 to-sky-800 pt-10 pb-20 px-6 text-white" id="projects">
             <div className="container mx-auto grid grid-cols-1">
                <div className="flex flex-col text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold">Projects</h1>
                    <p className="text-xl md:text-2xl lg:text-2xl text-gray-300 mt-3">
                        Here are the projects I’ve worked on and created so far. These reflect my skills, creativity, and experience in various areas, and I’m excited to share the outcomes of my efforts.
                        Each project represents a unique challenge I tackled, and I’ve learned a great deal throughout the process
                    </p>
                </div>  
            </div>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-15 gap-10">
                {projectList.map((items, index) => (
                    <div key={index} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <div className="bg-blue-400 hover:bg-white hover:text-blue-400 transition duration-500 rounded-lg">
                            <img src={items.links} className="object-cover w-full h-50 rounded-lg"/>
                            <div className="p-4 min-h-[200px] flex flex-col justify-between">
                                <h1 className="text-2xl font-bold">{items.name}</h1>
                                <div className="flex">
                                    <span className="bg-sky-800 p-1 font-bold rounded-lg">{items.lang}</span>
                                </div>
                                <p>{items.desc}</p>
                                <div className="mt-5 flex items-center gap-2">
                                    Click here!
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-square" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Projects