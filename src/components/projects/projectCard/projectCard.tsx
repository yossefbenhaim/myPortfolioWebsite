import open from '../../../assets/icons/open.svg'

const VIEW_DEMO = `View Demo`
const WEB = 'WEB'

interface Props {
	projectImg: string;
	projectName: string;
	setIsProductViewOpen: (projectName: string) => void;
}

const ProjectCard = ({ projectImg, projectName, setIsProductViewOpen }: Props) => {

	return (
		<div onClick={() => setIsProductViewOpen(projectName)} className=' rounded-2xl relative w-full  group overflow-hidden  md:w-80 my-4 mx-2 transform transition duration-300 hover:scale-110'>
			<img src={projectImg} className='w-full h-auto' alt='Spoofy' />
			<div
				className='absolute bottom-0 left-0 flex flex-col justify-center items-center gap-2 p-2 bg-opacity-50 bg-custom-gradient w-full h-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out'>
				<p className='text-white/90 text-xs'>{WEB}</p>
				<p className='text-lg text-white/90'>{projectName}</p>
				<div className='flex flex-row justify-center items-center gap-1'>
					<p className='text-xs text-white/90'>{VIEW_DEMO}</p>
					<img className='w-[10px] h-[10px]' src={open} />
				</div>
			</div>
		</div>
	)

}

export default ProjectCard