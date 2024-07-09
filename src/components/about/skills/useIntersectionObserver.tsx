import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (options: IntersectionObserverInit) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			setIsVisible(entry.isIntersecting);
		}, options);

		if (containerRef.current) {
			observer.observe(containerRef.current);
		}

		return () => {
			if (containerRef.current) {
				observer.unobserve(containerRef.current);
			}
		};
	}, [options]);

	return [containerRef, isVisible] as const;
};

export default useIntersectionObserver;
