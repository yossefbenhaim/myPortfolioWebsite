



import { useRef, useEffect } from 'react';
import Lottie, { AnimationItem } from 'lottie-web';


const ThankYouAnimation = () => {

	const animationRef = useRef<AnimationItem | undefined>();
	const container = useRef<HTMLDivElement>(null);

	useEffect(() => {
		animationRef.current = Lottie.loadAnimation({
			container: container.current!,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			path: '/src/assets/lottie/thankYouAnimation.json',
		});
		return () =>
			animationRef.current && animationRef.current.destroy();
	}, []);

	return (
		<div className='w-[400px] h-[400px] flex flex-col justify-center items-center ' ref={container} />
	);
};

export default ThankYouAnimation
