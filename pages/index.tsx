
import Head from "next/head";
import Layout from "../components/Layout";
import HomePage from "../components/HomePage";

export default function Home() {
    return (
        <>
            <Head>
            <title>CourtMetrics - Take your court to the next level.</title>
            </Head>
            <Layout>
                <HomePage/>
            </Layout>
        </>
    );
}