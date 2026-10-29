import styles from './styles.module.css'
import { Banner, Carousel, CarouselItem, CarouselItemContent, Header, Section, Loading } from '../../components'
import type { Work } from '../../types/Work'

const data: Work[] = Array.from({ length: 8 }, (_, i) => ({
	id: String(i),
	name: 'Name',
	imgSrc: 'https://picsum.photos/200/300'
}))

export const Home = () => {

	return (
		<div className={styles.container}>
			<Header />
			<Carousel controls autoPlay>
				{data.map(item => (
					<CarouselItem key={item.id}>
						<CarouselItemContent data={item} />
					</CarouselItem>
				))}
			</Carousel>
			<div className={styles.contentArea}>
				<Banner imgSrc='https://picsum.photos/200/300' href='#' alt='Advertisement' />
				<Section title='New releases' data={data} />
				<Section title='Most popular' data={data} />
				<Section title='Romance' data={data} />
				<Loading />
			</div>
		</div>
	)
}
