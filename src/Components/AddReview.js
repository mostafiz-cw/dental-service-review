import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";

const AddReview = ({ userId }) => {
  const { user } = useContext(AuthContext);

  // add event handeler
  const addreviewHandeler = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const url = form.url.value;
    const message = form.message.value;
    const email = user.email;
    console.log(name, url, message);

    const userReview = {
      userId,
      name,
      url,
      message,
      email
    };
    console.log(userReview);

    fetch("https://a-11-service-review-server-side-mostafiz-cw.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
          alert("Review Added");
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      {user?.uid ? (
        <>
          <form onSubmit={addreviewHandeler}>
            <section className="text-gray-600 body-font relative">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                    Add Your Review
                  </h1>
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    After service how are you feeling please give your honest
                    feadback us, we will be happy for your honest review.
                  </p>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                  <div className="flex flex-wrap -m-2">
                    <div className="p-2 w-1/2">
                      <div className="relative">
                        <label
                          htmlFor="name"
                          className="leading-7 text-sm text-gray-600"
                        >
                          Name
                        </label>
                        <input
                          required
                          type="text"
                          id="name"
                          name="name"
                          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>
                    <div className="p-2 w-1/2">
                      <div className="relative">
                        <label
                          htmlFor="url"
                          className="leading-7 text-sm text-gray-600"
                        >
                          Image Url
                        </label>
                        <input
                          required
                          type="text"
                          id="url"
                          name="url"
                          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>
                    <div className="p-2 w-full">
                      <div className="relative">
                        <label
                          htmlFor="message"
                          className="leading-7 text-sm text-gray-600"
                        >
                          Message
                        </label>
                        <textarea
                          required
                          id="message"
                          name="message"
                          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="p-2 w-full">
                      <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </form>
        </>
      ) : (
        <>
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Please Log In To Add Review
            </h1>
            {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              After service how are you feeling please give your honest feadback
              us, we will be happy for your honest review.
            </p> */}
            <div className="p-2 w-full">
              <Link to={'/login'}>
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Log In
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AddReview;
