import skillList from './skills.json'
import { animate } from "animejs"
function Skills() {
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
        <section className="bg-gradient-to-b from-sky-950 to-blue-950 pt-10 pb-40 px-6 text-white" id="skills">
            <div className="container mx-auto grid grid-cols-1">
                <div className="flex flex-col text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold">Skills</h1>
                    <p className="text-xl md:text-2xl lg:text-2xl text-gray-300 mt-3">
                        I have acquired a diverse set of skills through my college education, particularly in the field of technology.
                        Throughout my academic journey, I have gained knowledge and hands-on experience in various areas, strengthening my technical and problem-solving abilities.
                    </p>
                </div>
            </div>
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 mt-15 gap-10">
                {skillList.map((items, i) => (
                    <div className="flex items-center justify-center" key={i} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <div className="bg-blue-500 p-5 w-full h-auto  min-h-[300px] flex flex-col gap-5 rounded-lg hover:bg-white hover:text-blue-400 transition duration-500 rounded-lg">
                            <h1 className="text-3xl font-bold text-center">{items.title}</h1>
                            <div className="flex gap-3 justify-center items-center flex-wrap">
                                {items.lists.map((items, j) =>(
                                    <div className="flex items-center gap-2 border-2 border-white px-2 py-1 rounded-lg text-lg" key={j}>
                                        <p>{items.names}</p>
                                        <img src={items.link} style={{width: '30px', height: 'auto'}}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Skills