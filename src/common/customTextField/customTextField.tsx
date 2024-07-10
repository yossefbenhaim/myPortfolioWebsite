import { Controller, useFormContext } from 'react-hook-form';

interface ControlledTextFieldProps {
	name: string;
	isTextarea?: boolean;
}

const CustomTextField = ({ name, isTextarea }: ControlledTextFieldProps) => {
	// const { formState: { errors } } = useFormContext();

	// const errorMessage = errors[name]?.message as string;
	const errorMessage = ''
	return (
		// <Controller
		// 	name={name}
		// 	render={({ field }) => (
		<div className='flex flex-col w-full items-center justify-between'>
			<label className='relative w-full'>
				{isTextarea ? (
					<>
						<textarea
							id={name}
							required
							// {...field}
							// onChange={(e) => field.onChange(e.target.value)}
							className={` w-full min-h-[250px] max-h-[300px] mt-1 block overflow-auto text-white px-4 py-2 text-lg outline-none  bg-black/60  hover:border-white peer`}
						/>
					</>
				) : (
					<>
						<input
							id={name}
							// {...field}
							required
							className={
								` rounded-md h-[60px] w-full mt-1 items-center block overflow-auto text-white px-4 py-2 text-lg outline-none bg-black/60  peer`}
						/>
					</>
				)}
				<span className='absolute left-0 top-[20px] px-1 text-lg text-white/50 duration-300 tracking-wide peer-focus:text-white pointer-events-none peer-focus:text-sm peer-focus:-translate-y-[35px] bg-white/0 rounded-xl ml-2 peer-valid:text-sm peer-valid:-translate-y-[35px]'>
					{name}
				</span>
			</label>
			<div className='flex flex-row justify-start items-start w-full'>
				{errorMessage && <p className='text-red-500 mt-1'>{errorMessage}</p>}
			</div>
		</div>
		// 	)}
		// />

	);
};

export default CustomTextField;
