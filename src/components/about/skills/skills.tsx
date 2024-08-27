import { PathName } from 'models/enums/pathName';

import DeveloperIntroduction from 'common/developerIntroduction/developerIntroduction';
import GenericSkill from './genericSkill/genericSkill';
import useIntersectionObserver from './useIntersectionObserver';


export interface Skill {
	name: string,
	src: string,

}
const SKILLS: Skill[] = [
	{ name: 'HTML & CSS', src: '' },
	{ name: 'TypeScript', src: '' },
	{ name: 'React', src: '' },
	{ name: 'Redux / Jotai', src: '' },
	{ name: 'Vite', src: '' },
	{ name: 'Mui', src: '' },
	{ name: 'OpenLayers', src: '' },
	{ name: 'Recharts', src: '' },

	{ name: 'Node.JS', src: '' },
	{ name: 'tRPC', src: '' },
	{ name: 'Express', src: '' },
	{ name: 'GraphQL', src: '' },
	{ name: 'Postgraphile', src: '' },
	{ name: 'Sequelize  ', src: '' },
	{ name: 'RESTful-APIs', src: '' },
	{ name: 'Docker', src: '' },
	{ name: 'Micro-Services', src: '' },

	{ name: 'PostgreSQL ', src: '' },
	{ name: 'Subscription-ws', src: '' },
	{ name: 'MongoDB', src: '' },

	{ name: 'Git', src: '' },
	{ name: 'Docker', src: '' },

];

const Skills = () => {
	const [containerRef, isVisible] = useIntersectionObserver({
		threshold: 0.1
	});

	return (
		<div className="bg-blue-500 items-start h-[50%] w-full flex flex-col sm:flex-row justify-between ">

			<div
				className={`animate-slide-in-left w-[40%] h-[80%] items-start flex flex-col justify-start pt-[4%] 
					`}
				ref={containerRef}
			>
				<div className='bg-primary-color/20 grid  grid-rows-[100px_100px] sm:grid-cols-[100px_100px_100px_100px_100px_100px_100px_100px_100px_100px_100px] grid-cols-[100px_100px] gap-x-5 gap-y-5'>
					{SKILLS.map((skill, index) => (
						<GenericSkill
							key={index}
							skill={skill}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Skills;
