import ProjectLists from './Projects.json'
function Projects() {
    return (
        <section className="bg-gradient-to-b from-blue-900 to-sky-800 py-30 px-4 text-white overflow-hidden" id="projects">
            <div className="grid grid-cols-1 container mx-auto">
                <div className="flex flex-col text-center">
                    <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold">Projects</h1>
                    <p className="text-lg md:text-xl lg:text-xl text-gray-300 mt-3"> 
                        Here are the projects I’ve worked on and created so far. These reflect my skills, creativity, and experience in various areas, and I’m excited to share the outcomes of my efforts.
                        Each project represents a unique challenge I tackled, and I’ve learned a great deal throughout the process
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 container mx-auto mt-20 gap-10">
                    {ProjectLists.map((items, index) => (
                        <div className="flex flex-col bg-blue-400 rounded-lg staggerl" key={index}>
                            <img src={`${import.meta.env.BASE_URL}${items.pics}`} className="object-cover w-full h-50 rounded-lg" alt={items.name}/>
                            <div className="px-5 py-3 min-h-[200px]">
                                <h1 className="text-2xl font-bold">{items.name}</h1>
                                <div className="flex gap-2 mt-2">
                                    {items.types.map((items, index) => (
                                        <span key={index} className="bg-sky-900 px-2 rounded-lg">{items.lang}</span>
                                    ))}
                                </div>
                                <p className="mt-2 text-md">{items.desc}</p>
                            </div>
                            <div className="flex p-5">
                                <div className="font-bold flex items-center gap-2">
                                    Click here
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Projects