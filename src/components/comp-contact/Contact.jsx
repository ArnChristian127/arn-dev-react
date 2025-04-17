import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { animate } from 'animejs';
function Contact() {
    const form = useRef();
    const key = "m_-Y1pBVF431hhA_g";
    const serviceId = "service_9e8wthm";
    const templateId = "template_mjbpasn";
    const [isActive, setActive] = useState(null);
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            serviceId,
            templateId,
            form.current,
            key
        )
        .then((result) => {
            console.log("Email sent successfully:", result.text);   
            setActive(true);
        }, (error) => {
            console.log("Failed to send email:", error.text); 
        });
        e.target.reset(); 
    };
    const close = () => {
        setActive(false)
    }
    useEffect(() => {
        animate('.fade', {
            opacity: [0, 1],
            translateY: [300, 0],
        })
    })
    return (
        <>
            <section className="bg-gradient-to-b from-sky-950 to-blue-800 py-30 px-4 text-white overflow-hidden" id="contacts">
                <div className="grid grid-cols-1 container mx-auto">
                    <div className="flex flex-col text-center stagger">
                        <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold">Contacts</h1>
                        <p className="text-lg md:text-xl lg:text-xl text-gray-300 mt-3"> 
                            Please don’t hesitate to reach out if you have any questions, would like to connect, or see an opportunity for us to collaborate.
                            I’m always open to meaningful conversations and new possibilities!
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 container mx-auto mt-20">
                    <div className="flex justify-center sm:px-5 md:px-20 lg:px-50 xl:px-80 stagger">
                        <form className="bg-blue-400 p-10 flex flex-col gap-2 rounded-lg w-full" ref={form} onSubmit={sendEmail}>
                            <h1 className="font-bold text-2xl">Email Me</h1>
                            <input type="text" name="name" className="border-2 border-white outline-none rounded-lg p-2 text-xl text-gray-600 mt-3" placeholder="Your Name" required/>
                            <input type="email" name="email" className="border-2 border-white outline-none rounded-lg p-2 text-xl text-gray-600" placeholder="Your Email" required/>
                            <input type="text" name="subject" className="border-2 border-white outline-none rounded-lg p-2 text-xl text-gray-600" placeholder="Subject" required/>
                            <textarea name="message" placeholder="Message" className="outline-none border-2 border-white rounded-lg text-xl p-2 text-gray-600" required/>
                            <button type="submit" className="bg-sky-900 p-3 rounded-lg font-bold text-xl flex justify-center items-center gap-2">
                                Send
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            {isActive && (
                <>
                    <div className="fixed inset-0 bg-black z-50" style={{opacity: "0.8"}}/>
                    <div className="fixed inset-0 z-50 flex justify-center items-center px-6 flex-col text-white fade">
                        <h1 className="text-4xl font-bold text-center">Send Successfully!!</h1>
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
    );
}
export default Contact;