import DeveloperIntroduction from 'common/developerIntroduction/developerIntroduction';
import GenericSkill from './genericSkill/genericSkill';
import useIntersectionObserver from './useIntersectionObserver'; // adjust the path
import { PathName } from 'models/enums/pathName';

const SKILLS = [
	'HTML & CSS',
	'TypeScript',
	'React',
	'Node.JS',
	'Docker',
	'Git',
];

const OPENING_SENTENCE_1 = 'Favorites';
const OPENING_SENTENCE_2 = `Skills`;
const DOCUMENTATION_TITLE = 'My Skills';
const DOCUMENTATION_TEXT = `See fully what skills i have and perform, to develop the project for you`;
const BUTTON_TEXT = `See Projects`;

const Skills = () => {
	const [containerRef, isVisible] = useIntersectionObserver({
		threshold: 0.1
	});

	return (
		<div className="items-start h-[50%] w-full flex flex-row justify-between ">
			<div className='h-[70%] w-full items-start flex flex-row justify-start'>
				<DeveloperIntroduction
					pathName={PathName.PROJECTS}
					buttonText={BUTTON_TEXT}
					documentationText={DOCUMENTATION_TEXT}
					documentationTitle={DOCUMENTATION_TITLE}
					openingSentence1={OPENING_SENTENCE_1}
					openingSentence2={OPENING_SENTENCE_2}
				/>
			</div>
			<div
				className={`w-[40%] h-[80%] items-start flex flex-col justify-start pt-[4%] 
					${isVisible
						?
						'animate-slide-in-left'
						: 'opacity-0'
					}`}
				ref={containerRef}
			>
				<div className='grid gap-4 items-center h h-[40%] w-full'>
					{SKILLS.map((skill, index) => (
						<GenericSkill
							key={index}
							nameSkill={skill}
							number={(index + 1) / 10}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Skills;
