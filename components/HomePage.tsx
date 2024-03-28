/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
	ArrowPathIcon,
	ChevronRightIcon,
	CloudArrowUpIcon,
	Cog6ToothIcon,
	FingerPrintIcon,
	LockClosedIcon,
	ServerIcon,
} from "@heroicons/react/20/solid";
import "video.js/dist/video-js.css";
import videojs from "video.js";

const features = [
	{
		name: "Push to deploy.",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
		icon: CloudArrowUpIcon,
	},
	{
		name: "SSL certificates.",
		description:
			"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
		icon: LockClosedIcon,
	},
	{
		name: "Simple queues.",
		description:
			"Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.",
		icon: ArrowPathIcon,
	},
	{
		name: "Advanced security.",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
		icon: FingerPrintIcon,
	},
	{
		name: "Powerful API.",
		description:
			"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
		icon: Cog6ToothIcon,
	},
	{
		name: "Database backups.",
		description:
			"Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ",
		icon: ServerIcon,
	},
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export default function HomePage() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	// for the video component
	useEffect(() => {
		// Make sure Video.js player is only initialized once
		const player = videojs(
			// @ts-ignore
			document.querySelector("#my-video"),
			{},
			function onPlayerReady() {
				// @ts-ignore
				console.log("onPlayerReady", this);
			}
		);

		// Dispose the Video.js player when the component unmounts
		return () => {
			player.dispose();
		};
	}, []);

	return (
		<div className="bg-white">
			<main>
				{/* Hero section */}
				<div className="relative isolate pt-14">
					<svg
						className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
						aria-hidden="true"
					>
						<defs>
							<pattern
								id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
								width={200}
								height={200}
								x="50%"
								y={-1}
								patternUnits="userSpaceOnUse"
							>
								<path d="M100 200V.5M.5 .5H200" fill="none" />
							</pattern>
						</defs>
						<svg x="50%" y={-1} className="overflow-visible fill-gray-50">
							<path
								d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
								strokeWidth={0}
							/>
						</svg>
						<rect
							width="100%"
							height="100%"
							strokeWidth={0}
							fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
						/>
					</svg>
					<div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
						<div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
							<div className="flex">
								<div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
									<span className="font-semibold text-indigo-600">
										We’re hiring
									</span>
									<span
										className="h-4 w-px bg-gray-900/10"
										aria-hidden="true"
									/>
									<a href="#" className="flex items-center gap-x-1">
										<span className="absolute inset-0" aria-hidden="true" />
										See open positions
										<ChevronRightIcon
											className="-mr-2 h-5 w-5 text-gray-400"
											aria-hidden="true"
										/>
									</a>
								</div>
							</div>
							<h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
								A better way to ship your projects
							</h1>
							<p className="mt-6 text-lg leading-8 text-gray-600">
								Esse id magna consectetur fugiat non dolor in ad laboris magna
								laborum ea consequat. Nisi irure aliquip nisi adipisicing veniam
								voluptate id. In veniam incididunt ex veniam adipisicing sit.
							</p>
							<div className="mt-10 flex items-center gap-x-6">
								<a
									href="#"
									className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Get started
								</a>
								<a
									href="#"
									className="text-sm font-semibold leading-6 text-gray-900"
								>
									Learn more <span aria-hidden="true">→</span>
								</a>
							</div>
						</div>
						<div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
							<svg
								viewBox="0 0 366 729"
								role="img"
								className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl"
							>
								<title>App screenshot</title>
								<defs>
									<clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
										<rect width={316} height={684} rx={36} />
									</clipPath>
								</defs>
								<path
									fill="#4B5563"
									d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
								/>
								<path
									fill="#343E4E"
									d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
								/>
								<foreignObject
									width={316}
									height={684}
									transform="translate(24 24)"
									clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
								>
									<img
										src="https://tailwindui.com/img/component-images/mobile-app-screenshot.png"
										alt=""
									/>
								</foreignObject>
							</svg>
						</div>
					</div>
				</div>

				{/* Feature + video section */}
				<div className="bg-white">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto max-w-2xl sm:text-center py-12 lg:py-16">
							{" "}
							{/* Reduced vertical padding */}
							<h2 className="text-base font-semibold leading-7 text-indigo-600">
								Everything you need
							</h2>
							<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
								No server? No problem.
							</p>
							<p className="mt-6 text-lg leading-8 text-gray-600">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Maiores impedit perferendis suscipit eaque, iste dolor
								cupiditate blanditiis.
							</p>
						</div>
					</div>
					<div className="relative overflow-hidden">
						{/* Video Section */}
						<div className="flex justify-center items-center my-4 lg:my-8">
							{" "}
							{/* Reduced margin */}
							<video
								id="my-video"
								className="video-js vjs-big-play-centered"
								controls
								preload="auto"
								width="960"
								height="540"
								data-setup="{}"
							>
								<source src="/output_video.mp4" type="video/mp4" />
							</video>
						</div>
					</div>
					<div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
						<dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16 py-12 lg:py-16">
							{" "}
							{/* Adjusted vertical padding */}
							{features.map((feature) => (
								<div key={feature.name} className="relative pl-9">
									<dt className="inline font-semibold text-gray-900">
										<feature.icon
											className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
											aria-hidden="true"
										/>
										{feature.name}
									</dt>{" "}
									<dd className="mt-2">{feature.description}</dd>
								</div>
							))}
						</dl>
					</div>
				</div>

				{/* Newsletter section */}
				<div className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
					<div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
						<h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
							Get notified when we’re launching.
						</h2>
						<p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
							CourtMetrics.net is currently under development. 
						</p>
						<form className="mx-auto mt-10 flex max-w-md gap-x-4">
							<label htmlFor="email-address" className="sr-only">
								Email address
							</label>
							<input
								id="email-address"
								name="email"
								type="email"
								autoComplete="email"
								required
								className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
								placeholder="Enter your email"
							/>
							<button
								type="submit"
								className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
							>
								Notify me
							</button>
						</form>
						<svg
							viewBox="0 0 1024 1024"
							className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
							aria-hidden="true"
						>
							<circle
								cx={512}
								cy={512}
								r={512}
								fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
								fillOpacity="0.7"
							/>
							<defs>
								<radialGradient
									id="759c1415-0410-454c-8f7c-9a820de03641"
									cx={0}
									cy={0}
									r={1}
									gradientUnits="userSpaceOnUse"
									gradientTransform="translate(512 512) rotate(90) scale(512)"
								>
									<stop stopColor="#7775D6" />
									<stop offset={1} stopColor="#E935C1" stopOpacity={0} />
								</radialGradient>
							</defs>
						</svg>
					</div>
				</div>
			</main>
		</div>
	);
}
