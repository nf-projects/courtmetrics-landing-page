import Head from "next/head";
import Layout from "../components/Layout";
import PricingPage from "../components/PricingPage";

export default function Pricing() {
    return (
        <>
            <Head>
                <title>CourtMetrics - Take your court to the next level.</title>
            </Head>
            <Layout>
                <PricingPage/>
            </Layout>
        </>
    );
}