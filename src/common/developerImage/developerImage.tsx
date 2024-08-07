import useIntersectionObserver from 'components/about/skills/useIntersectionObserver';
import developer from '../../assets/images/developer.png';


const DeveloperImage = () => {
	const [containerRef, isVisible] = useIntersectionObserver({
		threshold: 0.1
	});
	return (
		<div ref={containerRef} className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'} w-[40%] min-w-[300px] flex flex-col justify-center items-center h-[80%]`}>
			<img
				style={{ borderRadius: '72% 28% 72% 28% / 53% 52% 48% 47%' }}
				className="w-[350px] bg-red-400"
				src={developer}
				alt="Developer"
			/>
		</div>
	);
};

export default DeveloperImage;
