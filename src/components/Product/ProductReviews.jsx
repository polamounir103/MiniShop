import React from "react";
import { useState } from "react";

export default function ProductReviews({ desc, reviews }) {
  const [listedItems, setListedItems] = useState("desc");
  return (
    <section className="">
      <div>
        <div className="flex gap-5 items-center">
          <button
            className={`cursor-pointer font-semibold ${
              listedItems == "desc" ? "text-black" : "text-gray-400"
            }`}
            onClick={() => setListedItems("desc")}
          >
            Description
          </button>
          <button
            className={`cursor-pointer font-semibold ${
              listedItems == "reviews" ? "text-black" : "text-gray-400"
            }`}
            onClick={() => setListedItems("reviews")}
          >
            Reviews {reviews?.length > 0? `(${reviews?.length})` : ""}
          </button>
        </div>
        <div>
          {listedItems === "desc" && (
            <div>
              <p className="pt-5">{desc}</p>
            </div>
          )}
          {listedItems === "reviews" && (
            <div>
              <ul className="flex flex-col gap-1 ">
                {reviews?.map((review, index) => (
                  <li key={index} className="border-b py-2">
                    <h2>User</h2>
                    <p className="text-yellow-500">{review.rating} (rating)</p>
                    <p>{review.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// {
//   id: "01",
//   productName: "Stone and Beam Westview ",
//   imgUrl: productImg01,
//   category: "sofa",
//   price: 193,
//   shortDesc:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//   reviews: [
//     {
//       rating: 4.7,
//       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     },
//   ],
//   avgRating: 4.5,
//   isNew: false,
//   isBestSeller: false,
// },
