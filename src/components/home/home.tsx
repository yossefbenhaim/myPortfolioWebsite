import { PathName } from 'models/enums/pathName';
import DeveloperIntroduction from '../../common/developerIntroduction/developerIntroduction';
import DeveloperImage from '../../common/developerImage/developerImage';
import React from 'react';

const BUTTON_TEXT = `Let's Talk`
const DOCUMENTATION_TEXT = `With 3 years of expertise in designing, developing, and maintaining web applications. Skilled in diverse technologies and problem-solving. A dedicated team player passionate about innovation, efficiency, and continuous learning.`;
const DOCUMENTATION_TITLE = 'Full Stack Developer at IDF'
const OPENING_SENTENCE_1 = 'Hello'
const OPENING_SENTENCE_2 = `I'm`

const Home: React.FC = () => {
	return (
		<div className="pt-12 px-[10%] h-full w-full flex flex-col gap-5 sm:flex-row  justify-between items-start">
			<DeveloperIntroduction
				section={PathName.HOME}
				pathName={PathName.CONTACT}
				buttonText={BUTTON_TEXT}
				documentationText={DOCUMENTATION_TEXT}
				documentationTitle={DOCUMENTATION_TITLE}
				openingSentence1={OPENING_SENTENCE_1}
				openingSentence2={OPENING_SENTENCE_2}
			/>
			<DeveloperImage />
		</div>
	);
};

export default Home;
