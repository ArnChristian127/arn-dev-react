import { useState } from 'react';
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const navbarList = [
        { label: 'About', link: '#about' },
        { label: 'Skills', link: '#skills' },
        { label: 'Projects', link: '#projects' },
        { label: 'Education', link: '#education' },
        { label: 'Certificates', link: '#certificates' },
        { label: 'Contact', link: '#contact' }
    ]
    return (
        <>
            <nav className="bg-blue-950 text-white px-6 py-4 fixed top-0 w-full z-100">
                <div className="container flex items-center mx-auto justify-between">
                    <h1 className="font-bold text-4xl">ArnDev</h1>
                    <ul className="flex space-x-6 mx-auto hidden lg:flex">
                        {navbarList.map((item, index) => (
                            <li key={index}><a href={item.link} className="font-bold hover:text-blue-400">{item.label}</a></li>
                        ))}
                    </ul>
                    <button className="flex items-center gap-2 font-bold border-2 border-blue-400 rounded-xl px-3 py-2 text-blue-400 hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out hidden lg:flex">
                        Github Profile
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                        </svg>
                    </button>
                    <button type="button" onClick={toggleMenu} className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-list hover:fill-blue-400" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                        </svg>
                    </button>
                </div>
            </nav>
            {isOpen && (
                <nav className="bg-sky-950 text-white px-6 py-4 lg:hidden fixed top-18 w-full z-100">
                    <div className="container mx-auto flex flex-col">
                        <ul className="flex flex-col space-y-4 lg:hidden">
                            {navbarList.map((item, index) => (
                                <li key={index}><a href={item.link} className="font-bold hover:text-blue-400">{item.label}</a></li>
                            ))}
                        </ul>
                        <div className="flex mt-4">
                            <button className="flex items-center gap-2 font-bold border-2 border-blue-400 rounded-xl px-3 py-1 text-blue-400 hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out">
                                Github Profile
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
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
export default Navbar