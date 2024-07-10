import DeveloperImage from "common/developerImage/developerImage"
import DeveloperIntroduction from "components/home/developerIntroduction/developerIntroduction"
import Skills from "./skills/skills"

const BUTTON_TEXT = `Contact me`
const DOCUMENTATION_TEXT = 'To convert the provided CSS styles into Tailwind CSS classes and incorporate them into the className, youll need to use Tailwinds utility classes along with some custom classes for the more comp'
const DOCUMENTATION_TITLE = 'About me'
const OPENING_SENTENCE_1 = 'My'
const OPENING_SENTENCE_2 = `intro`


const About = () => {
	return (
		<div className="h-[1250px] px-[10%]">
			<div className='flex flex-row w-full h-[50%] justify-between text-5xl'>
				<DeveloperImage />
				<DeveloperIntroduction
					buttonText={BUTTON_TEXT}
					documentationText={DOCUMENTATION_TEXT}
					documentationTitle={DOCUMENTATION_TITLE}
					openingSentence1={OPENING_SENTENCE_1}
					openingSentence2={OPENING_SENTENCE_2}
				/>
			</div>
			<Skills />
		</div>
	)
}

export default About