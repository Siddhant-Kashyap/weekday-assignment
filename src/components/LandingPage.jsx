import Filters from "./Filters";

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
        </div>
      </div>
    </>
  );
};

export default LandingPage;