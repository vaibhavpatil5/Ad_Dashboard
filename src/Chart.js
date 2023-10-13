import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { ArcElement, Chart } from 'chart.js';
import ChartTable from './Table';
const chartData = {
  labels: ['Male', 'Female', 'Unknown'],
  datasets: [
    {
      data: [40, 35, 25],
      backgroundColor: ['#FF823C', '#0096FF', '#323C46'],
    },
  ],
};

export default function ChartComponent() {
  Chart.register(ArcElement);
  const [showChart, setShowChart] = useState(true);

  const toggleChart = () => {
    setShowChart(!showChart);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
        <h2 className="text-2xl p-3 font-semibold">Ad Insights</h2>
        <hr />
        <div className="flex flex-col md:flex-row">
          {showChart && (
            <div className="p-4 md:w-1/2">
              <div className="min-w-[350px]">
                <Doughnut data={chartData} />
              </div>
            </div>
          )}
          {showChart && (
            <div className="p-4 md:w-1/2">
              <div className="text-center">
                <div className="grid grid-cols-3 gap-3 mb-2">
                  <dl className="bg-orange-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
                    <dt className="w-8 h-8 rounded-full bg-orange-100 dark:bg-gray-500 text-orange-600 dark:text-orange-300 text-sm font-medium flex items-center justify-center mb-1">
                      40%
                    </dt>
                    <dd className="text-orange-600 dark:text-orange-300 text-sm font-medium">
                      Male
                    </dd>
                  </dl>
                  <dl className="bg-blue-50 dark:bg-blue-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
                    <dt className="w-8 h-8 rounded-full bg-teal-100 dark:bg-blue-500 text-blue-600 dark:text-blue-300 text-sm font-medium flex items-center justify-center mb-1">
                      35%
                    </dt>
                    <dd className="text-blue-600 dark:text-blue-300 text-sm font-medium">
                      Female
                    </dd>
                  </dl>
                  <dl className="bg-gray-200 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
                    <dt className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-500 text-gray-600 dark:text-gray-300 text-sm font-medium flex items-center justify-center mb-1">
                      25%
                    </dt>
                    <dd className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                      Unknown
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          )}
          {!showChart && (
            <div className="p-4 md:w-3/3">
              <ChartTable />
            </div>
          )}
        </div>
        <div className="text-right">
          <input
            type="checkbox"
            checked={showChart}
            onChange={toggleChart}
            className="toggle toggle-lg"
          />
        </div>
      </div>
    </div>
  );
}
