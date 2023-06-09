import React from "react";
import ReactDOM from "react-dom/client";
import { restaurantList } from "../contains";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/helper";
import useOnline from "../Utils/useOnline";

const Body = () => {
  const [filteredrestaurants, setFilteredRestaurants] = useState([]);
  const [allrestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9261382&lng=77.62210910000002&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const offline = useOnline();
  if (!offline) {
    return <>🔴 Offline, Please check your internet connection.</>;
  }

  if (!allrestaurants) return null;
  // if (filteredrestaurants?.length === 0)
  //   return <h1>There is no any restaurants.</h1>;

  function enterPressed(event) {
    if (event.key === "enter") {
      filterData();
    }
  }

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onKeyDown={enterPressed}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allrestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {allrestaurants?.length === 0 ? (
          <Shimmer />
        ) : (
          filteredrestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurants/" + restaurant?.data?.id}
                key={restaurant?.data?.id}
              >
                <RestaurantCard
                  {...restaurant?.data}
                  key={restaurant?.data?.id}
                />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};
export default Body;
