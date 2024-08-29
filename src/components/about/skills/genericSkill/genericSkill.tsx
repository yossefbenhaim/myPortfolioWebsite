import { Skill } from '../skills';
import react from '../../../../assets/icons/react.svg';

interface Props {
	skill: Skill;
}

const GenericSkill = ({ skill }: Props) => {
	return (
		<div className='bg-white/40 rounded-lg w-[70px] h-[70px] sm:w-[90px] flex flex-col justify-center items-center gap-1 p-1'>
			<img className='w-[20px] sm:w-[40px]' src={react} alt={skill.name} />
			<h3 className='text-white font-medium text-[8px] sm:text-[10px]'>{skill.name}</h3>
		</div>
	);
};

export default GenericSkill;
