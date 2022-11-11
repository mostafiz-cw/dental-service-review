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
                  <span className="font-serif">"</span> Soothing Dental is
                  awesome. Every experience I have had with Dr Suzie Yang and
                  her crew has been excellent. No waiting in the office, my
                  appointment time has always meant my appointment time. I get
                  there on time for my visit and never have to wait like the
                  usual expected delays at other doctors offices. They are warm
                  and they are truly soothing. And their work is superior. I
                  rate them an A ++++. <span className="font-serif">"</span>
                </p>
                <div>
                  <h6 className="text-lg font-semibold leading-none">
                    Jane Doe
                  </h6>
                  <span className="text-xs text-gray-500">UI Designer</span>
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
                  <span className="font-serif">"</span> Suzie Yang has sold this
                  practice. The new dentist's charge you a membership fee,
                  $150.00! And if you leave, watch your credit card they will
                  charge it every year. Also, I needed a crown replacement,
                  their cost is $400.00 more then the dentist I moved to. If you
                  just want to pay more and pay $20.00 to park when you see
                  these guys, go for it. <span className="font-serif">"</span>
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
                  <span className="font-serif">"</span> I've been coming to this
                  practice for years. Dr. Yang was my original dentist, and
                  unfortunately she's left the practice and I'll miss her!,
                  but I feel like I'm now in good hands with Dr. Saeidi. Stella
                  is an amazing hygienist, I won't let anyone else clean my
                  teeth! The practice is modern and hi-tech, and the office is
                  stylish and calming. <span className="font-serif">"</span>
                </p>
                <div>
                  <h6 className="text-lg font-semibold leading-none">
                    Jane Ali
                  </h6>
                  <span className="text-xs text-gray-500">Accountant</span>
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
