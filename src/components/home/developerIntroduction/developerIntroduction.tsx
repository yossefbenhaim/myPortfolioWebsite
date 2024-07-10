import { useLocation } from 'react-router-dom';
import { PathName } from 'models/enums/pathName';
import { IconOptions } from 'models/interfaces/iconOptions';

import useIntersectionObserver from 'components/about/skills/useIntersectionObserver';
import GenericIconsList from 'common/genericIconsList/genericIconsList';
import linkedin from '../../../assets/icons/linkedin.svg';
import git from '../../../assets/icons/git.svg';

export const DEVELOPER_FIRST_NAME = 'Yossef';
export const DEVELOPER_LAST_NAME = 'Ben Haim';


interface Props {
	openingSentence1: string;
	openingSentence2: string;
	documentationTitle?: string;
	documentationText: string;
	buttonText: string;
}

const contactIcons: IconOptions[] = [
	{ icon: git, url: 'https://github.com/yossefbenhaim' },
	{ icon: linkedin, url: 'https://www.linkedin.com/in/yossef-ben-haim/' },
];

const DeveloperIntroduction = ({ buttonText, documentationText, documentationTitle, openingSentence1, openingSentence2 }: Props) => {
	const currentPath = useLocation();
	const [containerRef, isVisible] = useIntersectionObserver({
		threshold: 0.1
	});
	return (
		<div ref={containerRef} className={` ${isVisible ? 'animate-slide-in-right' : ' '} h-[80%] w-[40%] justify-center text-white flex flex-col gap-[5%]`}>
			<div className="flex flex-row gap-2 w-[150px]">
				<p className="text-xl">{openingSentence1}</p>
				<p className="text-primary-color text-xl">{openingSentence2}</p>
			</div>
			{currentPath.pathname === PathName.HOME && <p className="text-primary-color font-bold text-5xl">{DEVELOPER_FIRST_NAME + ' ' + DEVELOPER_LAST_NAME}</p>}
			<p className="text-3xl">{documentationTitle}</p>
			<p className="text-gray-400 text-xl">{documentationText}</p>
			<button className="w-[110px] h-[50px] bg-primary-color text-base rounded-lg hover:bg-primary-color/80">
				{buttonText}
			</button>
			{currentPath.pathname === PathName.HOME &&
				<div className="flex flex-row w-full  h-[5%] gap-5">
					<GenericIconsList contactIcons={contactIcons} />
				</div>
			}
		</div>
	);
};

export default DeveloperIntroduction;
