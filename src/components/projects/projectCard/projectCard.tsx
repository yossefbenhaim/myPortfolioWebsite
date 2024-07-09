import { Project } from "models/interfaces/project";

const VIEW_DEMO = 'View Demo 👆'
const WEB = 'WEB'

interface Props {
	projectImg: string;
	projectName: string;
	setIsProductViewOpen: (project: Project) => void;
}

const ProjectCard = ({ projectImg, projectName, setIsProductViewOpen }: Props) => {

	return (
		<div onClick={() => setIsProductViewOpen({ img: projectImg, name: projectName })} className='rounded-2xl relative w-full group overflow-hidden  md:w-80 my-4 mx-2 transform transition duration-500 hover:scale-110'>
			<img src={projectImg} className='w-full h-auto' alt='Spoofy' />
			<div
				className='absolute bottom-0 left-0 flex flex-col justify-center items-center gap-2 p-2 bg-opacity-50 bg-custom-gradient w-full h-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out'>
				<p className='text-white text-xs'>{WEB}</p>
				<p className='text-lg text-white'>{projectName}</p>
				<p className='text-xs text-white'>{VIEW_DEMO}</p>
			</div>
		</div>
	)

}

export default ProjectCard