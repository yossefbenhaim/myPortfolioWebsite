import React from 'react'


interface Props {
	number: number;
	nameSkill: string;
}


const GenericSkill = ({ nameSkill, number }: Props) => {
	return (
		<div className='w-full flex flex-row gap-3'>
			<p className='font-medium  text-primary-color'>{number}.</p>
			<p className='text-white font-medium'>{nameSkill}</p>
		</div>
	)
}

export default GenericSkill;