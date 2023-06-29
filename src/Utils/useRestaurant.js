import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../contains";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState({});
  useEffect(() => {
    getRestorantInfo();
  }, []);
  async function getRestorantInfo() {
    const data = await fetch(FETCH_MENU_URL + resId + "&submitAction=ENTER");
    const json = await data.json();
    console.log(json?.data?.cards[0]?.card?.card?.info);
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
  }
  return restaurant;
};

export default useRestaurant;
