import { useState } from "react";

const Shimmer = () => {
  const [shimmerRestaurants, setShimmerRestaurants] = useState([]);
  return (
    <>
      <div className="shimmer-restaurant-list">
        {Array(15)
          .fill("")
          .map((e, index) => (
            <div className="shimmer-card" key={index}></div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
