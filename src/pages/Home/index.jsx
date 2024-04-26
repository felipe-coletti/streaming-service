import React from "react";
import styles from "./styles.module.css";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import Banner from "../../components/Banner";
import Section from "../../components/Section";
import Loading from "../../components/Loading";

const Home = () => {
    const data = [
        {
            name: "Name"
        },
        {
            name: "Name"
        },
        {
            name: "Name"
        },
        {
            name: "Name"
        },
        {
            name: "Name"
        },
        {
            name: "Name"
        },
        {
            name: "Name"
        },
        {
            name: "Name"
        },
        {
            name: "Name"
        },
        {
            name: "Name"
        },
        {
            name: "Name"
        },
        {
            name: "Name"
        }
    ]

    return(
        <div className={styles.container}>
            <Header/>
            <Carousel data={data}/>
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