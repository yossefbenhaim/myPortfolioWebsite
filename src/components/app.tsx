import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/navbar/navbar'; // Adjust the import path as necessary
import Home from './home/home';
import About from './about/about';
import Projects from './projects/projects';
import Contact from './contact/contact';
import Skills from './about/skills/skills';

const App = () => {
	const [activeSection, setActiveSection] = useState('');

	const homeRef = useRef(null);
	const aboutRef = useRef(null);
	const projectsRef = useRef(null);
	const contactRef = useRef(null);

	useEffect(() => {
		const sections = [
			{ id: 'home', ref: homeRef },
			{ id: 'about', ref: aboutRef },
			{ id: 'projects', ref: projectsRef },
			{ id: 'contact', ref: contactRef }
		];

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{
				threshold: 0.6, // Adjust as necessary to control when the section is considered "in view"
			}
		);

		sections.forEach(({ ref }) => {
			if (ref.current) {
				observer.observe(ref.current);
			}
		});

		return () => {
			sections.forEach(({ ref }) => {
				if (ref.current) {
					observer.unobserve(ref.current);
				}
			});
		};
	}, []);

	const scrollToSection = (id: string) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<div className='flex flex-col justify-between'>
			<Navbar scrollToSection={scrollToSection} activeSection={activeSection} />

			<div id="home" ref={homeRef} className="h-screen">
				<Home />
			</div>

			<div id="about" ref={aboutRef} className="h-full flex flex-col justify-between">
				<About />
				<Skills />
			</div>

			<div id="projects" ref={projectsRef} className="h-screen">
				<Projects />
			</div>

			<div id="contact" ref={contactRef} className="h-screen">
				<Contact />
			</div>
		</div>
	);
};

export default App;
