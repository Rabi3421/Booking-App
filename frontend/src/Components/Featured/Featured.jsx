import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://th.bing.com/th/id/OIP.zsEgRepQ6Uh5OYkkhJyn2gHaE5?w=249&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
            src="https://th.bing.com/th/id/OIP.GywS810LlVilhHOCIzCxGQHaEK?w=281&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>532 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://th.bing.com/th/id/OIP.ponQlXR3nKuE9xuM4mRvgQHaE8?w=236&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>533 Properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
