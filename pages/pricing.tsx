import Head from "next/head";
import Layout from "../components/Layout";
import PricingPage from "../components/PricingPage";

export default function Pricing() {
    return (
        <>
            <Head>
                <title>MCMetrics - Tools and Metrics to Grow Your Minecraft
                    Server</title>
            </Head>
            <Layout>
                <PricingPage/>
            </Layout>
        </>
    );
}