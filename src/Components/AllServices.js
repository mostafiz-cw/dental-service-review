import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import SpinnerAdd from "./SpinnerAdd";

const AllServices = () => {
  const [allservices, setAllservices] = useState();
  const { loading } = useContext(AuthContext);

  useEffect(() => {
    fetch(
      "https://a-11-service-review-server-side-mostafiz-cw.vercel.app/service"
    )
      .then((res) => res.json())
      .then((data) => setAllservices(data));
  }, []);

  if (loading) {
    return <SpinnerAdd></SpinnerAdd>;
  }

  console.log(allservices);
  return (
    <div className="py-12">
      <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="mb-12 space-y-2 text-center">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
            Our All Service is here.
          </h2>
          <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
            A soothing environment to get all of your aesthetic & healthy
            smile’s needs.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allservices?.map((service) => (
            <div key={service._id} className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={service.img_url}
                  alt="art cover"
                  loading="lazy"
                  width="1000"
                  height="667"
                  className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 relative">
                <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
                  {service.service_title}
                </h3>
                <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                  {service.description.slice(0, 100)}...
                </p>
                <div className="flex justify-between">
                  <p>Price ${service.price}</p>
                  <Link
                    to={`/services/${service._id}`}
                    className="inline-block"
                    href="/"
                  >
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                      Read more
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllServices;
