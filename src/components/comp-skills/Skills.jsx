import ArnProfile from '../../assets/profile.jpg';
import SkillList from './skills.json';
function Skills() {
    return (
        <section className="bg-gradient-to-b from-blue-950 to-blue-900 py-30 px-4 text-white">
            <div className="grid grid-cols-1 container mx-auto">
                <div className="flex flex-col text-center">
                    <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold">Skills</h1>
                    <p className="text-lg md:text-xl lg:text-xl text-gray-300 mt-3"> 
                        I have acquired a diverse set of skills through my college education, particularly in the field of technology.
                        Throughout my academic journey, I have gained knowledge and hands-on experience in various areas, strengthening my technical and problem-solving abilities.
                    </p>
                </div>
                <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 mx-auto container gap-10">
                    {SkillList.map((item, index) => (
                        <div className="bg-blue-400 w-full h-auto min-h-[300px] p-4 flex flex-col gap-5 rounded-lg" key={index}>
                            <h1 className="text-2xl lg:text-3xl font-bold text-center">{item.title}</h1>
                            <div className="flex justify-center gap-2">
                                {item.data.map((item, index) => (
                                    <div className="flex items-center gap-2 border-2 border-white px-2 py-1 rounded-lg"key={index}>
                                        <h1>{item.name}</h1>
                                        <img src={`${import.meta.env.BASE_URL}${item.url}`} width={30} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Skills;