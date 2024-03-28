import {SVGProps} from "react";

const navigation = {
    main: [
        {name: "Contact", href: "https://courtmetrics.net/contact"},
        {name: "Pricing", href: "https://courtmetrics.net/pricing"},
        {name: "Discord Invite", href: "https://courtmetrics.net/discord"},
        {name: "Terms of Service", href: "https://courtmetrics.net/terms"},
        {name: "Privacy", href: "https://courtmetrics.net/privacy"},
    ],
   
};

export default function Footer() {
    return (
        <footer className="bg-white">
            <div
                className="mx-auto max-w-7xl overflow-hidden px-6 py-10 sm:py-12 lg:px-8">
                {/* <nav
                    className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
                    aria-label="Footer">
                    {navigation.main.map((item) => (
                        <div key={item.name} className="pb-6">
                            <a href={item.href}
                               className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                {item.name}
                            </a>
                        </div>
                    ))}
                </nav> */}
                
                <p className="mt-10 text-center text-xs leading-5 text-gray-500">
                    &copy; {new Date().getFullYear()} CourtMetrics. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
}