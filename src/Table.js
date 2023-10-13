import React from 'react';
import Chart from './Chart';

const Table = () => {
  const campaignData = [
    {
      campaignName: 'Cosmetics',
      clicks: 712,
      cost: 'USD 4,722',
      conversion: 8,
      revenue: 'USD 4,722',
    },
    {
      campaignName: 'Serums',
      clicks: 712,
      cost: 'USD 4,722',
      conversion: 78,
      revenue: 'USD 4,722',
    },
    {
      campaignName: 'Facewash',
      clicks: 712,
      cost: 'USD 4,722',
      conversion: 64,
      revenue: 'USD 4,722',
    },
    {
      campaignName: 'Shampoos',
      clicks: 712,
      cost: 'USD 4,722',
      conversion: 8,
      revenue: 'USD 4,722',
    },
    {
      campaignName: 'Conditioners',
      clicks: 712,
      cost: 'USD 4,722',
      conversion: 10,
      revenue: 'USD 4,722',
    },
    {
      campaignName: 'Facewash 2',
      clicks: 712,
      cost: 'USD 4,722',
      conversion: 115,
      revenue: 'USD 4,722',
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Dashboard</h1>

      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
          <h2 className="text-2xl p-3 font-semibold">Ad Insights</h2>
          <hr />
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg md:w-3/3">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xm text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 text-right">
                    <div className="flex items-center">
                      Campaigns
                      <a href="#">
                        <svg
                          class="w-3 h-3 ml-1.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                        </svg>
                      </a>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-right">
                    <div className="flex items-center">
                      Clicks
                      <a href="#">
                        <svg
                          class="w-3 h-3 ml-1.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                        </svg>
                      </a>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-right">
                    <div className="flex items-center">
                      Cost
                      <a href="#">
                        <svg
                          class="w-3 h-3 ml-1.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                        </svg>
                      </a>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-right">
                    <div className="flex items-center">
                      Conversion
                      <a href="#">
                        <svg
                          class="w-3 h-3 ml-1.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                        </svg>
                      </a>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-right">
                    <div className="flex items-center">
                      Revenue
                      <a href="#">
                        <svg
                          class="w-3 h-3 ml-1.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                        </svg>
                      </a>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {campaignData.map((campaign, index) => (
                  <tr
                    key={index}
                    class="bg-white border-b dark:bg-gray-100 dark:border-gray-100"
                  >
                    <td className="px-6 py-4 text-right">
                      {campaign.campaignName}
                    </td>
                    <td className="px-6 py-4 text-right">{campaign.clicks}</td>
                    <td className="px-6 py-4 text-right">{campaign.cost}</td>
                    <td className="px-6 py-4 text-right">
                      {campaign.conversion}
                    </td>
                    <td className="px-6 py-4 text-right">{campaign.revenue}</td>
                  </tr>
                ))}
                <tr>
                  <td className="px-6 py-4 text-right text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    Total
                  </td>
                  <td className="px-6 py-4 text-right  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    1245
                  </td>
                  <td className="px-6 py-4 text-right  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    USD 4,722{' '}
                  </td>
                  <td className="px-6 py-4 text-right  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    1245
                  </td>
                  <td className="px-6 py-4 text-right  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    USD 4,722{' '}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
