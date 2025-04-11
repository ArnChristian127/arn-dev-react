import { useState, useRef, useEffect } from 'react'
import { animate, stagger } from "animejs"
import { Typewriter } from 'react-simple-typewriter'
import Arn from '../../assets/profile.jpg'
function About() {
    const hoverRef = useRef(null)
    const [isHover, setHover] = useState(false)
    if (isHover) {
        animate(hoverRef.current,{
            translateY: [0, -10]
        })
    } else {
        animate(hoverRef.current,{
            translateY: [-10, 0]
        })
    }
    useEffect(() => {
        animate(".anime-bubbles", {
            translateY:[0, -1300],
            opacity:[0, 1],
            duration: 3000,
            loop: true,
            delay: stagger(200)
        })
    }, [])
    const bubbles = []
    for (let i = 0; i < 100; i++) {
        let moveRandom = Math.floor(Math.random() * 1300) + 50
        let widthRandom = Math.floor(Math.random() * 10) + 5
        bubbles.push(
            <div className="absolute z-10 h-auto bottom-0 opacity-80 anime-bubbles"
                style={{left: `${moveRandom}px`, right: `${moveRandom}px`, width: `${widthRandom}%`}}
                key={i}>
                <img src="/bubbles/bubble.png"/>
            </div>
        )
    }
    return (
        <>
            <section className="bg-gradient-to-b from-blue-800 to-sky-950 pt-35 pb-30 text-white px-6 relative overflow-hidden" id="about">
                {bubbles}
                <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto gap-10 flex items-center relative z-10">
                    <div className="flex flex-col order-1 lg:order-0 text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold">
                            Hi, I am<br/>
                            Arn Christian S. Rosales
                        </h1>
                        <p className="text-2xl md:text-4xl lg:text-4xl mt-3">I am a <span className="text-blue-400">
                            <Typewriter
                                words={['Programer','Web Developer', 'UI/UX Designer']}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                            </span>
                        </p>
                        <p className="text-xl md:text-2xl lg:text-2xl text-gray-300 mt-3">
                            I've always been passionate about technology, and I love exploring how it can solve real-world problems.
                            In addition to my coursework, I enjoy working on projects that allow me to apply my skills,
                            and I'm always looking to collaborate with others.
                        </p>
                        <div className="flex justify-center items-center flex-wrap lg:justify-start gap-4 mt-3">
                            <div className="flex gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-facebook hover:filter-blue-400" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-instagram hover:filter-blue-400" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-twitter-x hover:filter-blue-400" viewBox="0 0 16 16">
                                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                                </svg>
                            </div>
                            <button className="flex items-center gap-2 rounded-xl bg-blue-400 font-bold px-5 py-2 text-xl" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} ref={hoverRef}>
                                Contact me
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-mailbox2-flag" viewBox="0 0 16 16">
                                    <path d="M10.5 8.5V3.707l.854-.853A.5.5 0 0 0 11.5 2.5v-2A.5.5 0 0 0 11 0H9.5a.5.5 0 0 0-.5.5v8z"/>
                                    <path d="M4 3h4v1H6.646A4 4 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3V3a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4m.585 4.157C4.836 7.264 5 7.334 5 7a1 1 0 0 0-2 0c0 .334.164.264.415.157C3.58 7.087 3.782 7 4 7s.42.086.585.157"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex order-0 lg:order-1 justify-center lg:justify-end">
                        <img src={Arn} className="w-max h-auto rounded-full max-h-[400px]" alt="profile"/>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About
