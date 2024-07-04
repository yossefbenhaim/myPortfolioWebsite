import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DeveloperIntroduction from './developerIntroduction/developerIntroduction';
import DeveloperImage from './developerImage/developerImage';

const Home: React.FC = () => {

	return (
		<div className="h-[80%] w-full flex flex-row justify-between items-center">
			<DeveloperIntroduction />
			<DeveloperImage />
		</div>
	);
};

export default Home;
