import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import DisplayAdData from './DisplayAdData'; // Import the next page component

const CreateAd = () => {
  const [selectedAd, setSelectedAd] = useState(null);

  const adData = [
    { type: 'text', label: 'Create', head: 'Text Ad' },
    { type: 'media', label: 'Create', head: 'Media Ad' },
  ];

  const handleCardClick = (type) => {
    setSelectedAd(type);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Create Ad</h1>

      {/* Testimonials Card */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto text-center">
          <div className="flex flex-wrap -m-4">
            {adData.map((ad, index) => (
              <div
                key={index}
                className="p-4 md:w-1/2 w-full"
                onClick={() => handleCardClick(ad.type)}
              >
                <div
                  className={`h-full bg-gray-100 p-8 rounded cursor-pointer ${
                    selectedAd === ad.type ? 'border-2 border-blue-500' : ''
                  }`}
                >
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      checked={selectedAd === ad.type}
                      readOnly
                    />
                  </label>
                  <div className="rounded-lg h-64 py-3 overflow-hidden">
                    <img
                      alt="content"
                      className="object-cover object-center h-full w-full"
                      src="https://img.freepik.com/free-vector/posts-concept-illustration_114360-204.jpg?size=626&ext=jpg&ga=GA1.1.1397887193.1685728761&semt=ais"
                    />
                  </div>

                  <div className="inline-flex py-4 items-center justify-center">
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="text-gray-500 text-sm">{ad.label}</span>
                      <span className="title-font font-medium text-gray-900">
                        {ad.head}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="text-right">
        <Link to={selectedAd ? `/next/${selectedAd}` : '/createAd'}>
          <button className="bg-blue-500 text-white px-8 py-2 mt-4 rounded-md">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CreateAd;
