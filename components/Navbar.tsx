import {Fragment, useEffect, useState} from "react";
import {Dialog, Disclosure, Popover, Transition} from "@headlessui/react";
import {
    ArrowPathRoundedSquareIcon,
    ArrowUpRightIcon,
    Bars3Icon,
    ChartPieIcon,
    CircleStackIcon,
    CurrencyDollarIcon,
    HomeIcon,
    RocketLaunchIcon,
    UserGroupIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import {ChevronDownIcon} from "@heroicons/react/20/solid";
import {useRouter} from "next/router";
import Link from "next/link";
import Image from "next/image";
import {useLocalStorage} from "../utils/useLocalStorage";

const features = [
    {
        name: "Dashboard",
        description: "One place to access all of your data and growth tools.",
        href: "https://docs.courtmetrics.net/dashboard",
        icon: HomeIcon
    },
    {
        name: "User Activity",
        description: "Key metrics to analyze user activity.",
        href: "https://docs.courtmetrics.net/activity",
        icon: UserGroupIcon
    },
    {
        name: "User Acquisition",
        description: "Data to analyze new user joins.",
        href: "https://docs.courtmetrics.net/acquisition",
        icon: ArrowUpRightIcon
    },
    {
        name: "User Retention",
        description: "Analytics on how long users stay engaged.",
        href: "https://docs.courtmetrics.net/retention",
        icon: ArrowPathRoundedSquareIcon
    },
    {
        name: "User Sessions",
        description: "Data to analyze session count, length, and distribution.",
        href: "https://docs.courtmetrics.net/sessions",
        icon: ChartPieIcon
    },
    {
        name: "Revenue",
        description: "Various KPIs to determine revenue and user spending.",
        href: "https://docs.courtmetrics.net/revenue",
        icon: CurrencyDollarIcon
    },
    {
        name: "Ad Campaigns",
        description: "Automatically track data and ROI by subdomains.",
        href: "https://docs.courtmetrics.net/campaigns",
        icon: RocketLaunchIcon
    },
    {
        name: "Experiments",
        description: "Powerful A/B testing tool to improve metric performance.",
        href: "https://docs.courtmetrics.net/experiments",
        icon: CircleStackIcon
    },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
    useRouter();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const [referralCode, setReferralCode] = useLocalStorage<string | null>("referral-code", null);
    const [signUpLink, setSignUpLink] = useState<string>("https://dashboard.courtmetrics.net/auth/signup");

    useEffect(() => {
        if (referralCode) {
            setSignUpLink(`https://dashboard.courtmetrics.net/auth/signup?code=${referralCode}`);
        }
    }, [referralCode]);

    return (
        <header className="bg-white">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                aria-label="Global">
                <div className="flex lg:flex-1">
                    <div className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <Link href="/">
                            <Image className="h-8 w-auto"
                                // onClick={() => router.push("/")}
                                   src="/textlogo.png"
                                   width={1000}
                                   height={300}
                                   alt=""/>
                        </Link>
                    </div>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-7">
                
                    <Link href="/pricing"
                          className="text-sm font-semibold leading-6 text-gray-900">
                        Pricing
                    </Link>
                    <Link href="/about"
                          className="text-sm font-semibold leading-6 text-gray-900">
                        About Us
                    </Link>
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <div className="space-x-4">
                        <a href="/"
                           target="_blank"
                           rel="noreferrer"
                           className="text-sm font-semibold leading-6 text-gray-900">
                            Log in
                        </a>
                        {/* <a
                            href={signUpLink}
                            rel="noreferrer"
                            target="_blank"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm bg-gradient-to-r from-emerald-400 to-cyan-400"
                        >
                            Get started
                        </a> */}
                    </div>

                </div>
            </nav>
            {/*for smaller screens*/}
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen}
                    onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10"/>
                <Dialog.Panel
                    // @ts-ignore
                    focus="true"
                    className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
                >
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <Image className="h-8 w-auto"
                                // onClick={() => router.push("/")}
                                   src="/textlogo.png"
                                   width={1000}
                                   height={300}
                                   alt=""/>
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link
                                    href="/pricing"
                                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Pricing
                                </Link>
                                <a
                                    href="/about"
                                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    About Us
                                </a>
                            </div>
                           
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}
