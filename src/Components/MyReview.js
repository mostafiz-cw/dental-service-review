import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import useTitle from "../Hooks/useTitle";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  // dynamic title
  useTitle("My Review");

  const navigate = useNavigate();

//   load user review 
  useEffect(() => {
    fetch(`https://a-11-service-review-server-side-mostafiz-cw.vercel.app/myreview?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
        
      })
      .catch(err => console.error(err))
  }, [user?.email]);
//   console.log(reviews);

     // delete handeler
    const deleteHandeler = (_id) => {
        const confirm = window.confirm('Are you sure to delete?');
        if(confirm){
            fetch(`https://a-11-service-review-server-side-mostafiz-cw.vercel.app/myreview/${_id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
              console.log(data)
              if(data.deletedCount > 0){
                alert("Deleted Successfully");
                const remaining = reviews.filter(review => review._id !== _id);
                setReviews(remaining);
              }
              navigate('/myreview');

            })
            .catch(err => console.log(err))
        }
    }

  return (
    <>
      <div className="py-16">
        <div className="xl:container m-auto px-6 text-gray-600 dark:text-gray-300 md:px-12 xl:px-6">
          <h2 className="mb-12 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            {
              reviews.length < 1 ?  "No review found" : "My Review"
            }
          </h2>
          <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
            {reviews.map((review) => (
              <div key={review._id} className="rounded-3xl sm:flex sm:space-x-8 border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-8 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
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
                <div className="flex-col mt-4">
                  <button className="bg-green-600 h-10 text-white px-4 mr-4 mb-4">
                    Edit
                  </button>
                  <button onClick={() => deleteHandeler(review._id)} className="bg-red-600 h-10 text-white px-4">
                    Delete
                  </button>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </>
  );
};

export default MyReview;
