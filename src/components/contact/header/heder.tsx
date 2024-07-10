
interface Props {
	openingSentence1: string,
	openingSentence2: string,
	title: string,

}

const Heder = ({ title, openingSentence1, openingSentence2 }: Props) => {

	return (
		<div className="flex flex-col justify-center items-center w-[60%] h-[15%] ">
			<div className="flex flex-row gap-2">
				<p className="text-white/90 animate-slide-in-down">{openingSentence1}</p>
				<p className="text-primary-color animate-slide-in-down delay-500">{openingSentence2}</p>
			</div>
			<div>
				<p className="text-white/90 text-2xl font-semibold animate-slide-in-down delay-1000">{title}</p>
			</div>
		</div>
	)
}

export default Heder