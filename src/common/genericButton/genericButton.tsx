import { useNavigate } from "react-router-dom";

interface Props {
	name: string
	pathNavigate: string
}

const GenericButton = ({ name, pathNavigate }: Props) => {
	const navigation = useNavigate();

	const navigationPage = (path: string) => {
		navigation(path)
	}

	return (
		<button onClick={() => navigationPage(pathNavigate)} className=" py-[12px] px-[20px]  text-white/90 bg-primary-color text-base rounded-lg hover:bg-primary-color/80">
			{name}
		</button>)
}

export default GenericButton