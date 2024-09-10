import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import { setIsContactWithMe } from 'redux/slice/isContactWithMe';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch } from 'react-redux';
import { PathName } from 'models/enums/pathName';
import { useRef } from 'react';

import ContactSchema, { ContactFormKeys, ContactFormType } from './contactFormSchema';
import CustomTextField from 'common/customTextField/customTextField';
import emailjs from '@emailjs/browser';
import GenericButton from 'common/genericButton/genericButton';


const SENS_MESSAGE = 'Send Message'

const ContactForm = () => {
	const form = useRef<HTMLFormElement>(null);
	const dispatch = useDispatch();

	const methods = useForm<ContactFormType>({
		defaultValues: {
			email: '',
			message: '',
			name: ''
		},
		resolver: zodResolver(ContactSchema)
	});

	const SERVICE_ID = process.env['VITE_SERVICE_ID'] as string
	const YOUR_TEMPLATE_ID = process.env['VITE_YOUR_TEMPLATE_ID'] as string
	const PUBLIC_KEY = process.env['VITE_PUBLIC_KEY'] as string

	const { handleSubmit } = methods;

	const onSubmit: SubmitHandler<ContactFormType> = () => {
		if (form.current) {
			emailjs.sendForm(SERVICE_ID, YOUR_TEMPLATE_ID, form.current, PUBLIC_KEY)
				.then(
					(res) => {
						if (res.text === 'OK') {
							dispatch(setIsContactWithMe(true))
						}
					},
					(error) => {
						console.error('FAILED...', error.text);
					}
				);
		}
	};

	return (
		<FormProvider {...methods}>
			<form
				ref={form}
				onSubmit={handleSubmit(onSubmit)}
				className="py-3 flex flex-col  sm:w-full 2xl:w-[60%]  h-[85%]  items-center animate-slide-in-down"
			>
				<div className="w-full h-full flex flex-col justify-between items-center">
					<div className="p-3 gap-4 sm:h-[50%] w-full flex sm:flex-row flex-col justify-between items-center">
						<CustomTextField name={ContactFormKeys.NAME} />
						<CustomTextField name={ContactFormKeys.EMAIL} />
					</div>
					<div className="p-3 w-full h-[80%] flex flex-col">
						<CustomTextField name={ContactFormKeys.MESSAGE} isTextarea={true} />
					</div>
				</div>
				<div className='h-[30%] flex flex-col justify-center items-center'>
					<GenericButton pathNavigate={PathName.CONTACT} name={SENS_MESSAGE} />
				</div>
			</form>
		</FormProvider>
	);
};

export default ContactForm;
