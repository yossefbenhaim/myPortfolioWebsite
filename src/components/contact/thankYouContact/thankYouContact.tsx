import Heder from '../header/heder'

import test from '../../../assets/lottie/thankYouAnimation.json'
import Lottie from 'lottie-react'
const THANK = 'Thank'
const YOU = 'You'
const TO_CONTACT_WITH_ME = 'To Contact With Me'

const ThankYouContact = () => {
	return (
		<div className='w-full h-[100vh] flex flex-col justify-start pt-[4%] items-center'>
			<Heder title={TO_CONTACT_WITH_ME} openingSentence1={THANK} openingSentence2={YOU} />
			<div className='w-[400px] h-[400px] flex flex-col justify-center items-center '>
				<Lottie loop animationData={test} />
			</div>
		</div>
	)
}

export default ThankYouContact