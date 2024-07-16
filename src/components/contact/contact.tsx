import { useAppSelector } from "redux/store";

import Footer from "./footer/footer";
import ContactForm from "./contactForm/contactForm";
import Heder from "./header/heder";
import ThankYouContact from "./thankYouContact/thankYouContact";

const GET_IN = 'Get in'
const TOUCH = 'Touch'
const CONTACT_ME = 'Contact Me'

const Contact = () => {

	const IsContactWithMe = useAppSelector((state) => state.isContactWithMe.isContactWithMe);

	return (
		<div className=" w-full h-full ">
			{IsContactWithMe ? <ThankYouContact />
				:
				<div className='  px-[10%] w-full h-[90vh] flex flex-col gap-5 items-center pt-[5%] pb-[2%] '>
					<Heder title={CONTACT_ME} openingSentence1={GET_IN} openingSentence2={TOUCH} />
					<ContactForm />
				</div>
			}
			<Footer />
		</div>
	)
}

export default Contact
