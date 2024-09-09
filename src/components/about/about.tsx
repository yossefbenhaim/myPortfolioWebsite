import { PathName } from "models/enums/pathName"

import DeveloperImage from "common/developerImage/developerImage"
import DeveloperIntroduction from "common/developerIntroduction/developerIntroduction"
import Skills from "./skills/skills"


const BUTTON_TEXT = `Contact me`
const DOCUMENTATION_TEXT = 'As a Full Stack Developer at IDF, I led complex projects, developed secure systems using Node.js and Express, integrated Kafka for data processing, and implemented a React application with dynamic geospatial mapping and microservices. I have a Program Engineer from Ashkelon College.'
const DOCUMENTATION_TITLE = 'About me'
const OPENING_SENTENCE_1 = 'My'
const OPENING_SENTENCE_2 = `intro`


const About = () => {
	return (
		<div className=" flex flex-row justify-between h-[50%] px-[10%] ">
			<div className=" sm:flex hidden w-[50%]">
				<DeveloperImage />
			</div>
			<div className="h-full sm:w-[50%] w-full">
				<DeveloperIntroduction
					pathName={PathName.CONTACT}
					buttonText={BUTTON_TEXT}
					documentationText={DOCUMENTATION_TEXT}
					documentationTitle={DOCUMENTATION_TITLE}
					openingSentence1={OPENING_SENTENCE_1}
					openingSentence2={OPENING_SENTENCE_2}
				/>
			</div>
		</div>
	)
}

export default About