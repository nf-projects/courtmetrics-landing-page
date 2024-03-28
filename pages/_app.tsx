import "../styles/globals.css";
import type {AppProps} from "next/app";
import {Inter} from "@next/font/google";
import {Analytics} from "@vercel/analytics/react";
import {useLocalStorage} from "../utils/useLocalStorage";
import {useEffect} from "react";
import {useRouter} from "next/router";

const inter = Inter({subsets: ["latin"]});

export default function App({Component, pageProps}: AppProps) {
    // handle referral code from url
    const [referralCode, setReferralCode] = useLocalStorage<string | null>("referral-code", null);
    const router = useRouter();
    useEffect(() => {
        const {code} = router.query;

        if (code) {
            setReferralCode(code as string);
        }
    }, [router.query]);

    return (
        <>
            <main className={inter.className}>
                <Component {...pageProps} />
                <Analytics/>
            </main>
        </>
    );
}
