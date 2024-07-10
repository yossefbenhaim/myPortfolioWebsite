
interface Props {
	name: string
}

const GenericButton = ({ name }: Props) => {
	return (
		<button className=" py-[12px] px-[20px]  text-white/90 bg-primary-color text-base rounded-lg hover:bg-primary-color/80">
			{name}
		</button>)
}

export default GenericButton