import "./SearchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        alt="image"
        src="https://th.bing.com/th/id/OIP.MlQWOdsyMAOiDYDnPZwazAHaE7?w=279&h=186&c=7&r=0&o=5&dpr=1.25&pid=1.7"
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartment</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment withAir conditioning
        </span>
        <span className="siFeatures">
          Entire bungalow • 1 bedroom • 1 bathroom • 21m²
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
        </div>
        <div className="siDetailTexts">
            <span className="siPrice">$123</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See Availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
