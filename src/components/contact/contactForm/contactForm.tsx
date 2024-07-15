import { zodResolver } from '@hookform/resolvers/zod';
import CustomTextField from 'common/customTextField/customTextField';
import React, { useRef } from 'react';
import { FormProvider, useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import ContactSchema, { ContactFormKeys, ContactFormType } from './contactFormSchema';
import emailjs from '@emailjs/browser';
import { useDispatch } from 'react-redux';
import { setIsContactWithMe } from 'redux/slice/isContactWithMe';
import GenericButton from 'common/genericButton/genericButton';
import { PathName } from 'models/enums/pathName';


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
			<form ref={form} onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-[60%] h-[85%] justify-between items-center animate-slide-in-down">
				<div className="w-full h-full flex flex-col justify-between items-center">
					<div className="p-3 gap-2 h-[20%] w-full flex flex-row justify-between items-center">
						<CustomTextField name={ContactFormKeys.NAME} />
						<CustomTextField name={ContactFormKeys.EMAIL} />
					</div>
					<div className="p-3 w-full h-[80%] flex flex-col">
						<CustomTextField name={ContactFormKeys.MESSAGE} isTextarea={true} />
					</div>
				</div>
				<div>
					<GenericButton pathNavigate={PathName.CONTACT} name={SENS_MESSAGE} />
				</div>
			</form>
		</FormProvider>
	);
};

export default ContactForm;
