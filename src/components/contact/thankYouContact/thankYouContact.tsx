import React from 'react'
import Heder from '../header/heder'
import ThankYouAnimation from '../thankYouAnimation/thankYouAnimation'

const THANK = 'Thank'
const YOU = 'You'
const TO_CONTACT_WITH_ME = 'To Contact With Me'



const ThankYouContact = () => {
	return (
		<div className='w-full h-[100vh] flex flex-col justify-start pt-[4%] items-center'>
			<Heder title={TO_CONTACT_WITH_ME} openingSentence1={THANK} openingSentence2={YOU} />
			<ThankYouAnimation />
		</div>
	)
}

export default ThankYouContact