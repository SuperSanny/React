import { IMG_CDN_URL } from "../contains";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  deliveryTime,
  costForTwoString,
}) => (
  <div className="card">
    <img className="card-image" src={IMG_CDN_URL + cloudinaryImageId} />
    <div className="card-content">
      <h4>{name}</h4>
      <p>{cuisines.join(", ")}</p>
      <div className="avg-body">
        <p className="avgRating">{avgRating}</p>
        <p>{deliveryTime + " MIN"}</p>
        <p>{costForTwoString}</p>
      </div>
    </div>
  </div>
);

export default RestaurantCard;
