import ResturentCard from './ResturentCard';
import restaurantList from '../utils/mockData.JS'; // Make sure this file has the correct name and path
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';


const Body = () => {
  const [listOfRestaurents, setlistOfRestaurents] = useState(restaurantList);
  const [searchText, setSearchText] = useState('');
  const [filteredRestaurent, setFilteredRestaurent] = useState(restaurantList);

  const handleFilter = () => {
    const filter = listOfRestaurents.filter((res) =>
      res.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurent(filter); // Corrected state update
    console.log(filter);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
      );
      const json = await data.json();
      const restaurants = json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setlistOfRestaurents(restaurants);
      setFilteredRestaurent(restaurants);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return listOfRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search"
          />
          <button onClick={handleFilter}>Search</button>
        </div>
        <button
          onClick={() => {
            const topRated = listOfRestaurents.filter((res) => res?.data.avgRating > 4);
            setFilteredRestaurent(topRated); // Only update filteredRestaurent
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurent.map((i) => (
          <ResturentCard key={i.data.id} resData={i.data} />
        ))}
      </div>
    </div>
  );
};

export default Body;

