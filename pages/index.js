import Head from 'next/head';
import Hero from '../components/hero/Index';
import Header from '../components/header/Header';
import Content from '../components/home/Content';
import SneakersList from '../components/home/SneakersList';
import Filters from '../components/ui/Filters';
import { data } from '../data/data';
import Promociones from '../components/home/promociones/Promociones';
import Subtitle from '../components/ui/Subtitle';
import Container from '../components/Contianer';
import FiltroMarcas from '../components/home/filtroMarcas/FiltroMarcas';
import NewHero from '../components/hero/NewHero';
import Section from '../components/section/Section';

export default function Home() {
    const { sneakers } = data;

    return (
        <div className="min-h-[100vh]">
            <Head>
                <title>Lucky Shoes</title>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1" />
            </Head>

            <Header />
            <main className="bg-page-gradient">
                <Container className="">
                    <NewHero />
                    <FiltroMarcas />
                    {/* <Section /> */}
                    <Promociones />
                    {/* <Filters /> */}
                    <SneakersList data={sneakers} />
                </Container>
            </main>
            {/* <Hero /> */}
        </div>
    );
}

/* export async function getServerSideProps() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPI_KEY,
            'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPI_HOST,
        },
    };

    const data = await fetch('../data/data.js');
    console.log(data);

    return {
        props: {
            data:  data,
        },
    };
} */
