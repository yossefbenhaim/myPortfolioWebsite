
import CustomTextField from "common/customTextField/customTextField"
import Footer from "./footer/footer";


const Contact = () => {


	return (
		<div className="s w-full h-full">
			<div className='  px-[10%] w-full h-[90vh] flex flex-col gap-5 items-center pt-[5%] pb-[2%] '>
				<div className="flex flex-col justify-center items-center w-[60%] h-[15%] ">
					<div className="flex flex-row gap-2">
						<p className="text-white animate-slide-in-down">Get in </p>
						<p className="text-primary-color animate-slide-in-down delay-500">Touch</p>
					</div>
					<div>
						<p className="text-white text-2xl font-semibold animate-slide-in-down delay-1000">Recent Project</p>
					</div>
				</div>
				<form className=" flex flex-col w-full justify-between items-center animate-slide-in-down ">
					<div className="w-[60%] h-[85%] flex flex-col justify-between items-center">
						<div className="  p-3 gap-2 h-[20%] w-full flex flex-row justify-between items-center">
							<CustomTextField name="text" />
							<CustomTextField name="tetx" />
						</div>
						<div className=" p-3 w-full h-[80%] flex flex-col">
							<CustomTextField name="text" isTextarea={true} />
						</div>
					</div>
					<div>
						<button className="w-full h-[50px] px-2 text-white bg-primary-color text-base rounded-lg hover:bg-primary-color/80">
							Send Message
						</button>
					</div>
				</form>
			</div>
			<Footer />
		</div>
	)
}

export default Contact
