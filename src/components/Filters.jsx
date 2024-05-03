import FilterBox from "./FilterBox";
import { roles } from "../utils/filterdata";
import {noOfEmp} from "../utils/filterdata";
import {exp} from "../utils/filterdata";
import {remote} from "../utils/filterdata";
import { Salary } from "../utils/filterdata";
import "./Styles/Filter.css"
import OtherFilterBox from "./OtherFilterBox";
import Search from "./Search";

const Filters = () => {
  return (
    <>
      <div className="main-container">
        <div className="filter-box">
          <FilterBox roles={roles} />
        </div>
        <div  className="filter-box">
        <OtherFilterBox options={noOfEmp} label={"Number Of Employee"} multi={true}/>
        </div>
        <div  className="filter-box">
        <OtherFilterBox options={exp} label={"Experience"} multi={false}/>
        </div>
        <div  className="filter-box">
        <OtherFilterBox options={remote} label={"Remote"} multi={true}/>
        </div>
        <div  className="filter-box">
        <OtherFilterBox options={Salary} label={"Salary In USD"} multi={false}/>
        </div>
        <div  className="filter-box">
        <Search/>
        </div>
    
      </div>
    </>
  );
};

export default Filters;
