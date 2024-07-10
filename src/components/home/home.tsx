import React from 'react';
import DeveloperIntroduction from './developerIntroduction/developerIntroduction';
import DeveloperImage from '../../common/developerImage/developerImage';

const BUTTON_TEXT = `Let's Talk`
const DOCUMENTATION_TEXT = 'ugiub bi bvuvi  bviu v hv ijvu vj j bkuvi jk vkj '
const DOCUMENTATION_TITLE = 'Full Stack Developer'
const OPENING_SENTENCE_1 = 'Hello'
const OPENING_SENTENCE_2 = `I'm`

const Home: React.FC = () => {

	return (
		<div className=" pt-12 px-[10%] h-full w-full flex flex-row justify-between items-start">
			<DeveloperIntroduction
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
