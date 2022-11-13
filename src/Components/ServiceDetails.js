import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLoaderData } from "react-router-dom";
import useTitle from "../Hooks/useTitle";
import AddReview from "./AddReview";
import Reviews from "./Reviews";

const ServiceDetails = () => {
  //   const { service_title, description, img_url, price,_id} = useLoaderData();
  const [services, allReviews] = useLoaderData();

  // dynamic title
  useTitle("Service Details");

  return (
    <div>
      <div className="container flex justify-center my-10">
        <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
          <PhotoProvider>
            <PhotoView src={services.img_url}>
              <img
                className="object-cover w-full h-64"
                src={services.img_url}
                alt="Article"
              />
            </PhotoView>
          </PhotoProvider>
          <div className="p-6">
            <div>
              <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                Service
              </span>
              <p
                className="block mt-2 text-blue-600 text-2xl font-semibold transition-colors duration-300 transform dark:text-white no-underline"
                tabIndex={0}
              >
                {services.service_title}
              </p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {services.description}
              </p>
            </div>
            <div className="mt-4">
              <div className="flex items-center">
                <div className="flex items-center">
                  <p className="font-semibold">Price : {services.price}</p>
                  {/* <img
                  className="object-cover h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                  alt="Avatar"
                /> */}
                  {/* <a
                  href="/"
                  className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                  tabIndex={0}
                >
                  Jone Doe
                </a> */}
                </div>

                {/* <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                21 SEP 2015
              </span> */}
              </div>
            </div>
          </div>
        </div>

        {/* <h1>{service_title}</h1>
      <p>{description}</p> */}
      </div>
      <Reviews allReview={allReviews}></Reviews>
      <AddReview userId={services._id}></AddReview>
    </div>
  );
};

export default ServiceDetails;
