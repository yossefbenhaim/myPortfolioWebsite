import React, { useState } from 'react';
import { DEVELOPER_FIRST_NAME, DEVELOPER_LAST_NAME } from 'common/developerIntroduction/developerIntroduction';
import { NavbarOptions } from 'models/enums/toolbarOptions';
import { PathName } from 'models/enums/pathName';

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

interface Props {
	scrollToSection: (id: string) => void;
	activeSection: string;
}

const Navbar = ({ scrollToSection, activeSection }: Props) => {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!isMobileMenuOpen);
	};

	const navigationPage = (path: string) => {
		scrollToSection(path);
		setMobileMenuOpen(false); // Close the menu after navigating on mobile
	};

	return (
		<div className='z-50 sticky top-0 pl-5 pr-[10%] w-full h-[70px] bg-[#15152a]/20 items-end flex flex-row justify-between backdrop-blur-lg'>
			<div className='flex flex-row gap-2 h-full justify-center items-center w-[30%]'>
				<p className='text-white/90 font-semibold'>{DEVELOPER_FIRST_NAME}</p>
				<p className='text-primary-color font-semibold'>{DEVELOPER_LAST_NAME}</p>
			</div>
			<div className='w-[80%] flex justify-end items-center'>
				{/* Hamburger Menu Icon */}
				<div className='lg:hidden'>
					<button onClick={toggleMobileMenu} className='text-white/80'>
						{isMobileMenuOpen ? (
							<svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						) : (
							<svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h16m-7 6h7'
								/>
							</svg>
						)}
					</button>
				</div>

				{/* Mobile Menu */}
				<div
					className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-transform transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
						}`}
				>
					<ul className='flex flex-col items-center justify-center h-[250px] gap-8 bg-black/40 '>
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

				{/* Desktop Menu */}
				<div className='hidden lg:block'>
					<ul className='flex flex-row gap-[6%] items-center'>
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
