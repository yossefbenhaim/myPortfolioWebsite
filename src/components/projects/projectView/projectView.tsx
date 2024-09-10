import { IconOptions } from 'models/interfaces/iconOptions';
import { Project } from 'models/interfaces/project';

import GenericIconsList from 'common/genericIconsList/genericIconsList';
import blackOpen from '../../../assets/icons/blackOpen.svg'
import loading from '../../../assets/gif/loading.gif'
import git from '../../../assets/icons/git.svg'

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
			<div className='w-full h-full  justify-center items-center flex '>
				<img className='w-full sm:h-[390px] h-[200px] justify-center items-center  rounded-2xl ' src={currentProject?.gif ?? loading} />
			</div>
			<div className='px-2 pt-2 justify-between  h-[60px]  items-center w-full  flex flex-row'>
				<div className='flex flex-row gap-3  '>
					<GenericIconsList contactIcons={contactIcons} />
				</div>
				<p className='text-white'>{currentProject?.name}</p>
			</div>
		</>
	)
}

export default ProjectView