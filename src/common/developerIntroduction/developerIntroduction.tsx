import { IconOptions } from 'models/interfaces/iconOptions';

import useIntersectionObserver from 'components/about/skills/useIntersectionObserver';
import GenericIconsList from 'common/genericIconsList/genericIconsList';
import linkedin from '../../assets/icons/linkedin.svg';
import git from '../../assets/icons/git.svg';
import GenericButton from 'common/genericButton/genericButton';
import { useAppSelector } from 'redux/store';
import { PathName } from 'models/enums/pathName';

export const DEVELOPER_FIRST_NAME = 'Yossef';
export const DEVELOPER_LAST_NAME = 'Ben Haim';


interface Props {
	openingSentence1: string;
	openingSentence2: string;
	documentationTitle?: string;
	documentationText: string;
	buttonText: string;
	pathName: string;
}

const contactIcons: IconOptions[] = [
	{ icon: git, url: 'https://github.com/yossefbenhaim' },
	{ icon: linkedin, url: 'https://www.linkedin.com/in/yossef-ben-haim/' },
];

const DeveloperIntroduction = ({ pathName, buttonText, documentationText, documentationTitle, openingSentence1, openingSentence2 }: Props) => {

	const [containerRef, isVisible] = useIntersectionObserver({
		threshold: 0.1
	});

	return (
		<div ref={containerRef} className={` ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}  sm:h-[80%] sm:w-[50%] justify-center text-white/90  flex flex-col gap-[10px]   `}>
			<div className="flex flex-row gap-2 w-[150px]">
				<p className="text-xl">{openingSentence1}</p>
				<p className="text-primary-color text-xl">{openingSentence2}</p>
			</div>
			{pathName === PathName.CONTACT && <p className="text-primary-color font-bold text-5xl">{DEVELOPER_FIRST_NAME + ' ' + DEVELOPER_LAST_NAME}</p>}
			<p className="text-3xl text-white/90 ">{documentationTitle}</p>
			<p className="text-gray-400 text-base">{documentationText}</p>
			<div className='w-[140px]'>
				<GenericButton pathNavigate={pathName} name={buttonText} />
			</div>
			<div className="flex flex-row w-full  h-[5%] gap-5 mt-3">
				<GenericIconsList contactIcons={contactIcons} />
			</div>
		</div>
	);
};

export default DeveloperIntroduction;
