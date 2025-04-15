import { useState, useEffect } from 'react';
import { animate } from 'animejs';
function Navbar() {
    const [isActivated, setActivate] = useState(false);
    const handlerClick = () => {
        if (isActivated) {
            animate('.slide-down', {
                opacity: [1, 0],
                translateY: [0, -500],
                duration: 2000,
            })
            setTimeout(() => {
                setActivate(false);
            }, 1000)
        }
        else {
            setActivate(true);
        }
    }
    useEffect(() => {
        animate('.slide-down', {
            opacity: [0, 1],
            translateY: [-500, 0],
        })
    })
    const navbarList = [
        {href: '#about', label: 'About'},
        {href: '#skills', label: 'Skills'},
        {href: '#projects', label: 'Projects'},
        {href: '#education', label: 'Education'},
        {href: '#certificates', label: 'Certificates'},
        {href: '#contact', label: 'Contacts'}
    ];
    return (
        <>
            <nav className="py-3 px-4 bg-blue-950 text-white fixed top-0 w-full z-50">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold select-none">ArnDev</h1>
                    <ul className="space-x-6 flex font-bold text-lg mx-auto hidden lg:flex">
                        {navbarList.map((items, index) => (<li key={index}><a href={items.href} className="hover:text-blue-400 active:text-blue-400">{items.label}</a></li>))}
                    </ul>
                    <div className="flex hidden lg:flex">
                        <button className="flex items-center bg-gradient-to-r from-blue-500 to-sky-800 px-4 py-2 font-bold text-lg rounded-lg gap-2">
                            Github Profile
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                            </svg>
                        </button>
                    </div>
                    <div className="flex lg:hidden">
                        <button type="button" onClick={() => handlerClick()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="currentColor" className="bi bi-list hover:fill-blue-400 active:fill-blue-400" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
            {isActivated && (
                <nav className="px-4 py-3 bg-blue-950 text-white lg:hidden fixed top-14 z-40 w-full slide-down">
                    <div className="container mx-auto flex flex-col mx-auto">
                        <ul className="space-y-2 font-bold text-base">
                            {navbarList.map((items, index) => (<li key={index}><a href={items.href} className="hover:text-blue-400 active:text-blue-400">{items.label}</a></li>))}
                        </ul>
                        <div className="flex mt-3">
                            <button className="flex items-center bg-gradient-to-r from-blue-500 to-blue-800 px-4 py-2 font-bold text-md rounded-lg gap-2">
                                Github Profile
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </nav>
            )}
        </>
    )
}
export default Navbar;