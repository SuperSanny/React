export function filterData() {
  const filterData = allrestaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return filterData;
}
