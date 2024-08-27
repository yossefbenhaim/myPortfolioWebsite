import { Skill } from "../skills";
import react from '../../../../assets/icons/react.svg'
interface Props {
	skill: Skill;
}

const GenericSkill = ({ skill }: Props) => {
	return (
		<div className='bg-white/40 rounded-lg w-[90px] flex flex-col justify-center items-center gap-1 p-1'>
			<img className="w-[40px]" src={react} />
			<h3 className='text-white font-medium text-[10px]'>{skill.name}</h3>
		</div>
	)
}

export default GenericSkill;