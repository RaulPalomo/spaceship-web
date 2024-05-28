// pages/index.tsx
'use client';
import Image from 'next/image';
import React from 'react';
import Navbar from '../components/navbar/navbar';
import GT from '../assets/gt.jpg';
import GC from '../assets/granCanyon.png';
import CarSlider from '../components/slider/slider';
import { CardBody, CardContainer, CardItem } from '../components/ui/3d-card';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { TracingBeam } from '../components/ui/tracing-beam';

export default function Home() {
	/**
	 * useState: guarda variable (ranking en este caso) para poder usarse en cualquier sitio del componente/web.
	 * Para guardarla, llamar a setRanking. Para usarla llamar/usar, a ranking.
	 */
	const [ranking, setRanking] = useState([]);

	useEffect(() => {
		const fetchRanking = async () => {
			if (!window || window.localStorage.getItem('user') === null) {
				setRanking(undefined);
				return;
			}
			try {
				const response = await fetch('http://localhost:3000/ranking');
				if (!response.ok) {
					throw new Error(`Error: ${response.statusText}`);
				}
				const data = await response.json();
				setRanking(data);
				//console.log("RESPUESTA SERVIDOR", data)
			} catch (err) {
				setError(err.message);
			}
		};

		fetchRanking();
	}, []);

	return (
		<>
			<div className='w-auto h-auto bg-black'>
				<Navbar />
				<Image
					src={GT}
					alt='mobile'
					className='h-1/3'
				/>
				<section
					className='mt-64 md:mx-20'
					id='about-go'
				>
					<div className='flex justify-center items-center flex-col md:flex-row gap-3'>
						<div className=' w-3/4 md:w-1/2 md:mr-8'>
							<h3 className=' text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-cyan-200 to-cyan-900 text-center md:text-left'>
								{' '}
								About{' '}
							</h3>{' '}
							<p className='text-lg text-white text-center md:text-left'>
							Skyline Legends es un emocionante juego de carreras de naves espaciales diseñado para aquellos que buscan velocidad y adrenalina. En este universo futurista, los jugadores pueden escoger entre una variedad de naves, cada una con diferentes niveles de rareza y habilidades únicas. Compite en diversos mapas como ciudades futuristas o vuela por dentro de cañones rocosos, y demuestra que eres el mejor piloto del cosmos.{' '}
							</p>{' '}
						</div>{' '}
						<div className=' w-3/4 lg:w-2/4'>
							<Image
								src={GT}
								alt='mobile'
								class='aboutImg'
								className='rounded-lg'
							/>
						</div>{' '}
					</div>{' '}
				</section>{' '}
				<section
					className=' mt-64'
					id='ships-go'
				>
					<h2 className='text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-cyan-200 to-cyan-900 text-center'>
						{' '}
						SHIPS{' '}
					</h2>{' '}
					<CarSlider />
				</section>{' '}
				<section
					className='mt-64'
					id='maps-go'
				>
					<h2 className='text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-cyan-200 to-cyan-900 text-center'>
						{' '}
						MAPS{' '}
					</h2>{' '}
					<div className='flex justify-center flex-col lg:flex-row'>
						<CardContainer className='inter-var lg:mr-8'>
							<CardBody className='bg-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-cyan-700/[0.4] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  '>
								<CardItem
									translateZ='50'
									className='text-xl font-bold text-cyan-600 dark:text-white'
								>
									El Gran Canyon{' '}
								</CardItem>{' '}
								<CardItem
									as='p'
									translateZ='60'
									className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
								>
									Un mapa de carreras corto y divertido que te
									llevará a través de grandes caminos de un
									majestuoso cañón.{' '}
								</CardItem>{' '}
								<CardItem
									translateZ='100'
									className='w-full mt-4'
								>
									<Image
										src={GC}
										height='1000'
										width='1000'
										className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
										alt='thumbnail'
									/>
								</CardItem>{' '}
								<div className='flex justify-between items-center mt-20'>
									<CardItem
										translateZ={20}
										as={Link}
										href='https://twitter.com/mannupaaji'
										target='__blank'
										className='px-4 py-2 rounded-xl text-xs font-normal text-cyan-600'
									>
										Ranking→{' '}
									</CardItem>{' '}
									<CardItem
										translateZ={20}
										as='button'
										className='px-4 py-2 rounded-xl bg-cyan-300 dark:bg-black dark:text-black text-black text-xs font-bold'
									>
										Read More{' '}
									</CardItem>{' '}
								</div>{' '}
							</CardBody>{' '}
						</CardContainer>{' '}
						<CardContainer className='inter-var'>
							<CardBody className='bg-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-cyan-700/[0.4] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  '>
								<CardItem
									translateZ='50'
									className='text-xl font-bold text-cyan-600 dark:text-white'
								>
									City{' '}
								</CardItem>{' '}
								<CardItem
									as='p'
									translateZ='60'
									className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
								>
									Un mapa futurista donde deberás mostrar tus mejores habilidades de pilotaje para sobrevolar la ciudad futurista {' '}
								</CardItem>{' '}
								<CardItem
									translateZ='100'
									className='w-full mt-4'
								>
									<Image
										src={GT}
										height='1000'
										width='1000'
										className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
										alt='thumbnail'
									/>
								</CardItem>{' '}
								<div className='flex justify-between items-center mt-20'>
									<CardItem
										translateZ={20}
										as={Link}
										href='https://twitter.com/mannupaaji'
										target='__blank'
										className='px-4 py-2 rounded-xl text-xs font-normal text-cyan-600 dark:text-white'
									>
										Ranking→{' '}
									</CardItem>{' '}
									<CardItem
										translateZ={20}
										as='button'
										className='px-4 py-2 rounded-xl bg-cyan-300 dark:bg-black dark:text-black text-black text-xs font-bold'
									>
										Read More{' '}
									</CardItem>{' '}
								</div>{' '}
							</CardBody>{' '}
						</CardContainer>{' '}
					</div>{' '}
				</section>{' '}

				<section className='text-white mx-4 md:mx-12 lg:mx-24 xl:mx-44' id='ranking-go'>
					<h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-cyan-200 to-cyan-900 text-center mt-16 md:mt-24 mb-10 md:mb-20'>
						RANKING
					</h2>
					<div className='overflow-x-auto'>
						<table className='min-w-full divide-y divide-cyan-200'>
							<thead className='bg-black'>
								<tr>
									<th scope='col' className='px-2 py-3 md:px-6 md:py-3 text-left text-xs font-bold text-gray-300 uppercase tracking-wider'>
										Nombre del Jugador
									</th>
									<th scope='col' className='px-2 py-3 md:px-6 md:py-3 text-left text-xs font-bold text-gray-300 uppercase tracking-wider'>
										Nombre de la Nave
									</th>
									<th scope='col' className='px-2 py-3 md:px-6 md:py-3 text-left text-xs font-bold text-gray-300 uppercase tracking-wider'>
										Mapa
									</th>
									<th scope='col' className='px-2 py-3 md:px-6 md:py-3 text-left text-xs font-bold text-gray-300 uppercase tracking-wider'>
										Tiempo
									</th>
								</tr>
							</thead>
							<tbody className='bg-black divide-y divide-gray-700'>
								{ranking !== undefined && ranking.length > 0 ? (
									ranking.map((item, index) => (
										<tr key={index}>
											<td className='px-2 py-4 md:px-6 whitespace-nowrap text-sm text-gray-300'>
												{item.nombre_jugador}
											</td>
											<td className='px-2 py-4 md:px-6 whitespace-nowrap text-sm text-gray-300'>
												{item.nombre_nave}
											</td>
											<td className='px-2 py-4 md:px-6 whitespace-nowrap text-sm text-gray-300'>
												{item.mapa}
											</td>
											<td className='px-2 py-4 md:px-6 whitespace-nowrap text-sm text-gray-300'>
												{item.tiempo}
											</td>
										</tr>
									))
								) : (
									<tr>
										<td colSpan={4} className='px-2 py-4 md:px-6 whitespace-nowrap text-sm text-gray-300 text-center'>
											No hay datos disponibles
										</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>
				</section>

				{/* <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
                                                                                                                                                                                                                                                                              </div> */}{' '}
			</div>{' '}
		</>
	);
}
