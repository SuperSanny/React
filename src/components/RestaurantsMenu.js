import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantsMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState({});
  useEffect(() => {
    getRestorantInfo();
  }, []);
  async function getRestorantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9261382&lng=77.62210910000002&restaurantId=" +
        resId +
        "&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json?.data?.cards[0]?.card?.card?.info);
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
  }
  return (
    <>
      <div className="body-container">
        <h1>Restaurant Id : {restaurant.id}</h1>
        <h2>Name : {restaurant.name}</h2>
      </div>
    </>
  );
};

export default RestaurantsMenu;
