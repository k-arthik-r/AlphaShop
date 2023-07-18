import React from "react";
import { Coupons as CouponsData } from "./constants";

const CouponCard = ({ index, title, image, price, text }) => {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg border border-gray-300 bg-white m-5">
      <img className="w-full h-48 object-cover" src={image} alt="Product" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{text}</p>
      </div>
      <div className="px-4 py-2 flex justify-between items-center bg-gray-100">
        <span className="text-gray-800 text-sm font-semibold">{price}</span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Know more
        </button>
      </div>
    </div>
  );
};

const Coupons = () => {
  const chunkedData = chunkArray(CouponsData, 4); // Split the data into chunks of 4

  // Helper function to chunk the array into smaller arrays
  function chunkArray(arr, size) {
    const chunkedArr = [];
    let index = 0;
    while (index < arr.length) {
      chunkedArr.push(arr.slice(index, size + index));
      index += size;
    }
    return chunkedArr;
  }

  return (
    <div className="h-screen">
      <div className="text-5xl font-bold text-black m-10">Shop now</div>
      <div className="mt-20">
        {chunkedData.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className="flex justify-between gap-5 mb-28">
            {row.map((coupon, index) => (
              <CouponCard
                key={`coupon-${index}`}
                index={index}
                {...coupon}
                className="w-64 h-96" // Set the fixed width and height here
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coupons;
