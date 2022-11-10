import React from "react";

const Reviews = ({ allReview }) => {
  console.log(allReview);

  return (
    <div>
      <div className="py-16 container">
        <h2 className="mb-12 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
          What's our customers say {allReview.length}
        </h2>
        <div className="xl:container m-auto px-6 text-gray-600 dark:text-gray-300 md:px-12 xl:px-6">
          <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
            {allReview.map((review) => (
              <div
                key={review._id}
                className="rounded-3xl sm:flex sm:space-x-8 border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-8 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none"
              >
                <img
                  className="mx-auto h-20 w-20 rounded-full"
                  src={review.url}
                  alt="user avatar"
                  height={220}
                  width={220}
                  loading="lazy"
                />
                <div className="mt-4 space-y-4 text-center sm:mt-0 sm:text-left">
                  <p>
                    <span className="font-serif">"</span> {review.message}{" "}
                    <span className="font-serif">"</span>
                  </p>
                  <div>
                    <h6 className="text-lg font-semibold leading-none">
                      {review.name}
                    </h6>
                    <span className="text-xs text-gray-500">
                      Product Designer
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
