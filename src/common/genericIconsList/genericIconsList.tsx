import { IconOptions } from 'models/interfaces/iconOptions';
import React from 'react';

interface Props {
	contactIcons: IconOptions[];
}

const GenericIconsList = ({ contactIcons }: Props) => {
	return (
		<>
			{contactIcons.map((item) => (
				<div key={item.icon} className="relative group">
					<a
						href={item.disable ? '#' : item.url}
						target={item.disable ? '' : "_blank"}
						rel={item.disable ? '' : "noopener noreferrer"}
						aria-label="Icon Link"
						className={`inline-block ${item.disable ? 'pointer-events-none cursor-not-allowed' : ''}`}
					>
						<img
							className="p-[2px] bg-primary-color rounded-3xl transform transition-transform duration-300 hover:-translate-y-1 hover:scale-110"
							src={item.icon}
							alt="Icon"
						/>
						{item.disable && (
							<span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max p-2 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								Soon
							</span>
						)}
					</a>
					<p>{item.disable}</p>
				</div>
			))}
		</>
	);
}

export default GenericIconsList;
