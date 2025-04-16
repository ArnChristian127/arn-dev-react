import Navbar from './components/comp-navbar/Navbar';
import About from './components/comp-about/About';
import Skills from './components/comp-skills/Skills';
import Projects from './components/comp-projects/Projects';
import { animate } from 'animejs';
import { useEffect } from 'react';
import './App.css';
import Education from './components/comp-education/Education';

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.stagger, .staggerl');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting && !el.dataset.animated) {
            const isLeft = el.classList.contains('staggerl');
            animate(el, {
              translateX: isLeft ? [-500, 0] : [500, 0],
              duration: 1000,
              opacity: [0, 0.5, 1],
              delay: 100,
            });
            el.dataset.animated = 'true';
          }
        });
      },
      { threshold: 0.5 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <>
      <Navbar/>
      <About/>
      <Skills/>
      <Projects/>
      <Education/>
    </>
  );
}

export default App;
