import Filters from "./Filters";
import JobList from "./JobList";

const LandingPage = () => {
  return (
    <>
      <div className="main">
        <div className="filters">
          {/* Filters  */}
          <Filters/>
        </div>

        <div className="job-card">
         {/* JobList card */}
         <JobList/>
        </div>
      </div>
    </>
  );
};

export default LandingPage;