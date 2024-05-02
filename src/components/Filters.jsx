import FilterBox from "./FilterBox";
import "./Styles/Filter.css"

const Filters = () => {
  return (
    <>
      <div className="main-container">
        <div className="filter-box">
          <FilterBox />
        </div>
        <div className="filter-box">
          <FilterBox />
        </div>
        <div className="filter-box">
          <FilterBox />
        </div>
        <div className="filter-box">
          <FilterBox />
        </div>
        <div className="filter-box">
          <FilterBox />
        </div>
        
    
      </div>
    </>
  );
};

export default Filters;
