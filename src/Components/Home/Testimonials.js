import React from "react";

const Testimonials = () => {
  return (
    <div>
      <div className="py-16">
        <div className="xl:container m-auto px-6 text-gray-600 dark:text-gray-300 md:px-12 xl:px-6">
          <h2 className="mb-12 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            What's our customers say
          </h2>
          <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
            <div className="row-span-2 rounded-3xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-8 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <div className="flex h-full flex-col justify-center space-y-4">
                <img
                  className="mx-auto h-20 w-20 rounded-full"
                  src="https://randomuser.me/api/portraits/men/44.jpg"
                  alt="user avatar"
                  height={220}
                  width={220}
                  loading="lazy"
                />
                <p className="md:text-xl">
                  <span className="font-serif">"</span> Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Quaerat repellat
                  perspiciatis excepturi est. Non ipsum iusto aliquam
                  consequatur repellat provident, omnis ut, sapiente voluptates
                  veritatis cum deleniti repudiandae ad doloribus.{" "}
                  <span className="font-serif">"</span>
                </p>
                <div>
                  <h6 className="text-lg font-semibold leading-none">
                    Jane Doe
                  </h6>
                  <span className="text-xs text-gray-500">
                    UI Designer
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-3xl sm:flex sm:space-x-8 border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-8 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <img
                className="mx-auto h-20 w-20 rounded-full"
                src="https://randomuser.me/api/portraits/women/24.jpg"
                alt="user avatar"
                height={220}
                width={220}
                loading="lazy"
              />
              <div className="mt-4 space-y-4 text-center sm:mt-0 sm:text-left">
                <p>
                  <span className="font-serif">"</span> Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Quaerat repellat
                  perspiciatis excepturi est. Non ipsum iusto aliquam
                  consequatur repellat provident, omnis ut, sapiente voluptates
                  veritatis cum deleniti repudiandae ad doloribus.{" "}
                  <span className="font-serif">"</span>
                </p>
                <div>
                  <h6 className="text-lg font-semibold leading-none">
                    Amenda Carny
                  </h6>
                  <span className="text-xs text-gray-500">
                    Product Designer
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-3xl sm:flex sm:space-x-8 border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-8 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <img
                className="mx-auto h-20 w-20 rounded-full"
                src="https://randomuser.me/api/portraits/men/10.jpg"
                alt="user avatar"
                height={220}
                width={220}
                loading="lazy"
              />
              <div className="mt-4 space-y-4 text-center sm:mt-0 sm:text-left">
                <p>
                  <span className="font-serif">"</span> Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Quaerat repellat
                  perspiciatis excepturi est. Non ipsum iusto aliquam
                  consequatur repellat provident, omnis ut, sapiente voluptates
                  veritatis cum deleniti repudiandae ad doloribus.{" "}
                  <span className="font-serif">"</span>
                </p>
                <div>
                  <h6 className="text-lg font-semibold leading-none">
                    Jane Ali
                  </h6>
                  <span className="text-xs text-gray-500">
                    Accountant
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
