import ResturentCard from './ResturentCard';
import restaurantList from '../utils/mockData.JS'; // Make sure this file has the correct name and path
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
const Body = () => {
  const [restoList, setRestoList] = useState(restaurantList); // Initialize with an empty array

  useEffect(() => {
    setRestoList(restoList);
    // fetchData();
  }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
  //     );
  //     const json = await response.json();
  //     console.log(json);

  //     // Make sure to check the structure of the data and set the state properly
  //     const restaurants =
  //       json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle
  //         ?.restaurants || [];
  //     setRestoList(restaurants);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  return restoList.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" name="search" id="" placeholder="search" />
          <button>Search</button>
        </div>
        <button
          onClick={() => {
            const filter = restoList.filter((res) => res?.data.avgRating > 4);
            setRestoList(filter);
            console.log(filter);
          }}
        >
          Top Rated Restorent
        </button>
      </div>
      <div className="res-container">
        {restoList.map((i) => (
          <ResturentCard key={i.data.id} resData={i.data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
