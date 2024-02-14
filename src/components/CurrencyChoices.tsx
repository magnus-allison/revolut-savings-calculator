'use client';
import { type FC } from 'react';
import useStore from '@/utils/store';
import { cn } from '@/utils/cn';

export type CurrencyChar = '£' | '$' | '€';
export type Currency = 'USD' | 'EUR' | 'GBP';
const currencyOption: Currency[] = ['USD', 'EUR', 'GBP'];

const CurrencyChoices: FC = () => {
	const { currency, setCurrency } = useStore();
	return (
		<div className='mt-4 flex flex-row gap-4'>
			{currencyOption.map((option) => (
				<button
					onClick={() => setCurrency(option)}
					key={option}
					type='button'
					className={cn(
						'text-white focus:outline-none border px-5 py-2.5 rounded-md border-gray-700 transition duration-300 hover:border-sky-500',
						currency === option && 'bg-gray-900 border-gray-400'
					)}
				>
					<div className='flex flex-row align-middle'>
						{option === 'USD' && <USDIcon />}
						{option === 'EUR' && <EURIcon />}
						{option === 'GBP' && <GBPIcon />}
						{option}
					</div>
				</button>
			))}
		</div>
	);
};

const USDIcon = () => (
	<svg fill='none' aria-hidden='true' className='h-4 w-4 me-2' viewBox='0 0 20 15'>
		<rect width='19.6' height='14' y='.5' fill='#fff' rx='2' />
		<mask
			id='a'
			style={{ maskType: 'luminance' }}
			width='20'
			height='15'
			x='0'
			y='0'
			maskUnits='userSpaceOnUse'
		>
			<rect width='19.6' height='14' y='.5' fill='#fff' rx='2' />
		</mask>
		<g mask='url(#a)'>
			<path
				fill='#D02F44'
				fillRule='evenodd'
				d='M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z'
				clipRule='evenodd'
			/>
			<path fill='#46467F' d='M0 .5h8.4v6.533H0z' />
			<g filter='url(#filter0_d_343_121520)'>
				<path
					fill='url(#paint0_linear_343_121520)'
					fillRule='evenodd'
					d='M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z'
					clipRule='evenodd'
				/>
			</g>
		</g>
		<defs>
			<linearGradient
				id='paint0_linear_343_121520'
				x1='.933'
				x2='.933'
				y1='1.433'
				y2='6.1'
				gradientUnits='userSpaceOnUse'
			>
				<stop stopColor='#fff' />
				<stop offset='1' stopColor='#F0F0F0' />
			</linearGradient>
			<filter
				id='filter0_d_343_121520'
				width='6.533'
				height='5.667'
				x='.933'
				y='1.433'
				colorInterpolationFilters='sRGB'
				filterUnits='userSpaceOnUse'
			>
				<feFlood floodOpacity='0' result='BackgroundImageFix' />
				<feColorMatrix
					in='SourceAlpha'
					result='hardAlpha'
					values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
				/>
				<feOffset dy='1' />
				<feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0' />
				<feBlend in2='BackgroundImageFix' result='effect1_dropShadow_343_121520' />
				<feBlend in='SourceGraphic' in2='effect1_dropShadow_343_121520' result='shape' />
			</filter>
		</defs>
	</svg>
);

const EURIcon = () => (
	<svg fill='none' aria-hidden='true' className='h-4 w-4 me-2' viewBox='0 0 20 15'>
		<rect width='19.6' height='14' y='.5' fill='#fff' rx='2' />
		<mask
			id='a'
			style={{ maskType: 'luminance' }}
			width='20'
			height='15'
			x='0'
			y='0'
			maskUnits='userSpaceOnUse'
		>
			<rect width='19.6' height='14' y='.5' fill='#fff' rx='2' />
		</mask>
		<g mask='url(#a)'>
			<path fill='#043CAE' d='M0 .5h19.6v14H0z' />
			<path
				fill='#FFD429'
				fillRule='evenodd'
				d='M9.14 3.493L9.8 3.3l.66.193-.193-.66.193-.66-.66.194-.66-.194.193.66-.193.66zm0 9.334l.66-.194.66.194-.193-.66.193-.66-.66.193-.66-.193.193.66-.193.66zm5.327-4.86l-.66.193L14 7.5l-.193-.66.66.193.66-.193-.194.66.194.66-.66-.193zm-9.994.193l.66-.193.66.193L5.6 7.5l.193-.66-.66.193-.66-.193.194.66-.194.66zm9.369-2.527l-.66.194.193-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.194zm-8.743 4.86l.66-.193.66.193-.194-.66.194-.66-.66.194-.66-.194.193.66-.193.66zm7.034-6.568l-.66.193.194-.66-.194-.66.66.194.66-.193-.193.66.193.66-.66-.194zm-5.326 8.276l.66-.193.66.193-.194-.66.194-.66-.66.194-.66-.193.193.66-.193.66zM13.84 10.3l-.66.193.194-.66-.194-.66.66.194.66-.194-.193.66.193.66-.66-.193zM5.1 5.827l.66-.194.66.194-.194-.66.194-.66-.66.193-.66-.193.193.66-.193.66zm7.034 6.181l-.66.193.194-.66-.194-.66.66.194.66-.193-.193.66.193.66-.66-.194zm-5.326-7.89l.66-.193.66.193-.194-.66.194-.66-.66.194-.66-.193.193.66-.193.66z'
				clipRule='evenodd'
			/>
		</g>
	</svg>
);

const GBPIcon = () => (
	<svg fill='none' aria-hidden='true' className='h-4 w-4 me-2' viewBox='0 0 20 15'>
		<rect width='19.6' height='14' y='.5' fill='#fff' rx='2' />
		<mask
			id='a'
			style={{ maskType: 'luminance' }}
			width='20'
			height='15'
			x='0'
			y='0'
			maskUnits='userSpaceOnUse'
		>
			<rect width='19.6' height='14' y='.5' fill='#fff' rx='2' />
		</mask>
		<g mask='url(#a)'>
			<path fill='#0A17A7' d='M0 .5h19.6v14H0z' />
			<path
				fill='#fff'
				fillRule='evenodd'
				d='M-.898-.842L7.467 4.8V-.433h4.666V4.8l8.365-5.642L21.542.706l-6.614 4.46H19.6v4.667h-4.672l6.614 4.46-1.044 1.549-8.365-5.642v5.233H7.467V10.2l-8.365 5.642-1.044-1.548 6.614-4.46H0V5.166h4.672L-1.942.706-.898-.842z'
				clipRule='evenodd'
			/>
			<path
				stroke='#DB1F35'
				strokeLinecap='round'
				strokeWidth='.667'
				d='M13.068 4.933L21.933-.9M14.009 10.088l7.948 5.357M5.604 4.917L-2.686-.67M6.503 10.024l-9.19 6.093'
			/>
			<path
				fill='#E6273E'
				fillRule='evenodd'
				d='M0 8.9h8.4v5.6h2.8V8.9h8.4V6.1h-8.4V.5H8.4v5.6H0v2.8z'
				clipRule='evenodd'
			/>
		</g>
	</svg>
);

export default CurrencyChoices;
