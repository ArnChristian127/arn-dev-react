import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import CertificatesList from './Certificates.json';
function Certificates() {
    return (
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
            <div className="container mx-auto mt-20 staggerl">
                <div className="flex justify-center items-center">
                    <Swiper pagination={{type: 'fraction'}} navigation={true} modules={[Pagination, Navigation]} className="max-w-4xl w-full bg-blue-400 rounded-lg">
                        {CertificatesList.map((items, index) => (
                            <SwiperSlide className="pl-5 pr-5">
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
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
export default Certificates;