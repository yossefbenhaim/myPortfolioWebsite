import Navbar from 'components/navbar/navbar';
import { Outlet } from 'react-router-dom';

const Library = () => {
	return (
		<div className=" h-[100vh] ">
			<Navbar />
			<div className='  h-[80%]'>
				<Outlet />
			</div>
		</div>
	)
}

export default Library