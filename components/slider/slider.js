'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function getColorByRarity(rarity) {
	switch (rarity) {
		case 'Legendary':
			return 'bg-yellow-600';
		case 'Rare':
			return 'bg-indigo-500';
		case 'Common':
			return 'bg-emerald-600';
		case 'Epic':
			return 'bg-violet-600';
		default:
			return 'bg-cyan-500';
	}
}

function CarSlider() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: '20px',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};



	

	
		return (
		<div className='w-full md:w-3/4 m-auto'>
			<div className='mt-10 md:mt-20'>
				<Slider {...settings}>
					{' '}
					{data.map((d, index) => (
						<div
							key={index}
							className='p-2'
						>
							<div className='text-white '>
								<div
									className={`h-44 md:h-56 rounded-t-xl ${getColorByRarity(
										d.rarity
									)} flex justify-center items-center`}
								>
									<img
										src={d.img}
										alt=''
										className=' h-auto w-auto object-contain custom-blur'
									/>
								</div>
								<div className='flex flex-col justify-center items-center gap-3 p-0 bg-white h-56 rounded-b-xl'>
									<p className='text-2xl font-semibold bg-transparent text-neutral-700'>
										{' '}
										{d.name}{' '}
									</p>{' '}
									<p className='text-center bg-transparent text-black text-xl'>
										{' '}
										<span className='bg-transparent text-neutral-600 font-bold'>
											{' '}
											Max speed:{' '}
										</span>{' '}
										{d.speedMax}
									</p>
									<p className='bg-transparent text-black text-xl'>
										{' '}
										<span className='bg-transparent text-neutral-600 font-bold'>
											{' '}
											Acceleration:{' '}
										</span>{' '}
										{d.acceleration}
									</p>
									<p className='bg-transparent text-black text-xl'>
										{' '}
										<span className='bg-transparent text-neutral-600 font-bold'>
											{' '}
											Rarity:{' '}
										</span>{' '}
										{d.rarity}
									</p>
									
								</div>{' '}
							</div>{' '}
						</div>
					))}{' '}
				</Slider>{' '}
			</div>{' '}
		</div>
		);
									}
		

const data = [
	{
		name: 'StarSparrow',
		img: '/wings/starparrow.PNG',
		speedMax: '50',
		acceleration: '1.3',
		rarity: 'Common',
	},
	{
		name: 'StarSparrow2',
		img: '/wings/starparrow2.PNG',
		speedMax: '55',
		acceleration: '1.3',
		rarity: 'Common',
	},
	{
		name: 'Breeze',
		img: '/wings/breeze.PNG',
		speedMax: '50',
		acceleration: '1.7',
		rarity: 'Common',
	},
	{
		name: 'Galaxy',
		img: '/wings/galaxy.PNG',
		speedMax: '55',
		acceleration: '1.5',
		rarity: 'Common',
	},
	{
		name: 'Crimson',
		img: '/wings/crimson.PNG',
		speedMax: '55',
		acceleration: '1.6',
		rarity: 'Rare',
	},
	{
		name: 'EcoDust',
		img: '/wings/ecodust.png',
		speedMax: '60',
		acceleration: '1.5',
		rarity: 'Rare',
	},
	{
		name: 'Destructor',
		img: '/wings/destructor.png',
		speedMax: '65',
		acceleration: '2',
		rarity: 'Epic',
	},
	{
		name: 'Argentum',
		img: '/wings/argentum.PNG',
		speedMax: '70',
		acceleration: '1.5',
		rarity: 'Epic',
	},
	{
		name: 'Luminaris',
		img: '/wings/luminaris.PNG',
		speedMax: '65',
		acceleration: '2.5',
		rarity: 'Legendary',
	},
	{
		name: 'xWing',
		img: '/wings/xwing.png',
		speedMax: '80',
		acceleration: '1.5',
		rarity: 'Legendary',
	},
];

export default CarSlider;
