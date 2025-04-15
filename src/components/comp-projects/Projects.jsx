import ProjectLists from './Projects.json';
import { animate } from 'animejs';
import { useEffect, useState } from 'react';
function Projects() {
    const [clickedValue, setClickedValue] = useState(null);
    const handleClick = (items) => {
        console.log("Clicked:", items);
        setClickedValue(items);
    };
    const handleClose = () => {
        animate('.fade', {
            opacity: [1, 0],
            translateY: [0, 500],
        })
        setTimeout(() => {
            setClickedValue(null);
        }, 300)
    };
    useEffect(() => {
        animate('.fade', {
            opacity: [0, 1],
            translateY: [500, 0],
        })
    })
    return (
        <>
            <section className="bg-gradient-to-b from-blue-900 to-sky-800 py-30 px-4 text-white overflow-hidden" id="projects">
                <div className="grid grid-cols-1 container mx-auto">
                    <div className="flex flex-col text-center staggerl">
                        <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold">Projects</h1>
                        <p className="text-lg md:text-xl lg:text-xl text-gray-300 mt-3"> 
                            Here are the projects I’ve worked on and created so far. These reflect my skills, creativity, and experience in various areas, and I’m excited to share the outcomes of my efforts.
                            Each project represents a unique challenge I tackled, and I’ve learned a great deal throughout the process
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 container mx-auto mt-20 gap-10">
                        {ProjectLists.map((items, index) => (
                            <div className="flex flex-col bg-blue-400 rounded-lg staggerl hover:bg-white active:bg-white hover:text-blue-400 active:text-blue-400" key={index} onClick={() => handleClick(items)}>
                                <img src={`${import.meta.env.BASE_URL}${items.pics}`} className="object-cover w-full h-50 rounded-lg" alt={items.name}/>
                                <div className="px-5 py-3 min-h-[200px]">
                                    <h1 className="text-2xl font-bold">{items.name}</h1>
                                    <div className="flex gap-2 mt-2">
                                        {items.types.map((types, index) => (
                                            <span key={index} className="bg-sky-900 px-2 rounded-lg">{types.lang}</span>
                                        ))}
                                    </div>
                                    <p className="mt-2 text-md">{items.desc}</p>
                                </div>
                                <div className="flex p-5">
                                    <div className="font-bold flex items-center gap-2 select-none">
                                        Click here
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-square" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {clickedValue && (
                <>
                    <div className="fixed inset-0 bg-black z-50" style={{opacity: "0.8"}}></div>
                    <div className="fixed inset-0 flex items-center justify-center z-50 px-6 fade">
                        <div className="bg-blue-400 text-white p-4 mx-auto container flex flex-col w-150 rounded-xl">
                            <img src={`${import.meta.env.BASE_URL}${clickedValue.pics}`} className="object-fit rounded-xl"/>
                            <h1 className="font-bold text-2xl mt-5">{clickedValue.name}</h1>
                            <div className="mt-2 flex gap-2">
                                {clickedValue.types.map((types, index) => (
                                    <span key={index} className="bg-sky-900 px-2 rounded-lg">{types.lang}</span>
                                ))}
                            </div>
                            <p className="mt-5">{clickedValue.desc}</p>
                            <div className="mt-5">
                                <button className="flex items-center bg-sky-900 px-3 py-1 rounded-lg font-bold gap-2" onClick={() => handleClose()}>
                                    Exit
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-backspace-reverse-fill" viewBox="0 0 16 16">
                                        <path d="M0 3a2 2 0 0 1 2-2h7.08a2 2 0 0 1 1.519.698l4.843 5.651a1 1 0 0 1 0 1.302L10.6 14.3a2 2 0 0 1-1.52.7H2a2 2 0 0 1-2-2zm9.854 2.854a.5.5 0 0 0-.708-.708L7 7.293 4.854 5.146a.5.5 0 1 0-.708.708L6.293 8l-2.147 2.146a.5.5 0 0 0 .708.708L7 8.707l2.146 2.147a.5.5 0 0 0 .708-.708L7.707 8z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
export default Projects