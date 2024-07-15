import Home from "./home/home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PathName } from "models/enums/pathName"
import About from "./about/about"
import Projects from "./projects/projects"
import Contact from "./contact/contact"
import Library from "./library/library"

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={'/'} element={<Library />}>
					<Route index element={<Home />} />
					<Route path={PathName.ABOUT} element={<About />} />
					<Route path={PathName.PROJECTS} element={<Projects />} />
					<Route path={PathName.CONTACT} element={<Contact />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
