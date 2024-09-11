import { PathName } from 'models/enums/pathName';
import DeveloperIntroduction from '../../common/developerIntroduction/developerIntroduction';
import DeveloperImage from '../../common/developerImage/developerImage';
import React from 'react';

const BUTTON_TEXT = `Let's Talk`
const DOCUMENTATION_TEXT = `Experienced Full Stack Developer proficient in front-end and back-end technologies, adept in web development.`;
const DOCUMENTATION_TITLE = 'Full Stack Developer'
const OPENING_SENTENCE_1 = 'Hello'
const OPENING_SENTENCE_2 = `I'm`

const Home: React.FC = () => {
	return (
		<div className="pt-12 px-[10%] h-full w-full flex flex-col gap-5 sm:flex-row  justify-between items-start">
			<DeveloperIntroduction
				pathName={PathName.HOME}
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
