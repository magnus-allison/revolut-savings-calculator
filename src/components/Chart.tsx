'use client';
import { type FC, useEffect, useRef } from 'react';
import { AreaSeries, ColorType, createChart } from 'lightweight-charts';

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
				textColor: '#cbd5e1',
				attributionLogo: false
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

		const newSeries = chart.addSeries(AreaSeries, {
			lineColor: '#0b6dc8',
			topColor: '#0b6dc8aa',
			bottomColor: '#0b6dc822'
		});
		newSeries.setData(data);
		chart.timeScale().fitContent();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
			chart.remove();
		};
	}, [data]);

	return <div ref={chartContainerRef} className='chart-container' />;
};

export default Chart;
