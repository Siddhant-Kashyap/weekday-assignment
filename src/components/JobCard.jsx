import { Card, CardContent, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import JobSubCard from "./JobSubCard";
import HourglassTopSharp from "@mui/icons-material/HourglassTopSharp"
import BoltIcon from "@mui/icons-material/Bolt"
import blurredDP from "../assets/blurreddp.jpg";
import Avatar from "@mui/material/Avatar";
const JobCard = ({ job }) => {
    const truncatedDetails = job.jobDetailsFromCompany
    .split(" ")
    .slice(0, 53)
    .join(" ");
  const fadeEffect1 = job.jobDetailsFromCompany
    .split(" ")
    .slice(54, 70)
    .join(" ");
  const fadeEffect2 = job.jobDetailsFromCompany
    .split(" ")
    .slice(71, 90)
    .join(" ");
  return (
    <Card
    sx={{
      maxWidth: 400,
      margin: "10px auto",
      borderRadius: 10,
      transition: "transform 0.3s",
      "&:hover": {
        transform: "translateY(-5px)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      },
    }}
  >
    <CardContent>
      <div>
        <Chip
          icon={<HourglassTopSharp />}
          label="Posted 10 days ago"
          variant="outlined"
        />
      </div>
      <div>
        <JobSubCard location={job.location} jobRole={job.jobRole} />
      </div>

      <Typography
        color={"#808080"}
        gutterBottom
        variant="h6"
        component="div"
        sx={{ fontFamily: "Montserrat, sans-serif" }}
      >
        Estimated Salary: {job.salaryCurrencyCode}{" "}
        {job.minJdSalary && job.minJdSalary}
        {job.minJdSalary && " - "} {job.maxJdSalary ? job.maxJdSalary : "-/-"}
      </Typography>
      <Typography
        variant="h6"
        color="black"
        sx={{ fontFamily: "Montserrat, sans-serif" }}
      >
        About Company:
      </Typography>
      <Typography
        variant="h6"
        color="black"
        sx={{ fontFamily: "Montserrat, sans-serif" }}
      >
        About us
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        {/* Render truncated details with fade-out effect */}
        <span>{truncatedDetails}</span>
        <span style={{ opacity: 0.5 }}> {fadeEffect1}</span>
        <span style={{ opacity: 0.2 }}>{fadeEffect2}</span>
      </Typography>
      <div style={{ textAlign: "center" }}>
        <Button variant="text">View Job</Button>
      </div>
      <Typography
        variant="subtitle1"
        color="grey"
        sx={{
          fontWeight: "semi-bold",
          fontFamily: "Schibsted Grotesk, sans-serif",
        }}
      >
        Minimum Experience
      </Typography>
      <Typography
        variant="subtitle1"
        color="grey"
        sx={{
          fontWeight: "semi-bold",
          fontFamily: "Schibsted Grotesk, sans-serif",
        }}
      >
        {job.minExp ? job.minExp + " years" : "--"}
      </Typography>
      <div>
        <Button
          variant="contained "
          sx={{ backgroundColor: "#00FFFF", width: "100%" }}
        >
          <BoltIcon sx={{ color: "yellow" }} />
          Easy Apply
        </Button>
      </div>

      <div style={{ marginTop: "5px" }}>
        <a href={job.jdLink} style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#0B57D0", width: "100%" }}
          >
            <Avatar alt="Remy Sharp" src={blurredDP} />
            <Avatar sx={{ marginLeft: "2px" }} alt="dp" src={blurredDP} />
            Unlock referral asks
          </Button>
        </a>
      </div>

      {/* <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        JD Link: <a href={job.jdLink}>{job.jdLink}</a>
      </Typography> */}
    </CardContent>
  </Card>
  )
}

export default JobCard