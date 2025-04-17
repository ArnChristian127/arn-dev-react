import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import CertificatesList from './Certificates.json';
function Certificates() {
    const [isActive, setActive] = useState(null);
    const fullView = (data) => {
        setActive(data);
    }
    const close = () => {
        setActive(false)
    }
    return (
        <>
            <section className="bg-gradient-to-b from-blue-950 to-sky-950 py-30 px-4 text-white overflow-hidden" id="certificates">
                <div className="grid grid-cols-1 container mx-auto">
                    <div className="flex flex-col text-center staggerl">
                        <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold">Certificates</h1>
                        <p className="text-lg md:text-xl lg:text-xl text-gray-300 mt-3"> 
                            My education has been a transformative journey of self-discovery and continuous growth, shaping both my knowledge and outlook on life.
                            Along the way, I have faced challenges that tested my resilience and celebrated achievements that fueled my passion for learning.
                        </p>
                    </div>
                </div>
                <div className="container mx-auto mt-20">
                    <div className="flex justify-center items-center staggerl">
                        <Swiper pagination={{type: 'fraction'}} navigation={true} modules={[Pagination, Navigation]} className="max-w-4xl w-full bg-blue-400 rounded-lg">
                            {CertificatesList.map((items, index) => (
                                <SwiperSlide className="p-5">
                                    <div className="p-5 flex flex-col sm:flex-row md:flex-row lg:flex-row gap-5 rounded-lg md:min-h-[300px] lg:min-h-[350px]" key={index}>
                                        <div>
                                            <img src={`${import.meta.env.BASE_URL}${items.url}`} className="object-fit rounded-xl w-full h-auto max-w-[400px]"/>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h1 className="font-bold text-3xl">{items.name}</h1>
                                            <div>
                                                <span className="bg-sky-900 px-2 py-1 rounded-xl font-bold">{items.about}</span>
                                            </div>
                                            <p className="text-lg">{items.desc}</p>
                                            <div>
                                                <button className="flex items-center bg-sky-900 px-3 py-1 rounded-lg font-bold gap-2" onClick={() => fullView(items)}>View Full Screen</button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
            {isActive && (
                <>
                    <div className="fixed inset-0 bg-black z-50" style={{opacity: "0.8"}}/>
                    <div className="fixed inset-0 z-50 flex justify-center items-center px-6 flex-col">
                        <div className="container mx-auto flex justify-center">
                            <img src={`${import.meta.env.BASE_URL}${isActive.url}`} className="md:max-w-[600px] lg:max-w-[700px]"/>
                        </div>
                        <button className="flex items-center bg-sky-900 px-3 py-1 rounded-lg font-bold gap-2 text-white mt-5" onClick={() => close()}>
                            Exit
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-backspace-reverse-fill" viewBox="0 0 16 16">
                                <path d="M0 3a2 2 0 0 1 2-2h7.08a2 2 0 0 1 1.519.698l4.843 5.651a1 1 0 0 1 0 1.302L10.6 14.3a2 2 0 0 1-1.52.7H2a2 2 0 0 1-2-2zm9.854 2.854a.5.5 0 0 0-.708-.708L7 7.293 4.854 5.146a.5.5 0 1 0-.708.708L6.293 8l-2.147 2.146a.5.5 0 0 0 .708.708L7 8.707l2.146 2.147a.5.5 0 0 0 .708-.708L7.707 8z"/>
                            </svg>
                        </button>
                    </div>
                </>
            )}
        </>
    )
}
export default Certificates;