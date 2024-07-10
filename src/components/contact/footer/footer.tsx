import { IconOptions } from 'models/interfaces/iconOptions';

import useIntersectionObserver from 'components/about/skills/useIntersectionObserver';
import linkedin from '../../../assets/icons/linkedin.svg';
import git from '../../../assets/icons/git.svg';
import GenericIconsList from 'common/genericIconsList/genericIconsList';

const Footer = () => {

	const [containerRef, isVisible] = useIntersectionObserver({
		threshold: 0.1
	});
	const contactIcons: IconOptions[] = [
		{ icon: git, url: 'https://github.com/yossefbenhaim' },
		{ icon: linkedin, url: 'https://www.linkedin.com/in/yossef-ben-haim/' },
	];

	return (
		<div className="bg-black/60 w-full h-[35%]">
			<div ref={containerRef} className={`${isVisible ? 'animate-slide-in-down-footer' : ''} text-white  h-full  flex flex-row justify-between items-center px-[10%]`}>
				<div className="flex flex-col gap-2 justify-center items-start  w-[35%]">
					<div className="text-xl font-semibold flex flex-row gap-2">
						<p>Yossef</p>
						<p className="text-primary-color">Ben Haim</p>
					</div>
					<p className="text-sm">Full Stack Developer</p>
				</div>
				<div className=" flex flex-row items-center justify-center gap-4 w-[20%]">
					{
						<GenericIconsList contactIcons={contactIcons} />
					}
				</div>
				<div className=" text-sm flex flex-row justify-center items-center w-[35%]">
					@ some text footer noinio ibiohoi
				</div>
			</div>
		</div>)
}

export default Footer