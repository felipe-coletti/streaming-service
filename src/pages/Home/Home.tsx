import { useState } from 'react'
import styles from './styles.module.css'
import { Banner, Carousel, CarouselItem, CarouselItemContent, Header, Section, Loading } from '../../components'
import type { Work } from '../../types/Work'

export const Home = () => {
	const [data, setData] = useState<Work[]>([
		{
			id: '0',
			name: 'Name',
			imgSrc: 'https://picsum.photos/200/300'
		},
		{
			id: '1',
			name: 'Name',
			imgSrc: 'https://picsum.photos/200/300'
		},
		{
			id: '2',
			name: 'Name',
			imgSrc: 'https://picsum.photos/200/300'
		},
		{
			id: '3',
			name: 'Name',
			imgSrc: 'https://picsum.photos/200/300'
		},
		{
			id: '4',
			name: 'Name',
			imgSrc: 'https://picsum.photos/200/300'
		},
		{
			id: '5',
			name: 'Name',
			imgSrc: 'https://picsum.photos/200/300'
		},
		{
			id: '6',
			name: 'Name',
			imgSrc: 'https://picsum.photos/200/300'
		},
		{
			id: '7',
			name: 'Name',
			imgSrc: 'https://picsum.photos/200/300'
		}
	])

	return (
		<div className={styles.container}>
			<Header />
			<Carousel controls autoPlay>
				{data.map((item, i) => (
					<CarouselItem key={i}>
						<CarouselItemContent data={item} />
					</CarouselItem>
				))}
			</Carousel>
			<div className={styles.contentArea}>
				<Banner imgSrc='https://picsum.photos/200/300' href='' alt='Ad' />
				<Section title='New releases' data={data} />
				<Section title='Most popular' data={data} />
				<Section title='Romance' data={data} />
				<Loading />
			</div>
		</div>
	)
}
