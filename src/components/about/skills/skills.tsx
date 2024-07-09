import DeveloperIntroduction from 'components/home/developerIntroduction/developerIntroduction';
import GenericSkill from './genericSkill/genericSkill';
import useIntersectionObserver from './useIntersectionObserver'; // adjust the path

const SKILLS = [
	'HTML & CSS',
	'TypeScript',
	'React',
	'Node.JS',
	'Git',
	'Docker',
];

const OPENING_SENTENCE_1 = 'Favorites';
const OPENING_SENTENCE_2 = `Skills`;
const DOCUMENTATION_TITLE = 'My Skills';
const DOCUMENTATION_TEXT = 'them into the className, youll need to use Tailwinds utility classes along with comp';
const BUTTON_TEXT = `See Projects`;

const Skills = () => {
	const [containerRef, isVisible] = useIntersectionObserver({
		threshold: 0.1
	});

	return (
		<div className="items-start h-[50%] w-full flex flex-row justify-between">
			<div className='h-[70%] items-start flex flex-row justify-start'>
				<DeveloperIntroduction
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
						: ''
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
