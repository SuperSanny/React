import { IMG_CDN_URL } from "../contains";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  deliveryTime,
}) => (
  <div className="card">
    <img className="card-image" src={IMG_CDN_URL + cloudinaryImageId} />
    <hr></hr>
    <h3>{name}</h3>
    <h5>{cuisines.join(", ")}</h5>
    <p>{"Delivery Time: " + deliveryTime + " MINS"}</p>
  </div>
);

export default RestaurantCard;
