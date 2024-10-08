import { PathName } from "models/enums/pathName"

import DeveloperImage from "common/developerImage/developerImage"
import DeveloperIntroduction from "common/developerIntroduction/developerIntroduction"


const BUTTON_TEXT = `Contact me`
const DOCUMENTATION_TEXT = 'Experience designing and maintaining dynamic web applications. Specializing in both front-end and back-end technologies, I create high-performance solutions with a focus on real-time systems, data visualization, and microservices, I specialize in using technologies like Node.js, TypeScript, React, and PostgreSQL to build scalable and efficient applications. These tools enable me to deliver real-time performance, secure data handling, and intuitive user interfaces, ensuring seamless user experiences.'
const DOCUMENTATION_TITLE = 'About me'
const OPENING_SENTENCE_1 = 'My'
const OPENING_SENTENCE_2 = `intro`


const About = () => {
	return (
		<div className=" flex flex-row justify-between  h-full px-[10%] ">
			<div className=" sm:flex hidden w-[50%]">
				<DeveloperImage />
			</div>
			<div className="h-full sm:w-[50%] w-full">
				<DeveloperIntroduction
					section={PathName.ABOUT}
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