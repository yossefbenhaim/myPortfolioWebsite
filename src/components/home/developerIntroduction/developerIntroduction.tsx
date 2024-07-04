import React from 'react';
import git from '../../../assets/icons/git.svg';
import linkedin from '../../../assets/icons/linkedin-2.svg';

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

const SUMMARY = 'I am a full-stack developer dedicated to building robust, scalable, and user-friendly web applications.';

const DeveloperIntroduction = () => {
	return (
		<div className={` animate-slide-in-right h-[80%] w-[40%] pt-[5%] text-white flex flex-col justify-between`}>
			<div className="flex flex-row w-[150px]">
				<p className="text-2xl">Hello</p>
				<p className="text-primary-color text-2xl">, I'm</p>
			</div>
			<p className="text-primary-color font-bold text-5xl">{DEVELOPER_FIRST_NAME + ' ' + DEVELOPER_LAST_NAME}</p>
			<p className="text-2xl">Full Stack Developer</p>
			<p className="text-gray-400">{SUMMARY}</p>
			<button className="w-[110px] h-[50px] bg-primary-color rounded-lg hover:bg-primary-color/80">Let's Talk</button>
			<div className="flex flex-row w-full h-[5%] gap-5">
				{ContactIcons.map((item) => (
					<a key={item.url} href={item.url} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
						<img className="bg-primary-color rounded-3xl transform transition-transform duration-300 hover:-translate-y-1 hover:scale-110"
							src={item.icon} alt="GitHub" width="30px" height="30px" />
					</a>
				))}
			</div>
		</div>
	);
};

export default DeveloperIntroduction;
