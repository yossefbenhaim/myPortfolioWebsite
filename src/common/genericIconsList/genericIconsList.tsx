import { IconOptions } from 'models/interfaces/iconOptions'

interface Props {
	contactIcons: IconOptions[]
}

const GenericIconsList = ({ contactIcons }: Props) => {
	return (
		<div className="flex flex-row w-full h-[5%] gap-5">
			{contactIcons.map((item) => (
				<a key={item.icon} href={item.url} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
					<img className="p-[2px] bg-primary-color rounded-3xl transform transition-transform duration-300 hover:-translate-y-1 hover:scale-110"
						src={item.icon} alt="GitHub" />
				</a>
			))}
		</div>)
}

export default GenericIconsList