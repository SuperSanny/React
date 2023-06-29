import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../contains";
import useRestaurant from "../Utils/useRestaurant";

const RestaurantsMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurant(resId);
  return (
    <>
      <div className="body-container">
        <div>
          <h2>{restaurant?.name}</h2>
          <p>{restaurant?.cuisines}</p>
          <p>
            {restaurant?.areaName +
              ", " +
              restaurant?.sla?.lastMileTravelString}
          </p>
          <p>{restaurant?.avgRating}</p>
          <p>{restaurant?.totalRatingsString}</p>
          <p>{restaurant?.sla?.maxDeliveryTime + " MINS"}</p>
          <p>{restaurant?.costForTwoMessage}</p>
        </div>
        <div>
          <img
            className="card-image"
            src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          />
        </div>
      </div>
    </>
  );
};

export default RestaurantsMenu;
