import z from 'zod';

export enum ContactFormKeys {
    NAME = 'name',
    EMAIL = 'email',
    MESSAGE = 'message',
}

const ContactSchema = z.object({
    [ContactFormKeys.NAME]: z
        .string()
        .min(2, { message: 'Name must be at least 2 characters long' })
        .max(20, { message: 'Name must be at most 20 characters long' }),
    [ContactFormKeys.EMAIL]: z
        .string()
        .email({ message: 'Invalid email address' }),
    [ContactFormKeys.MESSAGE]: z
        .string()
        .min(1, { message: 'Message cannot be empty' }),
});

export type ContactFormType = z.infer<typeof ContactSchema>;
export default ContactSchema;
