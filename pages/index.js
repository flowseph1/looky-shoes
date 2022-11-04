import Head from 'next/head';
import Header from '../components/header/Header';
import Content from '../components/home/Content';
import SneakersList from '../components/home/SneakersList';

export default function Home({ data }) {
    return (
        <div className="min-h-[100vh] bg-zinc-900">
            <Head>
                <title>Lucky Shoes</title>
            </Head>

            <Header />
            <main className="w-[70em] mx-auto p-10 flex justify-center items-center">
                <SneakersList data={data} />
            </main>
        </div>
    );
}

export async function getServerSideProps() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPI_KEY,
            'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPI_HOST,
        },
    };

    const data = (await fetch('https://shoes-collections.p.rapidapi.com/shoes', options)).json();

    return {
        props: {
            data: await data,
        },
    };
}
