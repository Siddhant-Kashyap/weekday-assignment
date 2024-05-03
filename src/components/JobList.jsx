import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoreData } from "./Redux/reducers/dataSlice";
import { clearFilters } from "./Redux/reducers/filterSlice";
import JobCard from "./JobCard";
import Grid from "@mui/material/Grid";

const JobList = () => {
  const dispatch = useDispatch();
  const [checkFilter, setCheckFilter] = useState(false);
  const filters = useSelector((state) => state.filter.filters); // Assuming your filter state is stored under 'filter'

  const clearArray=()=>{
    if(filters.length ==0){
        dispatch(clearFilters)
        console.log("clear")
        setCheckFilter(false)

      } 
  }
  useEffect(() => {
  
      console.log("Filter is updated:", filters);
      clearArray()
     
      if(filters.length>0) setCheckFilter(true)
     
  
  }, [checkFilter, dispatch, filters,filters.length]); // Watch for changes in checkFilter and filters

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

  const filteredData = data.filter((job) => {
    if(!checkFilter){
        return data
    }else{
        const jobRoleLower = job.jobRole.toLowerCase();
      return filters.some((filter) => filter.toString().toLowerCase() === jobRoleLower);
    }
      
    
});



  if (loading && !data.length) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Grid container spacing={2}>
      {filteredData &&
        filteredData.map((job, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <JobCard job={job} />
          </Grid>
        ))}
    </Grid>
  );
};

export default JobList;
