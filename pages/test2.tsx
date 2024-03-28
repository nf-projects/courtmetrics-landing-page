// pages/match-stats.js

import React from "react";
import Head from "next/head";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from "recharts";
import { AreaChart, Card } from "@tremor/react";
import Image from "next/image";

const performancedata = [
	{
		gamePoint: 1,
		performanceScore: 46,
	},
	{
		gamePoint: 2,
		performanceScore: 49,
	},
	{
		gamePoint: 3,
		performanceScore: 54,
	},
	{
		gamePoint: 4,
		performanceScore: 57,
	},
	{
		gamePoint: 5,
		performanceScore: 58,
	},
	{
		gamePoint: 6,
		performanceScore: 57,
	},
	{
		gamePoint: 7,
		performanceScore: 55,
	},
	{
		gamePoint: 8,
		performanceScore: 55,
	},
	{
		gamePoint: 9,
		performanceScore: 54,
	},
	{
		gamePoint: 10,
		performanceScore: 57,
	},
	{
		gamePoint: 11,
		performanceScore: 61,
	},
	{
		gamePoint: 12,
		performanceScore: 56,
	},
	{
		gamePoint: 13,
		performanceScore: 56,
	},
	{
		gamePoint: 14,
		performanceScore: 55,
	},
	{
		gamePoint: 15,
		performanceScore: 56,
	},
	{
		gamePoint: 16,
		performanceScore: 57,
	},
	{
		gamePoint: 17,
		performanceScore: 52,
	},
	{
		gamePoint: 18,
		performanceScore: 54,
	},
	{
		gamePoint: 19,
		performanceScore: 58,
	},
	{
		gamePoint: 20,
		performanceScore: 56,
	},
	{
		gamePoint: 21,
		performanceScore: 51,
	},
	{
		gamePoint: 22,
		performanceScore: 49,
	},
	{
		gamePoint: 23,
		performanceScore: 50,
	},
	{
		gamePoint: 24,
		performanceScore: 52,
	},
	{
		gamePoint: 25,
		performanceScore: 53,
	},
	{
		gamePoint: 26,
		performanceScore: 53,
	},
	{
		gamePoint: 27,
		performanceScore: 56,
	},
	{
		gamePoint: 28,
		performanceScore: 60,
	},
	{
		gamePoint: 29,
		performanceScore: 57,
	},
	{
		gamePoint: 30,
		performanceScore: 58,
	},
];

const chartdata = performancedata.map((data) => ({
	date: `Point ${data.gamePoint}`, // Transforming gamePoint to a string that includes it
	Performance: data.performanceScore,
}));

const MatchStats = () => {
	function classNames(...classes: any) {
		return classes.filter(Boolean).join(" ");
	}

	return (
		<div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
			<Head>
				<title>CourtMetrics - Match Stats</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* <Card>
				<p className="flex items-start justify-between">
					<span className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
						$5,000
					</span>
					<span
						className={classNames(
							true
								? "text-emerald-700 dark:text-emerald-500"
								: "text-red-700 dark:text-red-500",
							"text-tremor-default font-medium"
						)}
					>
						+12.5%
					</span>
				</p>
				<p className="mt-1 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
					Test stat
				</p>
			</Card> */}
			<main className="flex-grow flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<header className="flex flex-col items-start justify-center py-2">
					<Image
						className="h-8 w-auto"
						// onClick={() => router.push("/")}
						src="/textlogo.png"
						width={1000}
						height={300}
						alt=""
					/>
				</header>

				<dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
					<Card>
						<p className="flex items-start justify-between">
							<span className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
								43%
							</span>
							<span
								className={classNames(
									true
										? "text-emerald-700 dark:text-emerald-500"
										: "text-red-700 dark:text-red-500",
									"text-tremor-default font-medium"
								)}
							>
								+21.3%
							</span>
						</p>
						<p className="mt-1 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
							Serve Accuracy
						</p>
					</Card>

					<Card>
						<p className="flex items-start justify-between">
							<span className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
								1.8
							</span>
							<span
								className={classNames(
									false
										? "text-emerald-700 dark:text-emerald-500"
										: "text-red-700 dark:text-red-500",
									"text-tremor-default font-medium"
								)}
							>
								-2.3%
							</span>
						</p>
						<p className="mt-1 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
							Win/Error Ratio
						</p>
					</Card>

					<Card>
						<p className="flex items-start justify-between">
							<span className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
								68%
							</span>
							<span
								className={classNames(
									true
										? "text-emerald-700 dark:text-emerald-500"
										: "text-red-700 dark:text-red-500",
									"text-tremor-default font-medium"
								)}
							>
								+7.9%
							</span>
						</p>
						<p className="mt-1 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
							Rally Wins
						</p>
					</Card>

					<Card>
						<p className="flex items-start justify-between">
							<span className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
								65%
							</span>
							<span
								className={classNames(
									true
										? "text-emerald-700 dark:text-emerald-500"
										: "text-red-700 dark:text-red-500",
									"text-tremor-default font-medium"
								)}
							>
								+27.5%
							</span>
						</p>
						<p className="mt-1 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
							First Serve %
						</p>
					</Card>
				</dl>

				<div className="mt-8">
					<h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
						Match Performance
					</h3>
          <p className="-mt-3 text-sm text-gray-600">Your performance throughout the match.</p>
					<AreaChart
						className="h-80 mt-4"
						data={chartdata}
						index="date"
            showLegend={false}
						categories={["Performance"]}
						colors={["indigo"]} // You can choose your color preference
						yAxisWidth={60}
						onValueChange={(value) => console.log(value)}
					/>
				</div>
			</main>
		</div>
	);
};

export default MatchStats;
