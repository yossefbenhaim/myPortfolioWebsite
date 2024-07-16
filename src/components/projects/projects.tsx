import { useState, useEffect, useRef } from "react";
import { Project } from "models/interfaces/project";

import authenticationService from '../../assets/images/authenticationService.png';
import musicApplicationGif from '../../assets/gif/musicApplication.gif'
import profileWebsiteGif from '../../assets/gif/profileWebsite.gif'
import musicApplication from '../../assets/images/musicApplication.png';
import myProfileWebsite from '../../assets/images/myProfileWebsite.png';
import authentication from '../../assets/gif/authentication.gif'
import ProjectView from "./projectView/projectView";
import ProjectCard from "./projectCard/projectCard";


const MY = 'My'
const JOBS = 'Jobs'
const RECENT_PROJECT = 'Recent Project'

const ProjectList: Project[] = [
	{ img: musicApplication, name: 'Music Application', url: '', gitUrl: 'https://github.com/yossefbenhaim/spoofy-music-app', gif: musicApplicationGif },
	{ img: myProfileWebsite, name: 'My Profile Website', url: '', gitUrl: 'https://github.com/yossefbenhaim/myPortfolioWebsite', gif: profileWebsiteGif },
	{ img: authenticationService, name: 'Authentication Service', url: '', gitUrl: 'https://github.com/yossefbenhaim/AuthenticationService', gif: authentication },
]

const Projects = () => {
	const [currentProjectName, setCurrentProjectName] = useState<string | undefined>(undefined)
	const [currentProject, setCurrentProject] = useState<Project | undefined>(undefined)
	const [isProductViewOpen, setIsProductViewOpen] = useState<boolean>(false);

	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleOutsideCard = (event: MouseEvent) => {
			if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
				setIsProductViewOpen(false)
				setCurrentProject(undefined)
			}
		}
		document.addEventListener('mousedown', handleOutsideCard);
		return () => {
			document.removeEventListener('mousedown', handleOutsideCard);
		}
	}, [])


	useEffect(() => {
		const project = ProjectList.find((project) => project.name === currentProjectName)
		setCurrentProject(project)
	}, [currentProjectName])

	const handleOpenProject = (projectName: string) => {
		setCurrentProjectName(projectName)
		setIsProductViewOpen(true)
	}

	return (
		<div className="flex flex-col pt-[6%] px-[10%] gap-5 items-center h-full ">
			<div className="flex flex-col justify-center items-center w-full h-[10%]">
				<div className="flex flex-row gap-2 animate-slide-in-down ">
					<p className="text-white/90  ">{MY}</p>
					<p className="text-primary-color">{JOBS}</p>
				</div>
				<p className="text-white/90 text-2xl font-semibold animate-slide-in-down delay-500">{RECENT_PROJECT}</p>
			</div>
			<div className='text-primary-color w-full gap-2 justify-around items-center flex flex-row' >
				{ProjectList.map((project, index) => (
					<div className="animate-slide-in-down" key={index} >
						<ProjectCard setIsProductViewOpen={handleOpenProject} projectImg={project.img} projectName={project.name} />
					</div>
				))}
			</div>
			{
				isProductViewOpen &&
				<div ref={containerRef} className='absolute flex flex-col justify-between w-[700px] h-[60%] bg-black/30 p-1 backdrop-blur-md rounded-2xl'>
					<ProjectView currentProject={currentProject} />
				</div>
			}
		</div>
	);
}

export default Projects;
