
import GenericSkill from './genericSkill/genericSkill';
import useIntersectionObserver from './useIntersectionObserver';

import html from '../../../assets/icons/html.svg'
import css from '../../../assets/icons/css.svg'
import typeScript from '../../../assets/icons/typeScript.svg'
import react from '../../../assets/icons/react.svg'
import gitIcon from '../../../assets/icons/gitIcon.svg'
import redux from '../../../assets/icons/redux.svg'
import openlayers from '../../../assets/icons/openlayers.svg'
import nodeJs from '../../../assets/icons/nodeJs.svg'
import graphql from '../../../assets/icons/graphql.svg'
import sequelize from '../../../assets/icons/sequelize.svg'
import RESTful_APIs from '../../../assets/icons/RESTful_APIs.svg'
import microServices from '../../../assets/icons/microservices.svg'
import postgreSQL from '../../../assets/icons/postgresql.svg'
import jotai from '../../../assets/icons/jotai.svg'
import viteJs from '../../../assets/icons/viteJs.svg'
import mui from '../../../assets/icons/mui.svg'
import trpc from '../../../assets/icons/trpc.svg'
import recharts from '../../../assets/icons/recharts.svg'
import postgraphile from '../../../assets/icons/postgraphile.svg'
import webSocket from '../../../assets/icons/webSocket.svg'
import mongoDB from '../../../assets/icons/mongodb.svg'
import docker from '../../../assets/icons/docker.svg'

export interface Skill {
	name: string,
	src: string,
}

const SKILLS: Skill[] = [
	{ name: 'HTML ', src: html },
	{ name: 'CSS', src: css },
	{ name: 'TypeScript', src: typeScript },
	{ name: 'React', src: react },
	{ name: 'Redux', src: redux },
	{ name: 'Jotai', src: jotai },
	{ name: 'Vite', src: viteJs },

	{ name: 'Mui', src: mui },
	{ name: 'OpenLayers', src: openlayers },
	{ name: 'Recharts', src: recharts },

	{ name: 'Node.JS', src: nodeJs },
	{ name: 'tRPC', src: trpc },
	{ name: 'Web Socket', src: webSocket },
	{ name: 'Sequelize  ', src: sequelize },

	{ name: 'MongoDB', src: mongoDB },
	{ name: 'PostgreSQL ', src: postgreSQL },
	{ name: 'GraphQL', src: graphql },
	{ name: 'Postgraphile', src: postgraphile },

	{ name: 'RESTful APIs', src: RESTful_APIs },
	{ name: 'Micro Services', src: microServices },


	{ name: 'Git', src: gitIcon },
	{ name: 'Docker', src: docker },

];

const Skills = () => {
	const [containerRef, isVisible] = useIntersectionObserver({
		threshold: 0.1
	});

	return (
		<div className="  h-[50%]  w-full px-8 flex flex-col  justify-center items-center ">
			<div className="flex flex-col justify-center items-center w-full h-[10%]">
				<div className="flex flex-row gap-2 animate-slide-in-down ">
					<p className="text-white/90 text-2xl font-semibold">My</p>
					<p className="text-primary-color text-2xl font-semibold">Skills</p>
				</div>
			</div>
			<div className=' animate-slide-in-left w-full h-[10%] flex flex-col justify-center items-center '
				ref={containerRef}
			>

				<div className=' grid  sm:grid-cols-[100px_100px_100px_100px_100px_100px_100px_100px_100px_100px_100px] grid-cols-[70px_70px_70px_70px_70px_70px] grid-rows-[70px_70px_70px_70px]  sm:gap-y-8 sm:gap-x-8  '>
					{SKILLS.map((skill, index) => (
						<GenericSkill
							key={index}
							skill={skill}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Skills;
