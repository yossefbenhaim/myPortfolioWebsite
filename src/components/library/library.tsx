import { Outlet } from 'react-router-dom';

import Navbar from '../navbar/navbar';
import UseFetchData from '../hooks/useFetchData';

const Library = () => {

	const { data, loading, error } = UseFetchData({ url: 'https://zenquotes.io/api/random' });

	console.log(data);

	return (
		<div className=" h-[100vh] ">
			<Navbar />
			<div className='  h-[90%] overflow-y-auto overflow-x-hidden scrollbar  scrollbar-w-1.5  scrollbar-h-1  scrollbar-thumb-primary-color scrollbar-thumb-rounded-xl mr-1'>
				<Outlet />
			</div>
		</div>
	)
}

export default Library