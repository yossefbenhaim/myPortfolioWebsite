import { zodResolver } from '@hookform/resolvers/zod';
import CustomTextField from 'common/customTextField/customTextField';
import React, { useRef } from 'react';
import { FormProvider, useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import ContactSchema, { ContactFormKeys, ContactFormType } from './contactFormSchema';
import emailjs from '@emailjs/browser';
import { useDispatch } from 'react-redux';
import { setIsContactWithMe } from 'redux/slice/isContactWithMe';
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

	const SERVICE_ID = 'service_n9ms175'
	const YOUR_TEMPLATE_ID = 'template_f283kxi'
	const PUBLIC_KEY = 'yXAO5AahI2l_OQJrd'

	const { handleSubmit } = methods;

	const onSubmit: SubmitHandler<ContactFormType> = (data) => {
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
					<GenericButton name={SENS_MESSAGE} />
				</div>
			</form>
		</FormProvider>
	);
};

export default ContactForm;
