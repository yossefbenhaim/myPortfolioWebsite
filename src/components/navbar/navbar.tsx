import { DEVELOPER_FIRST_NAME, DEVELOPER_LAST_NAME } from "components/home/developerIntroduction/developerIntroduction"
import { PathName } from "models/enums/pathName";
import { NavbarOptions } from "models/enums/toolbarOptions"

import { useNavigate, Outlet, useLocation } from 'react-router-dom';


interface Navbar {
	item: string,
	path: string,
}

const NavbarPathOptions: Navbar[] = [
	{ item: NavbarOptions.HOME, path: PathName.HOME },
	{ item: NavbarOptions.ABOUT, path: PathName.ABOUT },
	{ item: NavbarOptions.SERVICES, path: PathName.SERVICES },
	{ item: NavbarOptions.PROJECTS, path: PathName.PROJECTS },
	{ item: NavbarOptions.CONTACT, path: PathName.CONTACT },
]

const Navlbar = () => {
	const navigation = useNavigate();
	const currentPath = useLocation();

	const navigationPage = (path: string) => {
		console.log(currentPath.pathname, 'ppp', path);
		navigation(path);
	}

	return (
		<div className="px-[10%] h-[100vh] ">
			<div className='h-[10%]  items-end flex flex-row justify-between  backdrop-blur-lg'>
				<div className='flex flex-row gap-2 w-[30%]'>
					<p className='text-white font-semibold'>{DEVELOPER_FIRST_NAME}</p>
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
			<Outlet />
		</div >
	)
}

export default Navlbar