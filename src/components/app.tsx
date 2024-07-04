import Navlbar from "./navbar/navbar"
import Home from "./home/home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PathName } from "models/enums/pathName"
import About from "./abput/about"
import Services from "./services/services"
import Projects from "./projects/projects"
import Contact from "./contact/contact"

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={'/'} element={<Navlbar />}>
					<Route path={PathName.HOME} element={<Home />} />
					<Route path={PathName.ABOUT} element={<About />} />
					<Route path={PathName.SERVICES} element={<Services />} />
					<Route path={PathName.PROJECTS} element={<Projects />} />
					<Route path={PathName.CONTACT} element={<Contact />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
