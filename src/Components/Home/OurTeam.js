import React from "react";

const OurTeam = () => {
  return (
    <div>
      <div className="py-20 container">
        <div className="xl:container mx-auto px-6 md:px-12">
          <div className="mb-16 md:w-2/3 lg:w-1/2 flex justify-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
              Our Specialist Doctor
            </h2>
            {/* <p className="text-gray-600 dark:text-gray-300">
              Tailus prides itself not only on award-winning technology, but
              also on the talent of its people of some of the brightest minds
              and most experienced executives in business.
            </p> */}
          </div>
          <div className="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
              <img
                className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src="https://www.soothing.dental/wp-content/uploads/2022/07/dehghani-slide-min.jpg"
                alt="men"
                loading="lazy"
                width={640}
                height={805}
              />
              <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 className="text-xl font-semibold dark:text-gray-700 text-white">
                    Hossein Dehani
                  </h4>
                  <span className="block text-sm text-gray-500">CEO</span>
                </div>
              </div>
            </div>
            <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
              <img
                className="mx-auto h-[26rem] w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src="https://www.soothing.dental/wp-content/uploads/2022/07/saeidi-slide-min.jpg"
                alt="woman"
                loading="lazy"
                width={640}
                height={805}
              />
              <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 className="text-xl font-semibold dark:text-gray-700 text-white">
                    Sona Saeidi
                  </h4>
                  <span className="block text-sm text-gray-500">Dentist</span>
                </div>
              </div>
            </div>
            <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
              <img
                className="mx-auto h-[26rem] w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src="https://www.soothing.dental/wp-content/uploads/2022/07/misyuk-slide-min.jpg"
                alt="woman"
                loading="lazy"
                width={640}
                height={805}
              />
              <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 className="text-xl font-semibold dark:text-gray-700 text-white">
                    ladan Sahabi
                  </h4>
                  <span className="block text-sm text-gray-500">
                    Associate Dentist
                  </span>
                </div>
              </div>
            </div>
            <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
              <img
                className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="men"
                loading="lazy"
                width={640}
                height={805}
              />
              <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 className="text-xl font-semibold dark:text-gray-700 text-white">
                    Hentoni Doe
                  </h4>
                  <span className="block text-sm text-gray-500">
                    Dentist
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

export default OurTeam;
