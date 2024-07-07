import React from 'react';
import git from '../../../assets/icons/git.svg';
import linkedin from '../../../assets/icons/linkedin-2.svg';
import { useLocation } from 'react-router-dom';
import { PathName } from 'models/enums/pathName';

export const DEVELOPER_FIRST_NAME = 'Yossef';
export const DEVELOPER_LAST_NAME = 'Ben Haim';

interface IconOptions {
	icon: string;
	url: string;
}

const ContactIcons: IconOptions[] = [
	{ icon: git, url: 'https://github.com/yossefbenhaim' },
	{ icon: linkedin, url: 'https://www.linkedin.com/in/yossef-ben-haim/' },
];

interface Props {
	openingSentence1: string;
	openingSentence2: string;
	documentationTitle?: string;
	documentationText: string;
	buttonText: string;
}

const DeveloperIntroduction = ({ buttonText, documentationText, documentationTitle, openingSentence1, openingSentence2 }: Props) => {
	const currentPath = useLocation();

	return (
		<div className={` animate-slide-in-right h-[80%] w-[40%] justify-center text-white flex flex-col gap-[5%]`}>
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
				<div className="flex flex-row w-full h-[5%] gap-5">
					{ContactIcons.map((item) => (
						<a key={item.url} href={item.url} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
							<img className="bg-primary-color rounded-3xl transform transition-transform duration-300 hover:-translate-y-1 hover:scale-110"
								src={item.icon} alt="GitHub" width="30px" height="30px" />
						</a>
					))}
				</div>
			}
		</div>
	);
};

export default DeveloperIntroduction;
