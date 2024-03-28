// pages/match-stats.js

import React from 'react';
import Head from 'next/head';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Set 1', performance: 0.8 },
  { name: 'Set 2', performance: 0.6 },
  { name: 'Set 3', performance: 0.9 },
  // ... add more data points as needed
];

const MatchStats = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <Head>
        <title>CourtMetrics - Match Stats</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Match Stats</h3>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Average Shots/Point</dt>
                <dd className="mt-1 text-sm text-gray-900">4.2</dd>
              </div>

              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Average Point Ball Speed</dt>
                <dd className="mt-1 text-sm text-gray-900">112 km/h</dd>
              </div>

              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Average Serve Hit Rate</dt>
                <dd className="mt-1 text-sm text-gray-900">78%</dd>
              </div>

              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Forehand/Backhand %</dt>
                <dd className="mt-1 text-sm text-gray-900">62% / 38%</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Match Performance</h3>
          <LineChart width={350} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="performance" stroke="#8884d8" />
          </LineChart>
        </div>
      </main>
    </div>
  );
};

export default MatchStats;