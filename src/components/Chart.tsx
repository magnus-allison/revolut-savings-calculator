'use client';
import { type FC, useEffect, useRef } from 'react';
import { createChart, ColorType } from 'lightweight-charts';
import { time } from 'console';

export interface DataItem {
	time: string;
	value: number;
}

interface Props {
	data: DataItem[];
}

const Chart: FC<Props> = ({ data }) => {
	const chartContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!chartContainerRef.current || !data) return;

		const handleResize = () => {
			if (!chartContainerRef.current) return;
			chart.applyOptions({ width: chartContainerRef.current.clientWidth });
		};

		const chart = createChart(chartContainerRef.current, {
			layout: {
				background: { type: ColorType.Solid, color: 'transparent' },
				textColor: '#FFFFFF'
			},
			width: chartContainerRef.current.clientWidth,
			height: 300,
			grid: {
				horzLines: { visible: false },
				vertLines: { visible: false }
			},
			handleScroll: {
				mouseWheel: false,
				pressedMouseMove: false,
				horzTouchDrag: false,
				vertTouchDrag: false
			},
			handleScale: {
				axisPressedMouseMove: false,
				mouseWheel: false,
				pinch: false
			}
		});

		chart.timeScale().fitContent();

		const newSeries = chart.addAreaSeries({
			lineColor: '#0ea5e9',
			topColor: '#0ea5e9',
			bottomColor: '#0ea5e922'
		});
		newSeries.setData(data);

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
			chart.remove();
		};
	}, [data]);

	return <div ref={chartContainerRef} className='mt-8' />;
};

export default Chart;
