import { DEVELOPER_FIRST_NAME, DEVELOPER_LAST_NAME } from "common/developerIntroduction/developerIntroduction"
import { useNavigate, useLocation } from 'react-router-dom';
import { NavbarOptions } from "models/enums/toolbarOptions"
import { PathName } from "models/enums/pathName";

interface Navbar {
	item: string,
	path: string,
}

const NavbarPathOptions: Navbar[] = [
	{ item: NavbarOptions.HOME, path: PathName.HOME },
	{ item: NavbarOptions.ABOUT, path: PathName.ABOUT },
	{ item: NavbarOptions.PROJECTS, path: PathName.PROJECTS },
	{ item: NavbarOptions.CONTACT, path: PathName.CONTACT },
]

const Navbar = () => {
	const navigation = useNavigate();
	const currentPath = useLocation();

	const navigationPage = (path: string) => {
		navigation(path);
	}

	return (
		<div className='z-50 sticky top-0 px-[10%] w-full h-[10%] bg-[#15152a]/20 items-end flex flex-row justify-between  backdrop-blur-lg'>
			<div className='flex flex-row gap-2 w-[30%]'>
				<p className='text-white/90 font-semibold'>{DEVELOPER_FIRST_NAME}</p>
				<p className='text-primary-color font-semibold'>{DEVELOPER_LAST_NAME}</p>
			</div>
			<div className='w-[80%]'>
				<ul className=" justify-end flex flex-row gap-[6%] items-center">
					{
						Object.values(NavbarPathOptions).map((option) => (
							<li key={option.item}>
								<a
									onClick={() => navigationPage(option.path)}
									className={`${currentPath.pathname === option.path ? 'text-primary-color' : 'text-white/80'} text-base font-medium tracking-widest  relative group`}>
									{option.item}
									<div className={`${currentPath.pathname === option.path ? 'bg-primary-color' : 'bg-white/80 group-hover:scale-x-100 scale-x-0 transition-transform'} absolute w-full h-0.5 `} />
								</a>
							</li>
						))
					}
				</ul>
			</div>
		</div>
	)
}

export default Navbar