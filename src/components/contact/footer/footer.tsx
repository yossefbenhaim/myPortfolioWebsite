import { IconOptions } from 'models/interfaces/iconOptions';

import useIntersectionObserver from 'components/about/skills/useIntersectionObserver';
import GenericIconsList from 'common/genericIconsList/genericIconsList';
import linkedin from '../../../assets/icons/linkedin.svg';
import git from '../../../assets/icons/git.svg';
import email from '../../../assets/icons/email.svg';
import phone from '../../../assets/icons/phone.svg';


const FOOTER_TEXT = '© 2024 Yossef Ben Haim. All rights reserved.';
const PHONE = '0537402430';
const FIRST_NAME = 'Yossef';
const LAST_NAME = 'Ben Haim';
const EMAIL = 'yossef7875gmail.com'
const contactIcons: IconOptions[] = [
	{ icon: git, url: 'https://github.com/yossefbenhaim' },
	{ icon: linkedin, url: 'https://www.linkedin.com/in/yossef-ben-haim/' },
];

const Footer = () => {
	const [containerRef, isVisible] = useIntersectionObserver({
		threshold: 0.1
	});

	return (
		<div className="bg-black/40 w-full h-[35%]">
			<div ref={containerRef} className={`${isVisible ? 'animate-slide-in-down-footer' : 'opacity-0'} text-white/90 h-full flex flex-row justify-between items-center px-[10%]`}>
				<div className="flex flex-col gap-2 justify-center items-start w-[35%]">
					<div className="sm:text-xl text-sm font-semibold flex flex-row gap-2">
						<p>{FIRST_NAME}</p>
						<p className="text-primary-color">{LAST_NAME}</p>
					</div >
					<div className='w-full grid grid-cols-[30px_30px] grid-rows-2 items-center'>
						<img
							className="p-[2px] w-[20px] h-[20px] "
							src={phone}
							alt="Icon"
						/>
						<p className="sm:text-sm text-xs">{PHONE}</p>
						<img
							className="p-[2px] w-[20px] h-[20px]  "
							src={email}
							alt="Icon"
						/>
						<a className="sm:text-sm text-xs" href={EMAIL}>{EMAIL}</a>
					</div>
				</div>
				<div className="flex flex-row items-center justify-center gap-4 w-[20%]">
					<GenericIconsList contactIcons={contactIcons} />
				</div>
				<div className="sm:text-sm text-xs flex flex-row justify-center items-center w-[35%]">
					{FOOTER_TEXT}
				</div>
			</div>
		</div>
	);
}

export default Footer;
