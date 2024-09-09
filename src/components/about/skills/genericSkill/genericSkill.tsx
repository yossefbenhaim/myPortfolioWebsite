import { Skill } from '../skills';

interface Props {
	skill: Skill;
}

const GenericSkill = ({ skill }: Props) => {
	return (
		<div className=' rounded-full w-[70px] h-[70px] sm:w-[90px] flex flex-col justify-center items-center gap-1 p-1 group'>
			{/* Image with hover effect */}
			<img
				className='w-[20px] sm:w-[40px] transition-transform duration-300 group-hover:scale-110'
				src={skill.src}
				alt={skill.name}
			/>
			{/* Name hidden by default, shown on hover */}
			<h3 className='text-white font-medium text-[8px] sm:text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
				{skill.name}
			</h3>
		</div>
	);
};

export default GenericSkill;
