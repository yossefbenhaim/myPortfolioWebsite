import { useEffect, useRef } from 'react';
import { useAppSelector } from 'redux/store';
import { setActiveSection } from 'redux/slice/activeSection';
import { useDispatch } from 'react-redux';

import Navbar from '../components/navbar/navbar'; // Adjust the import path as necessary
import Home from './home/home';
import About from './about/about';
import Projects from './projects/projects';
import Contact from './contact/contact';
import Skills from './about/skills/skills';
import { PathName } from 'models/enums/pathName';

const App = () => {
	const dispatch = useDispatch();

	const homeRef = useRef(null);
	const aboutRef = useRef(null);
	const projectsRef = useRef(null);
	const contactRef = useRef(null);
	const skillsRef = useRef(null);

	useEffect(() => {
		const sections = [
			{ id: PathName.HOME, ref: homeRef },
			{ id: PathName.ABOUT, ref: aboutRef },
			{ id: PathName.SKILLS, ref: skillsRef },
			{ id: PathName.PROJECTS, ref: projectsRef },
			{ id: PathName.CONTACT, ref: contactRef }
		];

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						dispatch(setActiveSection({ activeSection: entry.target.id }))
					}
				});
			},
			{
				threshold: 0.6,
			}
		);

		sections.forEach(({ ref }) => {
			if (ref.current) {
				observer.observe(ref.current);
			}
		})

		return () => {
			sections.forEach(({ ref }) => {
				if (ref.current) {
					observer.unobserve(ref.current);
				}
			});
		};
	}, []);



	return (
		<div className='flex flex-col justify-between'>
			<Navbar />
			<div id="home" ref={homeRef} className="sm:h-screen h-[150vh]">
				<Home />
			</div>
			<div id="about" ref={aboutRef} className=" h-full w-full flex flex-col gap-20">
				<About />
			</div>
			<div id="skill" ref={skillsRef} className=" h-[50vh] pt-10 w-full flex flex-col gap-20">
				<Skills />
			</div>

			<div id="projects" ref={projectsRef} className="sm:h-screen h-[150vh]">
				<Projects />
			</div>

			<div id="contact" ref={contactRef} className="h-screen ">
				<Contact />
			</div>
		</div>
	);
};

export default App;
