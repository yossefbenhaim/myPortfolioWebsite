import { IconOptions } from 'models/interfaces/iconOptions';
import { Project } from 'models/interfaces/project';

import musicApplication from '../../../assets/gif/spoofy.gif'
import GenericIconsList from 'common/genericIconsList/genericIconsList';
import git from '../../../assets/icons/git.svg'
import blackOpen from '../../../assets/icons/blackOpen.svg'

interface Props {
	currentProject: Project | undefined;
}

const ProjectView = ({ currentProject }: Props) => {

	const contactIcons: IconOptions[] = [
		{ icon: git, url: currentProject?.gitUrl ?? '' },
		{ icon: blackOpen, url: currentProject?.url ?? '', disable: !currentProject?.url },
	];

	return (
		<>
			<div className='w-full h-[90%]'>
				<img className='w-full  rounded-2xl ' src={musicApplication} />
			</div>
			<div className='p-2 justify-between  items-center w-full h-full flex flex-row'>
				<div className='flex flex-row gap-3  '>
					<GenericIconsList contactIcons={contactIcons} />
				</div>
				<p className='text-white'>{currentProject?.name}</p>
			</div>
		</>
	)
}

export default ProjectView