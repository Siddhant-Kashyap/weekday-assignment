import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoreData } from "./Redux/reducers/dataSlice";
import JobCard from "./JobCard";
import Grid from "@mui/material/Grid";

const JobList = () => {
    const dispatch = useDispatch();
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



  if (loading && !data.length) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Grid container spacing={2}>
    {data &&
      data.map((job, index) => (
        <Grid key={index} item xs={12} sm={6} md={4}>
          <JobCard job={job} />
        </Grid>
      ))}
  </Grid>
  )
}

export default JobList