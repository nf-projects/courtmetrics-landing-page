
import Head from "next/head";
import Layout from "../components/Layout";
import HomePage from "../components/HomePage";

export default function Home() {
    return (
        <>
            <Head>
                <title>MCMetrics - Tools and Metrics to Grow Your Minecraft
                    Server</title>
            </Head>
            <Layout>
                <HomePage/>
            </Layout>
        </>
    );
}