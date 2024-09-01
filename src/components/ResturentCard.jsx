// Restaurant card component: Image, name, cuisine
import { CDN_URL } from '../utils/constants';
const ResturentCard = (props) => {
  const { resData } = props;
  const { name, cuisines, deliveryTime, avgRating, costForTwo } = resData;
  return (
    <div className="returent_card" style={{ background: 'rgb(207 207 207)' }}>
      <img
        src={CDN_URL + resData.cloudinaryImageId}
        alt=""
        className="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo / 100} for two</h4>
      <h4>{deliveryTime}min</h4>
    </div>
  );
};
export default ResturentCard;
