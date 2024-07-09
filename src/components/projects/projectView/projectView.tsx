import { IconOptions } from 'models/interfaces/iconOptions';
import musicApplication from '../../../assets/gif/spoofy.gif'
import git from '../../../assets/icons/git.svg'
import open from '../../../assets/icons/open.svg'
import GenericIconsList from 'common/genericIconsList/genericIconsList';
import { Project } from 'models/interfaces/project';


const contactIcons: IconOptions[] = [
	{ icon: git, url: 'https://github.com/yossefbenhaim/spoofy-music-app' },
	{ icon: open, url: 'https://github.com/yossefbenhaim/spoofy-music-app' },
];
interface Props {
	currentProject: Project | undefined;
}
const ProjectView = ({ currentProject }: Props) => {
	return (
		<>
			<div className='w-full h-[90%] '>
				<img className='w-full  rounded-2xl ' src={musicApplication} />
			</div>
			<div className=' p-2 w-full h-full flex flex-row'>
				<GenericIconsList contactIcons={contactIcons} />
				<p className='text-white'>{currentProject?.name}</p>
			</div>
		</>
	)
}

export default ProjectView