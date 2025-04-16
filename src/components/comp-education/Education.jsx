import ArnProfile from '../../assets/profile.jpg';
import EducationList from './Education.json';
function Education() {
    return (
        <section className="bg-gradient-to-b from-sky-800 to-blue-950 py-30 px-4 text-white overflow-hidden" id="education">
            <div className="grid grid-cols-1 container mx-auto">
                <div className="flex flex-col text-center stagger">
                    <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold">Education</h1>
                    <p className="text-lg md:text-xl lg:text-xl text-gray-300 mt-3"> 
                        My education has been a transformative journey of self-discovery and continuous growth, shaping both my knowledge and outlook on life.
                        Along the way, I have faced challenges that tested my resilience and celebrated achievements that fueled my passion for learning.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 mt-20 container mx-auto">
                <div className="flex justify-center items-center flex-col gap-5 sm:px-20 md:px-40 lg:px-80">
                    {EducationList.map((items, index) => (
                        <div className="w-full flex flex-col gap-2 stagger" key={index}>
                            <div className="flex items-center gap-2">
                                <span className="rounded-full border-2 border-blue-400 p-1"/>
                                <span className="text-sm font-bold">{items.date}</span>
                            </div>
                            <div className="flex gap-3 min-h-[100px] pl-1">
                                <span className="rounded-full border-l border-2 border-blue-400"/>
                                <div className="bg-blue-400 w-full rounded-lg p-5">
                                    <div className="flex items-center gap-2">
                                        <img src={`${import.meta.env.BASE_URL}${items.url}`} className="w-full h-auto max-w-[50px] rounded-full" alt={items.name}/>
                                        <h1 className="text-xl font-bold">{items.name}</h1>
                                    </div>
                                    <p>{items.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Education;