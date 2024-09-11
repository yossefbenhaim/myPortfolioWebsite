import React, { useState } from 'react';
import { DEVELOPER_FIRST_NAME, DEVELOPER_LAST_NAME } from 'common/developerIntroduction/developerIntroduction';
import { NavbarOptions } from 'models/enums/toolbarOptions';
import { PathName } from 'models/enums/pathName';
import { useDispatch } from 'react-redux';
import { setActiveSection } from 'redux/slice/activeSection';
import { useAppSelector } from 'redux/store';

interface Navbar {
	item: string;
	path: string;
}

const NavbarPathOptions: Navbar[] = [
	{ item: NavbarOptions.HOME, path: PathName.HOME },
	{ item: NavbarOptions.ABOUT, path: PathName.ABOUT },
	{ item: NavbarOptions.PROJECTS, path: PathName.PROJECTS },
	{ item: NavbarOptions.CONTACT, path: PathName.CONTACT },
];


const Navbar = () => {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
	const dispatch = useDispatch();
	const activeSection = useAppSelector((state) => state.activeSection.activeSection)


	const toggleMobileMenu = () => {
		setMobileMenuOpen(!isMobileMenuOpen);
	};

	const navigationPage = (path: string) => {
		const section = document.getElementById(path);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
		dispatch(setActiveSection({ activeSection: path }));
		setMobileMenuOpen(false);
	};


	return (
		<div className='z-50 sticky top-0  pr-[10%]  h-[70px] bg-[#15152a]/20 items-end flex flex-row justify-between backdrop-blur-lg'>
			<div className='flex flex-row gap-2 h-full justify-end items-center w-[250px]'>
				<p className='text-white/90 font-semibold'>{DEVELOPER_FIRST_NAME}</p>
				<p className='text-primary-color font-semibold'>{DEVELOPER_LAST_NAME}</p>
			</div>
			<div className='w-[80%] flex justify-end items-center  h-full'>
				<div className='lg:hidden  h-full flex flex-col justify-center items-center'>
					<button onClick={toggleMobileMenu} className='text-white/80 z-50'>
						{!isMobileMenuOpen && (
							<svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
							</svg>
						)}
					</button>
				</div>
				<div
					className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 ${isMobileMenuOpen ? '' : 'hidden'
						}`}
				>
					<div className='relative w-full h-full'>
						<button
							onClick={toggleMobileMenu}
							className='absolute top-4 right-4 text-white/80 mr-5  p-2 rounded-full z-50'
						>
							<svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
							</svg>
						</button>
						<ul className='flex flex-col items-center justify-center h-[250px] gap-8 absolute w-full bg-black/40'>
							{NavbarPathOptions.map((option) => (
								<li key={option.item}>
									<a
										onClick={() => navigationPage(option.path)}
										className={`${activeSection === option.path ? 'text-primary-color' : 'text-white/80'
											} text-xl tracking-widest font-bold`}
									>
										{option.item}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className=' hidden lg:block  w-[50%]'>
					<ul className=' flex flex-row justify-center gap-[10%] items-center'>
						{NavbarPathOptions.map((option) => (
							<li key={option.item}>
								<a
									onClick={() => navigationPage(option.path)}
									className={`${activeSection === option.path
										? 'text-primary-color'
										: 'text-white/80'
										} text-base font-medium tracking-widest relative group`}
								>
									{option.item}
									<div
										className={`${activeSection === option.path
											? 'bg-primary-color'
											: 'bg-white/80 group-hover:scale-x-100 scale-x-0 transition-transform'
											} absolute w-full h-0.5`}
									/>
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
