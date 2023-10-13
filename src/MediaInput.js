import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MediaInput = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      navigate('/createAd');
    }, 600);
  };
  return (
    <div className="flex flex-col">
      {isSubmitted ? (
        <div className="p-4">
          <div className="bg-green-200 p-4 rounded-md">
            Form submitted successfully. Redirecting...
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="flex">
            <div className="w-1/2 p-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Heading 01</span>
                </label>
                <input
                  type="text"
                  placeholder="Add a heading that would make user interest"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Heading 02</span>
                </label>
                <input
                  type="text"
                  placeholder="Add a heading that would make user interest"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="w-1/2 p-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description 01</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-32"
                  placeholder="Add primary text to help users understand more about your products, service or offers"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Video URL</span>
              </label>
              <input
                type="text"
                placeholder="Add the URL of the image you want to use for the ad"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 p-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Business Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Add your business name"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="w-1/2 p-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Button Label</span>
                </label>
                <input
                  type="text"
                  placeholder="Select Label"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Website URL</span>
              </label>
              <input
                type="text"
                placeholder="Add the URL of the image you want to use for the ad"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="text-right">
            <Link to={'/createAd'}>
              <button className="bg-blue-500 text-white px-8 py-2 m-4 rounded-md">
                Back
              </button>
            </Link>

            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-8 py-2 m-4 rounded-md"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaInput;
