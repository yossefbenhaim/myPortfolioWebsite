import { useDispatch } from "react-redux";
import { setActiveSection } from "redux/slice/activeSection";

interface Props {
	name: string
	pathNavigate: string
}

const GenericButton = ({ name, pathNavigate }: Props) => {
	const dispatch = useDispatch();

	const navigationPage = (path: string) => {
		console.log(path);

		dispatch(setActiveSection({ activeSection: path }))
	}

	return (
		<button onClick={() => navigationPage(pathNavigate)} className=" py-[12px] px-[20px]  text-white/90 bg-primary-color text-base rounded-lg hover:bg-primary-color/80">
			{name}
		</button>)
}

export default GenericButton