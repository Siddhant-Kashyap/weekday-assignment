import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoreData } from "./Redux/reducers/dataSlice";
import { clearFilters, updateFilter } from "./Redux/reducers/filterSlice";
import JobCard from "./JobCard";
import Grid from "@mui/material/Grid";

const JobList = () => {
  const dispatch = useDispatch();
  const [checkFilter, setCheckFilter] = useState(false);
  const filters = useSelector((state) => state.filter.filters); 

  const clearArray = () => {
    const updatedFilters = { ...filters };
    Object.keys(updatedFilters).forEach((key) => {
      if (updatedFilters[key].length === 0) {
        console.log("Filters", updatedFilters);
        delete updatedFilters[key];
      }
    });
  };

  useEffect(() => {
    console.log("Filter is updated:", filters);
    clearArray();

    if (Object.keys(filters).length > 0) {
      setCheckFilter(true);
    }
  }, [dispatch, filters]); 

  var no = 10;
  const { data, loading, error, limit, offset } = useSelector(
    (state) => state.data
  );
  useEffect(() => {
    dispatch(fetchMoreData({ limit, offset }));
  }, [dispatch]);
  const handleInfiniteScroll = () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight
      ) {
        handleFetchMore();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFetchMore = () => {
    no += 10;
    dispatch(fetchMoreData({ limit, offset: no }));
  };
  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);

    return () => {
      window.removeEventListener("scroll", handleInfiniteScroll);
    };
  }, []);

  const jobMatchesFilter = (job, category, filterOption) => {
    switch (category) {
      case "roles":
        return job.jobRole.toLowerCase() === filterOption.toString().toLowerCase();
      case "Remote":
        return job.location.toLowerCase() === filterOption.toString().toLowerCase();
      case "Experience":
        return job.minExp !== null && job.minExp <= parseInt(filterOption);
      case "Salary In USD":
        return job.minJdSalary !== null && job.minJdSalary >= parseInt(filterOption);
      default:
        return true;
    }
  };
  
  

  const filteredData = data.filter((job) => {
    if (Object.keys(filters).length === 0) return true;

    return Object.entries(filters).every(([categoryName, filterOptions]) => {
      // Ignore filters with no value associated with their key
      if (filterOptions.length === 0) return true;

      return filterOptions.some((option) => {
        return jobMatchesFilter(job, categoryName, option);
      });
    });
  });

  if (loading && !data.length) return <div>Loading...</div>;
 
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {filteredData.length === 0 ? (
        <p>JOB DOES NOT EXIST</p>
      ) : (
        <Grid container spacing={2}>
          {filteredData.map((job, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <JobCard job={job} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
      
      
  );
};

export default JobList;
