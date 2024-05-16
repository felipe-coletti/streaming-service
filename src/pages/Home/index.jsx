import { useState } from 'react'
import styles from './styles.module.css'
import Header from '../../components/Header'
import Carousel from '../../components/Carousel'
import CarouselItem from '../../components/CarouselItem'
import CarouselItemContent from '../../components/CarouselItemContent'
import Banner from '../../components/Banner'
import Section from '../../components/Section'
import Loading from '../../components/Loading'

const Home = () => {
    const [data, setData] = useState([
        {
            id: 0,
            name: "Name"
        },
        {
            id: 1,
            name: "Name"
        },
        {
            id: 2,
            name: "Name"
        },
        {
            id: 3,
            name: "Name"
        },
        {
            id: 4,
            name: "Name"
        },
        {
            id: 5,
            name: "Name"
        },
        {
            id: 6,
            name: "Name"
        },
        {
            id: 7,
            name: "Name"
        }
    ])

    return (
        <div className={styles.container}>
            <Header/>
            <Carousel controls>
                {data.map((item, i) => (
                    <CarouselItem key={i}>
                        <CarouselItemContent content={item}/>
                    </CarouselItem>
                ))}
            </Carousel>
            <div className={styles.contentArea}>
                <Banner alt="Ad"/>
                <Section title="New releases" data={data}/>
                <Section title="Most popular" data={data}/>
                <Section title="Romance" data={data}/>
                <Loading/>
            </div>
        </div>
    )
}

export default Home