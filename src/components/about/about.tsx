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
		<div className=" sm:flex-col justify-between h-[50%] gap-8 w-full px-[10%] flex-row ">
			<div className=' pt-2 gap-10 flex flex-col w-full  sm:flex-row sm:h-[40%] justify-between text-5xl '>
				<div className="sm:block hidden">
					<DeveloperImage />
				</div>
				<div className="h-[50%]">
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
		</div>
	)
}

export default About